/* Spherical projection of credited equirectangular image maps, cached per body. */
(function () {
  const maps = new Map();
  window.orbonixDrawPlanet = function (ctx, body, x, y, r) {
    let record = maps.get(body.texture);
    if (body.texture && !record) {
      record = { ready: false };
      maps.set(body.texture, record);
      const image = new Image();
      image.onload = () => {
        const c = document.createElement("canvas");
        c.width = c.height = 256;
        const g = c.getContext("2d");
        for (let py = 0; py < 256; py++) {
          const ny = (py - 127.5) / 128,
            latitude = Math.asin(ny),
            half = Math.sqrt(1 - ny * ny);
          for (
            let px = Math.ceil(128 - half * 128);
            px < 128 + half * 128;
            px++
          ) {
            const nx = (px - 128) / 128;
            const longitude = Math.asin(Math.max(-1, Math.min(1, nx / half)));
            const u = (longitude / (2 * Math.PI) + 0.5) * image.width,
              v = (latitude / Math.PI + 0.5) * image.height;
            g.drawImage(
              image,
              Math.floor(u),
              Math.floor(v),
              1,
              1,
              px,
              py,
              1,
              1,
            );
          }
        }
        record.canvas = c;
        record.ready = true;
      };
      image.onerror = () => {
        record.failed = true;
      };
      image.src = body.texture;
    }
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = body.color || "#a3adc0";
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
    if (record?.ready) ctx.drawImage(record.canvas, x - r, y - r, r * 2, r * 2);
    const shade = ctx.createRadialGradient(
      x - r * 0.35,
      y - r * 0.3,
      r * 0.12,
      x,
      y,
      r,
    );
    shade.addColorStop(0, "rgba(255,255,255,.08)");
    shade.addColorStop(0.7, "rgba(0,0,0,.12)");
    shade.addColorStop(1, "rgba(0,0,0,.8)");
    ctx.fillStyle = shade;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
    ctx.restore();
  };
})();
