(function () {
  "use strict";
  let current = null,
    applyingLanguage = false;
  const t = (s) => (window.orbonixTranslate ? window.orbonixTranslate(s) : s);
  async function api(path, body, method) {
    const response = await fetch("/api/" + path, {
      method: method || (body ? "POST" : "GET"),
      headers: body ? { "Content-Type": "application/json" } : {},
      credentials: "same-origin",
      body: body ? JSON.stringify(body) : undefined,
    });
    let data;
    try {
      data = await response.json();
    } catch {
      throw Object.assign(
        new Error(
          "Registration is temporarily unavailable. Please try again later.",
        ),
        { status: 503 },
      );
    }
    if (!response.ok)
      throw Object.assign(new Error(data.error || "Service unavailable"), {
        status: response.status,
      });
    return data;
  }
  async function applyUser(u) {
    current = u;
    if (!u) return;
    applyingLanguage = true;
    try {
      if (window.orbonixLanguageReady) await window.orbonixLanguageReady;
      if (window.orbonixSetLanguage)
        await window.orbonixSetLanguage(u.language);
      else
        document.addEventListener("orbonix:languageready", () => applyUser(u), {
          once: true,
        });
    } finally {
      applyingLanguage = false;
    }
  }
  document.addEventListener("orbonix:languagechange", (e) => {
    if (current && !applyingLanguage)
      api("me", { language: e.detail.language }, "PATCH").catch(() => {
        const s = document.getElementById("account-status");
        if (s)
          s.textContent = t(
            "Language saved on this device. Account sync unavailable.",
          );
      });
  });
  function el(tag, text, cls) {
    const n = document.createElement(tag);
    if (text) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  }
  async function start() {
    const nav = document.getElementById("orbonix-auto-navigation"),
      route = window.findOrbonixPage?.("Account");
    if (nav && route && !document.getElementById("account-link")) {
      const a = el("a", "Account");
      a.id = "account-link";
      a.dataset.page = "Account";
      a.href = route.url;
      nav.append(a);
    }
    const root = document.getElementById("account-root");
    let profile,
      serviceUnavailable = false;
    try {
      profile = await api("me");
      await applyUser(profile.user);
    } catch (e) {
      serviceUnavailable = e.status !== 401;
    }
    if (!root) return;
    const status = document.getElementById("account-status");
    const tell = (m) => {
      status.textContent = t(m);
    };
    if (serviceUnavailable)
      tell("Registration is temporarily unavailable. Please try again later.");
    const hash = new URLSearchParams(location.hash.slice(1));
    const verify = hash.get("verify"),
      reset = hash.get("reset");
    if (verify || reset) history.replaceState(null, "", location.pathname);
    function form(title, fields, button, submit) {
      const f = el("form");
      f.append(el("h2", title));
      for (const [name, label, type, autocomplete] of fields) {
        const l = el("label", label),
          i = el("input");
        i.name = name;
        i.type = type;
        i.autocomplete = autocomplete || "off";
        i.required = true;
        i.maxLength = type === "password" ? 128 : type === "email" ? 254 : 80;
        if (type === "password" && autocomplete === "new-password")
          i.minLength = 12;
        l.append(i);
        f.append(l);
      }
      const b = el("button", button);
      b.type = "submit";
      f.append(b);
      f.addEventListener("submit", async (e) => {
        e.preventDefault();
        b.disabled = true;
        tell("Please wait…");
        try {
          await submit(Object.fromEntries(new FormData(f)));
        } catch (e) {
          tell(e.message);
        } finally {
          b.disabled = false;
        }
      });
      root.append(f);
      return f;
    }
    if (verify || reset) {
      form(
        verify ? "Confirm your account" : "Reset password",
        [
          [
            "password",
            "Choose your password (12 characters minimum)",
            "password",
            "new-password",
          ],
        ],
        verify ? "Confirm email" : "Save password",
        async (b) => {
          const r = await api(verify ? "verify" : "reset", {
            token: verify || reset,
            password: b.password,
          });
          tell(r.message);
          root.replaceChildren();
          showAuth();
        },
      );
      return;
    }
    function showAuth() {
      form(
        "Sign in",
        [
          ["email", "Email", "email", "email"],
          ["password", "Password", "password", "current-password"],
        ],
        "Sign in",
        async (b) => {
          profile = await api("login", b);
          await applyUser(profile.user);
          profile = await api("me");
          root.replaceChildren();
          await showProfile();
          tell("Signed in.");
        },
      );
      form(
        "Create account",
        [
          ["firstName", "First name", "text", "given-name"],
          ["lastName", "Last name", "text", "family-name"],
          ["email", "Email", "email", "email"],
          [
            "password",
            "Password (12 characters minimum)",
            "password",
            "new-password",
          ],
        ],
        "Create account",
        async (b) => {
          try {
            if (localStorage.getItem("orbonix-language-manual"))
              b.language = localStorage.getItem("orbonix-language");
          } catch {}
          const r = await api("register", b);
          tell(r.message);
        },
      );
      form(
        "Resend confirmation",
        [["email", "Email", "email", "email"]],
        "Send confirmation",
        async (b) => tell((await api("resend", b)).message),
      );
      form(
        "Forgot password",
        [["email", "Email", "email", "email"]],
        "Reset password",
        async (b) => tell((await api("forgot", b)).message),
      );
      root.append(
        el(
          "p",
          "Your registration country sets the initial language. You can change it at any time. Your name, email, photo and quiz progress are stored with your account.",
        ),
      );
    }
    async function showProfile() {
      const u = profile.user;
      const heading = el("h2");
      heading.translate = false;
      heading.textContent = u.firstName + " " + u.lastName;
      root.append(heading);
      const email = el("p", u.email);
      email.translate = false;
      root.append(email);
      const photo = el("img");
      photo.alt = "Profile photo";
      photo.width = 96;
      photo.height = 96;
      photo.className = "account-avatar";
      if (u.avatar) photo.src = "/api/avatar";
      else photo.hidden = true;
      root.append(photo);
      const label = el("label", "Profile photo");
      const input = el("input");
      input.type = "file";
      input.accept = "image/png,image/jpeg,image/webp";
      label.append(input);
      root.append(label);
      input.addEventListener("change", async () => {
        const f = input.files[0];
        if (!f) return;
        try {
          if (f.size > 10000000)
            throw Error("Choose a photo smaller than 10 MB.");
          const bitmap = await createImageBitmap(f);
          if (bitmap.width > 16000 || bitmap.height > 16000) {
            bitmap.close();
            throw Error("Photo dimensions are too large.");
          }
          const canvas = document.createElement("canvas");
          canvas.width = canvas.height = 256;
          const context = canvas.getContext("2d");
          const side = Math.min(bitmap.width, bitmap.height);
          context.drawImage(
            bitmap,
            (bitmap.width - side) / 2,
            (bitmap.height - side) / 2,
            side,
            side,
            0,
            0,
            256,
            256,
          );
          bitmap.close();
          await api("avatar", { image: canvas.toDataURL("image/jpeg", 0.85) });
          photo.src = "/api/avatar?t=" + Date.now();
          photo.hidden = false;
          tell("Photo saved.");
        } catch (e) {
          tell(e.message);
        }
        input.value = "";
      });
      const logout = el("button", "Sign out");
      logout.onclick = async () => {
        try {
          await api("logout", {});
          current = null;
          root.replaceChildren();
          showAuth();
          tell("Signed out.");
        } catch (e) {
          tell(e.message);
        }
      };
      root.append(logout);
      root.append(el("h2", "Your quiz results"));
      for (const q of profile.quizzes || []) {
        const p = el(
          "p",
          q.quiz.replaceAll("-", " ") + " · " + Math.round(q.percent) + "%",
        );
        root.append(p);
      }
      root.append(el("h2", "Achievements"));
      try {
        const data = await api("achievements");
        root.append(
          el(
            "p",
            "Percent of all confirmed accounts that earned each achievement.",
          ),
        );
        const grid = el("div", null, "achievement-grid");
        for (const a of data.achievements) {
          const earned = profile.earned?.some((e) => e.achievement === a.id),
            card = el(
              "article",
              null,
              "achievement " + (earned ? "earned" : ""),
            );
          card.append(
            el("h3", a.name),
            el("p", a.description),
            el("strong", earned ? "Unlocked" : "Locked"),
            el("p", a.percent + "%"),
          );
          grid.append(card);
        }
        root.append(grid);
      } catch (e) {
        tell(e.message);
      }
    }
    if (profile?.user) await showProfile();
    else showAuth();
  }
  window.orbonixSaveQuiz = async function (quiz, answers, attempt) {
    const result = document.getElementById("result");
    if (!result) return;
    let status = document.getElementById("quiz-save-status");
    if (!status) {
      status = el("p");
      status.id = "quiz-save-status";
      status.setAttribute("role", "status");
      result.append(status);
    }
    status.textContent = t("Saving quiz result…");
    try {
      const r = await api("quiz", { quiz, answers, attempt });
      status.textContent =
        r.percent + "% · " + t("Result saved to your account.");
    } catch (e) {
      status.textContent =
        t(e.message) + " " + t("This result has not been saved.");
      const route = window.findOrbonixPage("Account"),
        link = el("a", "Account");
      link.href = route.url;
      link.dataset.page = route.title;
      status.append(" ", link);
    }
  };
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", start);
  else start();
})();
