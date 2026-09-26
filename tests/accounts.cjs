const fs = require("fs"),
  path = require("path"),
  assert = require("assert/strict");
const { Miniflare } = require("miniflare");
(async () => {
  const root = path.resolve(__dirname, "..");
  const wrapper = `import worker from ${JSON.stringify(root.replaceAll("\\", "/") + "/server/worker.mjs")};let sent=[];export default {async fetch(request,env,ctx){if(new URL(request.url).pathname==='/__mail')return Response.json(sent);Object.defineProperty(request,'cf',{value:{country:'DE'}});return worker.fetch(request,{...env,EMAIL:{send:async message=>{sent.push(message);return {messageId:'test'};}}},ctx);}};`;
  const workerSource = fs
    .readFileSync(root + "/server/worker.mjs", "utf8")
    .replace(
      /import\s+\{[^}]+\}\s+from\s+["']\.\/achievements\.mjs["'];/,
      fs
        .readFileSync(root + "/server/achievements.mjs", "utf8")
        .replaceAll("export ", ""),
    )
    .replace(
      /import quizBank from ["']\.\/quiz-bank\.json["'] with \{ type: ["']json["'] \};/,
      "const quizBank=" +
        fs.readFileSync(root + "/server/quiz-bank.json", "utf8") +
        ";",
    )
    .replaceAll("export async function", "async function")
    .replaceAll("export function", "function")
    .replace("export default {", "const worker = {");
  const build = {
    outputFiles: [
      { text: workerSource + "\n" + wrapper.slice(wrapper.indexOf(";") + 1) },
    ],
  };
  const mf = new Miniflare({
    modules: true,
    script: build.outputFiles[0].text,
    compatibilityDate: "2026-08-06",
    compatibilityFlags: ["nodejs_compat"],
    d1Databases: ["DB"],
    bindings: {
      SITE_ORIGIN: "https://orbonix.net",
      EMAIL_FROM: "noreply@accounts.orbonix.net",
    },
  });
  const db = await mf.getD1Database("DB");
  await db.batch(
    fs
      .readFileSync(root + "/server/schema.sql", "utf8")
      .split(";")
      .map((x) => x.trim())
      .filter(Boolean)
      .map((sql) => db.prepare(sql)),
  );
  let cookie = "";
  const request = async (p, b, method, origin = "https://orbonix.net") => {
    const r = await mf.dispatchFetch("https://orbonix.net" + p, {
      method: method || (b ? "POST" : "GET"),
      headers: {
        Origin: origin,
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      body: b ? JSON.stringify(b) : undefined,
    });
    const data = await r.json();
    return { status: r.status, data, cookie: r.headers.get("set-cookie") };
  };
  let r = await request("/api/register", {
    firstName: "Ada",
    lastName: "Lovelace",
    email: "ada@example.com",
    password: "long-password-123",
  });
  assert.equal(r.status, 201, JSON.stringify(r));
  r = await request("/api/login", {
    email: "ada@example.com",
    password: "long-password-123",
  });
  assert.equal(r.status, 403);
  let mail = (await request("/__mail")).data;
  assert.equal(mail.length, 1);
  let token = mail[0].text.match(/verify=([a-f0-9]+)/)[1];
  r = await request("/api/verify", {
    token,
    password: "confirmed-password-123",
  });
  assert.equal(r.status, 200, JSON.stringify(r));
  assert.equal(
    (
      await request("/api/verify", {
        token,
        password: "confirmed-password-123",
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request("/api/login", {
        email: "ada@example.com",
        password: "wrong",
      })
    ).status,
    401,
  );
  r = await request("/api/login", {
    email: "ada@example.com",
    password: "confirmed-password-123",
  });
  assert.equal(r.status, 200, JSON.stringify(r));
  assert.equal(r.data.user.language, "de");
  assert.ok(r.cookie.includes("HttpOnly") && r.cookie.includes("Secure"));
  cookie = r.cookie.split(";")[0];
  assert.equal(
    (
      await request(
        "/api/me",
        { language: "ru" },
        "PATCH",
        "https://evil.example",
      )
    ).status,
    403,
  );
  assert.equal(
    (await request("/api/me", { language: "ru" }, "PATCH")).status,
    200,
  );
  assert.equal((await request("/api/me")).data.user.language, "ru");
  const bank = JSON.parse(fs.readFileSync(root + "/server/quiz-bank.json"));
  for (const [quiz, questions] of Object.entries(bank)) {
    r = await request("/api/quiz", {
      quiz,
      answers: questions.map((q) => q.correct),
      attempt: crypto.randomUUID(),
    });
    assert.equal(r.status, 200, JSON.stringify(r));
    assert.equal(r.data.percent, 100);
  }
  r = await request("/api/me");
  assert.equal(r.data.earned.length, 20);
  r = await request("/api/achievements");
  assert.equal(r.data.total, 1);
  assert.ok(r.data.achievements.every((a) => a.percent === 100));
  r = await request("/api/quiz", {
    quiz: "Planet-Quiz",
    answers: [999],
    attempt: crypto.randomUUID(),
  });
  assert.equal(r.status, 400);
  const image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aRz8AAAAASUVORK5CYII=";
  assert.equal((await request("/api/avatar", { image })).status, 200);
  const avatar = await mf.dispatchFetch("https://orbonix.net/api/avatar", {
    headers: { Cookie: cookie },
  });
  assert.equal(avatar.status, 200);
  assert.equal(avatar.headers.get("Content-Type"), "image/png");
  assert.equal(
    (
      await request("/api/avatar", {
        image: "data:image/svg+xml;base64,PHN2Zz4=",
      })
    ).status,
    400,
  );
  assert.equal(
    (await request("/api/forgot", { email: "ada@example.com" })).status,
    200,
  );
  mail = (await request("/__mail")).data;
  token = mail.at(-1).text.match(/reset=([a-f0-9]+)/)[1];
  assert.equal(
    (await request("/api/reset", { token, password: "new-password-456" }))
      .status,
    200,
  );
  assert.equal((await request("/api/me")).status, 401);
  assert.equal(
    (
      await request("/api/login", {
        email: "ada@example.com",
        password: "new-password-456",
      })
    ).status,
    200,
  );
  const row = await db.prepare("SELECT password_hash FROM users").first();
  assert.ok(!row.password_hash.includes("password"));
  console.log(
    "Passed: actual Workers runtime + D1 registration, verification/replay, password hashing, secure sessions, CSRF, country language, profile preference, server scoring, all 20 achievements, actual percentages, avatars, password reset/revocation.",
  );
  await mf.dispose();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
