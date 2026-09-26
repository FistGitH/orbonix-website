(async function () {
  "use strict";
  const canvas = document.getElementById("system-canvas"),
    ctx = canvas.getContext("2d"),
    status = document.getElementById("system-status");
  try {
    const response = await fetch("/data/solar-system.json");
    if (!response.ok) throw Error("System data unavailable");
    const data = await response.json(),
      planet = data.planets.find((p) => p.id === document.body.dataset.planet);
    if (!planet) throw Error("Unknown planet");
    const moons = data.moons
      .filter((m) => m.parent === planet.id)
      .sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
    let selected = planet,
      days = 0,
      speed = 1,
      paused = false,
      zoom = 1,
      real = false,
      pan = { x: 0, y: 0 },
      focus = null,
      last = performance.now(),
      width = 800,
      height = 600,
      hit = [];
    const t = (s) => (window.orbonixTranslate ? window.orbonixTranslate(s) : s);
    const select = document.getElementById("moon-select");
    for (const m of [planet, ...moons]) {
      const option = document.createElement("option");
      option.value = m.id;
      option.textContent = m.name;
      select.append(option);
    }
    const search = document.getElementById("moon-search"),
      list = document.getElementById("moon-list");
    function renderList() {
      list.replaceChildren();
      const query = search.value.toLocaleLowerCase();
      for (const m of moons.filter((m) =>
        m.name.toLocaleLowerCase().includes(query),
      )) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = m.name;
        button.onclick = () => choose(m);
        list.append(button);
      }
    }
    search.addEventListener("input", renderList);
    renderList();
    function row(label, value) {
      const li = document.createElement("div"),
        dt = document.createElement("dt"),
        dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      li.append(dt, dd);
      return li;
    }
    function choose(m) {
      selected = m;
      select.value = m.id;
      focus = m === planet ? null : m;
      pan = { x: 0, y: 0 };
      const detail = document.getElementById("moon-details");
      detail.replaceChildren();
      const heading = document.createElement("h2");
      heading.textContent = m.name;
      detail.append(heading);
      const dl = document.createElement("dl");
      dl.append(
        row(
          "Mean radius",
          m.radius ? m.radius.toLocaleString() + " km" : "Not available",
        ),
        row(
          m === planet ? "Distance from Sun" : "Orbital semi-major axis",
          m.distance
            ? m.distance.toLocaleString() + (m === planet ? " AU" : " km")
            : "Not available",
        ),
        row("Orbital period", m.period ? m.period + " days" : "Not available"),
      );
      if (m !== planet) {
        dl.append(
          row("Eccentricity", m.eccentricity ?? "Not available"),
          row(
            "Inclination",
            m.inclination === undefined ? "Not available" : m.inclination + "°",
          ),
          row("Discovery", m.discovered || "Not available"),
          row("Discoverers", m.discoverers || "Not available"),
          row("Reference frame", m.frame || "Not available"),
        );
      }
      detail.append(dl);
      const note = document.createElement("p");
      note.textContent = m.texture
        ? "NASA-derived image map. Colors and unmapped areas may be processed."
        : "No resolved surface map is included for this body. The globe is a schematic illustration.";
      detail.append(note);
      if (m.photo) {
        const img = document.createElement("img");
        img.src = m.photo;
        img.alt = m.name;
        img.className = "moon-photo";
        img.loading = "lazy";
        img.onerror = () => {
          img.remove();
        };
        const credit = document.createElement("a");
        credit.href = m.photo;
        credit.target = "_blank";
        credit.rel = "noopener";
        credit.textContent = "Open original image and credits";
        detail.append(img, credit);
      }
      const route = window.findOrbonixPage(m.name);
      if (route) {
        const link = document.createElement("a");
        link.href = route.url;
        link.dataset.page = route.title;
        link.textContent = "Explore " + m.name;
        detail.append(link);
      }
      if(window.orbonixPlanet3D) window.orbonixPlanet3D.select(m.id);
      status.textContent =
        m !== planet && !m.distance
          ? "Orbital elements are not available for this satellite. It remains in the catalogue."
          : "";
    }
    select.addEventListener("change", () =>
      choose([planet, ...moons].find((m) => m.id === select.value)),
    );
    choose(planet);
    document.getElementById("system-pause").onclick = (e) => {
      paused = !paused;
      e.target.textContent = paused ? "Play" : "Pause";
    };
    document.getElementById("system-scale").onclick = (e) => {
      real = !real;
      zoom = 1;
      pan = { x: 0, y: 0 };
      e.target.textContent = real ? "Real distance" : "Observation scale";
    };
    document.getElementById("system-reset").onclick = () => {
      zoom = 1;
      pan = { x: 0, y: 0 };
      choose(planet);
      if(window.orbonixPlanet3D) window.orbonixPlanet3D.systemView();
    };
    document.getElementById("system-speed").oninput = (e) => {
      speed = Number(e.target.value);
      document.getElementById("system-speed-value").textContent =
        speed + " days/s";
    };
    document.getElementById("zoom-in").onclick = () =>
      (zoom = Math.min(100, zoom * 1.5));
    document.getElementById("zoom-out").onclick = () =>
      (zoom = Math.max(0.2, zoom / 1.5));
    const outer = Math.max(
      planet.radius * 4,
      ...moons.map((m) => (m.distance || 0) * (1 + (m.eccentricity || 0))),
    );
    function orbit(m, angle) {
      const e = m.eccentricity || 0,
        a = m.distance || 0;
      const x = a * (Math.cos(angle) - e),
        y = a * Math.sqrt(1 - e * e) * Math.sin(angle),
        w = ((m.periapsis || 0) * Math.PI) / 180;
      return {
        x: x * Math.cos(w) - y * Math.sin(w),
        y:
          (x * Math.sin(w) + y * Math.cos(w)) *
          Math.cos(((m.inclination || 0) * Math.PI) / 180),
      };
    }
    function position(m) {
      let M =
          (((m.meanAnomaly || 0) * Math.PI) / 180 +
            (days / (m.period || 1)) * 2 * Math.PI) %
          (2 * Math.PI),
        E = M;
      for (let i = 0; i < 8; i++)
        E -=
          (E - (m.eccentricity || 0) * Math.sin(E) - M) /
          (1 - (m.eccentricity || 0) * Math.cos(E));
      return orbit(m, E);
    }
    function project(p) {
      const distance = Math.hypot(p.x, p.y),
        extent = Math.min(width, height) * 0.41;
      const scale = real
        ? extent / outer
        : distance
          ? ((Math.log1p(distance / planet.radius) /
              Math.log1p(outer / planet.radius)) *
              extent) /
            distance
          : 0;
      return { x: p.x * scale, y: p.y * scale };
    }
    function screen(p) {
      const q = project(p),
        f = focus?.distance ? project(position(focus)) : { x: 0, y: 0 };
      return {
        x: width / 2 + (q.x - f.x + pan.x) * zoom,
        y: height / 2 + (q.y - f.y + pan.y) * zoom,
      };
    }
    const pointers = new Map();
    let dragged = false,
      pinch = 0;
    canvas.onpointerdown = (e) => {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      canvas.setPointerCapture(e.pointerId);
      dragged = false;
    };
    canvas.onpointermove = (e) => {
      const previous = pointers.get(e.pointerId);
      if (!previous) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()],
          d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch) zoom = Math.max(0.2, Math.min(100, (zoom * d) / pinch));
        pinch = d;
        dragged = true;
      } else {
        const dx = e.clientX - previous.x,
          dy = e.clientY - previous.y;
        if (Math.abs(dx) + Math.abs(dy) > 2) dragged = true;
        pan.x += dx / zoom;
        pan.y += dy / zoom;
      }
    };
    const release = (e) => {
      pointers.delete(e.pointerId);
      pinch = 0;
    };
    canvas.onpointerup = release;
    canvas.onpointercancel = release;
    canvas.onlostpointercapture = release;
    canvas.onwheel = (e) => {
      e.preventDefault();
      zoom = Math.max(0.2, Math.min(100, zoom * (e.deltaY > 0 ? 0.85 : 1.15)));
    };
    canvas.onclick = (e) => {
      if (dragged) return;
      const rect = canvas.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      const nearest = hit
        .map((h) => ({ ...h, d: Math.hypot(x - h.x, y - h.y) }))
        .filter((h) => h.d < Math.max(16, h.r))
        .sort((a, b) => a.d - b.d)[0];
      if (nearest) choose(nearest.m);
    };
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      width = r.width;
      height = r.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    new ResizeObserver(resize).observe(canvas);
    resize();
    function draw(now) {
      const elapsed = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!paused && !document.hidden) days += elapsed * speed;
      ctx.fillStyle = "#030817";
      ctx.fillRect(0, 0, width, height);
      hit = [];
      ctx.fillStyle = "#9baecb";
      for (let i = 0; i < 110; i++) {
        const x = (((i * 7919) % 1000) / 1000) * width,
          y = (((i * 3571) % 1000) / 1000) * height;
        ctx.fillRect(x, y, 1, 1);
      }
      for (const m of moons) {
        if (!m.distance) continue;
        ctx.strokeStyle = m === selected ? "#65d9ff" : "rgba(112,157,201,.18)";
        ctx.lineWidth = m === selected ? 1.4 : 0.6;
        ctx.beginPath();
        for (let i = 0; i <= 128; i++) {
          const p = screen(orbit(m, (i / 128) * Math.PI * 2));
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      const center = screen({ x: 0, y: 0 }),
        pr = Math.max(9, Math.min(65, 20 * Math.sqrt(zoom)));
      window.orbonixDrawPlanet(ctx, planet, center.x, center.y, pr);
      hit.push({ ...center, r: pr, m: planet });
      if (planet.rings) {
        ctx.strokeStyle = "#c4b59c";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.ellipse(
          center.x,
          center.y,
          pr * 1.8,
          pr * 0.4,
          -0.15,
          0,
          Math.PI * 2,
        );
        ctx.stroke();
      }
      for (const m of moons) {
        if (!m.distance) continue;
        const p = screen(position(m));
        if (p.x < -80 || p.x > width + 80 || p.y < -80 || p.y > height + 80)
          continue;
        const r =
          m === selected
            ? 30
            : Math.max(2.5, Math.min(9, (m.radius || 30) / 300));
        window.orbonixDrawPlanet(ctx, m, p.x, p.y, r);
        hit.push({ ...p, r, m });
        if (m === selected || moons.length < 12) {
          ctx.fillStyle = "#e4edff";
          ctx.font = "12px Arial";
          ctx.fillText(t(m.name), p.x + r + 5, p.y);
        }
      }
      ctx.fillStyle = "#b7cbe7";
      ctx.font = "12px Arial";
      ctx.fillText(t("Elapsed days") + ": " + days.toFixed(1), 12, height - 14);
      requestAnimationFrame(draw);
    }
    document.getElementById("moon-count").textContent =
      moons.length + " " + t("satellites in this catalogue");
    if (!moons.length) status.textContent = "No known natural satellites.";
    requestAnimationFrame(draw);
  } catch (e) {
    status.textContent = e.message;
  }
})();
