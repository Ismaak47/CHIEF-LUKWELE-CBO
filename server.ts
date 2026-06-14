import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import https from "https";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Endpoint to fetch, modify and proxy the Charitics website
  app.get("/demo/*", (req, res) => {
    let subpath = req.params[0] || "";
    if (subpath === "" || subpath === "index.html") {
      subpath = "index.html";
    }

    if (subpath.endsWith("tamosa-logo-white-v1.svg") || subpath.endsWith("logo-white.svg")) {
      res.set("Content-Type", "image/svg+xml");
      res.set("Access-Control-Allow-Origin", "*");
      res.send(`<svg width="380" height="60" viewBox="0 0 380 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&amp;display=swap');
      .brand-text {
        font-family: 'Outfit', 'Inter', system-ui, -apple-system, sans-serif;
        font-weight: 900;
        font-size: 26px;
        letter-spacing: -0.2px;
      }
    </style>
    <linearGradient id="swooshGradWhite" x1="16" y1="46" x2="352" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="50%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>
  </defs>
  <text x="15" y="34" fill="#FFFFFF" class="brand-text">CHIEF LUKWELE CBO</text>
  <path d="M 16,42 C 75,50 180,49 295,39 C 322,36.5 342,32 352,24 C 336,31 300,37 250,39.5 C 150,44.5 70,44 16,42 Z" fill="url(#swooshGradWhite)" />
  <path d="M 356,10 Q 356,18 364,18 Q 356,18 356,26 Q 356,18 348,18 Q 356,18 356,10 Z" fill="#34D399" />
</svg>`);
      return;
    }

    if (subpath.endsWith("tamosa-logo-v1.svg") || subpath.endsWith("logo.svg")) {
      res.set("Content-Type", "image/svg+xml");
      res.set("Access-Control-Allow-Origin", "*");
      res.send(`<svg width="380" height="60" viewBox="0 0 380 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&amp;display=swap');
      .brand-text {
        font-family: 'Outfit', 'Inter', system-ui, -apple-system, sans-serif;
        font-weight: 900;
        font-size: 26px;
        letter-spacing: -0.2px;
      }
    </style>
    <linearGradient id="swooshGradDark" x1="16" y1="46" x2="352" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="40%" stop-color="#2563EB"/>
      <stop offset="75%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <text x="15" y="34" fill="#0B1329" class="brand-text">CHIEF LUKWELE CBO</text>
  <path d="M 16,42 C 75,50 180,49 295,39 C 322,36.5 342,32 352,24 C 336,31 300,37 250,39.5 C 150,44.5 70,44 16,42 Z" fill="url(#swooshGradDark)" />
  <path d="M 356,10 Q 356,18 364,18 Q 356,18 356,26 Q 356,18 348,18 Q 356,18 356,10 Z" fill="#10B981" />
</svg>`);
      return;
    }

    if (subpath.endsWith("banner-img.png") || subpath.endsWith("hero-community.jpg")) {
      const filePath = path.join(process.cwd(), "public/hero-community.jpg");
      if (fs.existsSync(filePath)) {
        res.set("Content-Type", "image/jpeg");
        res.set("Access-Control-Allow-Origin", "*");
        res.sendFile(filePath);
      } else {
        res.redirect("/hero-community.jpg");
      }
      return;
    }

    const targetUrl = `https://charitics.temptics.com/${subpath}`;

    const performGet = (url: string, attempt: number) => {
      const proxyRequest = https.get(url, (targetRes) => {
        // If the upstream responded with a 5xx or transient error status, check if we should retry
        if (targetRes.statusCode && targetRes.statusCode >= 500 && attempt < 3) {
          console.warn(`Upstream returned 5xx status ${targetRes.statusCode}. Retrying attempt ${attempt + 1}...`);
          setTimeout(() => performGet(url, attempt + 1), 500);
          return;
        }

        // If it's HTML, fetch it and modify
        const contentType = targetRes.headers["content-type"] || "";
        if (
          contentType.includes("text/html") ||
          subpath.endsWith(".html") ||
          !subpath.includes(".")
        ) {
          let data = "";
          targetRes.on("data", (chunk) => {
            data += chunk;
          });
          targetRes.on("end", () => {
            let modified = data;

            // 1. Inject same-origin base tag in the head. This resolves all relative paths
            // to our /demo/ proxy automatically and same-origin, avoiding all CORS blocks on fonts and icons.
            // Also inject custom high-visibility CSS to scale the logo beautifully by 31.25%.
            const customHeadPayload = `<head>
    <base href="/demo/">
    <style>
      /* Highly-visible, non-distorted responsive header logo resizing */
      img[src*="tamosa-logo"],
      img[src*="logo.svg"],
      img[src*="logo-white.svg"],
      .logo img,
      .site-logo img {
        height: 42px !important;
        max-height: 42px !important;
        width: auto !important;
        transform: scale(1) !important;
        transition: transform 0.2s ease, opacity 0.2s ease !important;
      }
      
      /* Subtle premium interactivity hover */
      img[src*="tamosa-logo"]:hover,
      .logo img:hover {
        transform: scale(1.02) !important;
        opacity: 0.95 !important;
      }

      /* Protect and stabilize header navigation bar layout */
      .header-navigation,
      .header-area,
      .site-header {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        display: flex !important;
        align-items: center !important;
      }
    </style>`;

            if (modified.includes("<head>")) {
              modified = modified.replace("<head>", customHeadPayload);
            } else {
              const headIdx = modified.indexOf("<head");
              if (headIdx !== -1) {
                const headEnd = modified.indexOf(">", headIdx);
                if (headEnd !== -1) {
                  modified =
                    modified.slice(0, headEnd + 1) +
                    customHeadPayload.replace("<head>", "") +
                    modified.slice(headEnd + 1);
                }
              }
            }

            // 2. Remove the Home dropdown menu and caret indicators cleanly, making "Home" a standard nav link.
            const homeDropdownRegex = /<div class="has-sub-menu">\s*<a role="button">Home<\/a>\s*<div class="ul-header-submenu">\s*<ul>[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/g;
            modified = modified.replace(
              homeDropdownRegex,
              `<a href="/demo/index.html">Home</a>`
            );

            // 3. Completely remove the "Blog" dropdown/submenu and menu item from header navigation
            const blogDropdownRegex = /<div class="has-sub-menu">\s*<a role="button">Blog<\/a>\s*<div class="ul-header-submenu">\s*<ul>[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/g;
            modified = modified.replace(blogDropdownRegex, "");

            // 4. Rewrite all relative HTML links so clicking any other page also navigates via our proxy
            modified = modified.replace(/href="([^"\/]+.html)"/g, 'href="/demo/$1"');

            // 4.5 Replace logo source paths with direct or proxied assets
            modified = modified.replace(/assets\/img\/logo-white\.svg/g, "/demo/tamosa-logo-white-v1.svg");
            modified = modified.replace(/assets\/img\/logo\.svg/g, "/demo/tamosa-logo-v1.svg");

            // Use a case-insensitive regex to find the banner image and replace it with a direct root path.
            // This avoids going through the /demo/ proxy for the hero image, allowing Vercel to serve it directly from /public.
            modified = modified.replace(/assets\/img\/banner-img\.(png|jpg|jpeg|webp)/gi, "/hero-community.jpg?v=2");

            // 5. Replace brand names "Charitics", "CHARITICS", "Tamosa", "TAMOSA" with "CHIEF LUKWELE CBO" throughout the website
            modified = modified.replace(/Charitics/g, "CHIEF LUKWELE CBO");
            modified = modified.replace(/CHARITICS/g, "CHIEF LUKWELE CBO");
            modified = modified.replace(/Tamosa/g, "CHIEF LUKWELE CBO");
            modified = modified.replace(/TAMOSA/g, "CHIEF LUKWELE CBO");

            res.set("Content-Type", "text/html");
            res.send(modified);
          });
        } else {
          // Fallback: piping assets directly while stripping potential restrictive CSP or Frame-Option headers
          // and enabling Access-Control-Allow-Origin to ensure total cross-frame compatibility
          const cleanHeaders = { ...targetRes.headers };
          delete cleanHeaders["content-security-policy"];
          delete cleanHeaders["x-frame-options"];
          res.set(cleanHeaders);
          res.set("Access-Control-Allow-Origin", "*");
          targetRes.pipe(res);
        }
      });

      // Set a 7-second timeout for the initial connection and request
      proxyRequest.setTimeout(7000, () => {
        proxyRequest.destroy(new Error("Timeout of 7000ms exceeded"));
      });

      proxyRequest.on("error", (err: any) => {
        if (attempt < 3) {
          console.warn(`Proxy error at attempt ${attempt}:`, err.message, `. Retrying attempt ${attempt + 1}...`);
          setTimeout(() => performGet(url, attempt + 1), 500);
        } else {
          console.error("Proxy error after maximum retries:", err);
          res.status(500).send("Proxy error loading asset");
        }
      });
    };

    performGet(targetUrl, 1);
  });

  // Start Vite server middleware for React development assets in local dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
