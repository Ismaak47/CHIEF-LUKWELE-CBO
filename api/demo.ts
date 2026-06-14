import https from "https";
import path from "path";
import fs from "fs";

export default function handler(req: any, res: any) {
  // Set CORS and standard headers
  res.setHeader("Access-Control-Allow-Origin", "*");

  let subpath = (req.query.path as string) || "";
  if (subpath === "" || subpath === "index.html") {
    subpath = "index.html";
  }

  if (subpath.endsWith("tamosa-logo-white-v1.svg") || subpath.endsWith("logo-white.svg")) {
    res.setHeader("Content-Type", "image/svg+xml");
    res.end(`<svg width="380" height="60" viewBox="0 0 380 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    res.setHeader("Content-Type", "image/svg+xml");
    res.end(`<svg width="380" height="60" viewBox="0 0 380 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(fs.readFileSync(filePath));
    } else {
      res.writeHead(302, { Location: "/hero-community.jpg" });
      res.end();
    }
    return;
  }

  const targetUrl = `https://charitics.temptics.com/${subpath}`;

  const performGet = (urlStr: string, attempt: number) => {
    const proxyRequest = https.get(urlStr, (targetRes) => {
      if (targetRes.statusCode && targetRes.statusCode >= 500 && attempt < 3) {
        setTimeout(() => performGet(urlStr, attempt + 1), 500);
        return;
      }

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

          // 1. Inject same-origin base tag in the head to resolve relative assets correctly
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

          // 2. Remove Home dropdown
          const homeDropdownRegex = /<div class="has-sub-menu">\s*<a role="button">Home<\/a>\s*<div class="ul-header-submenu">\s*<ul>[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/g;
          modified = modified.replace(
            homeDropdownRegex,
            `<a href="/demo/index.html">Home</a>`
          );

          // 3. Remove Blog dropdown
          const blogDropdownRegex = /<div class="has-sub-menu">\s*<a role="button">Blog<\/a>\s*<div class="ul-header-submenu">\s*<ul>[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/g;
          modified = modified.replace(blogDropdownRegex, "");

          // 4. Rewrite HTML links
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

          res.setHeader("Content-Type", "text/html");
          res.end(modified);
        });
      } else {
        const cleanHeaders = { ...targetRes.headers };
        delete cleanHeaders["content-security-policy"];
        delete cleanHeaders["x-frame-options"];

        for (const [key, value] of Object.entries(cleanHeaders)) {
          if (value !== undefined) {
            res.setHeader(key, value as string);
          }
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        targetRes.pipe(res);
      }
    });

    proxyRequest.setTimeout(7000, () => {
      proxyRequest.destroy(new Error("Timeout of 7000ms exceeded"));
    });

    proxyRequest.on("error", (err: any) => {
      if (attempt < 3) {
        setTimeout(() => performGet(urlStr, attempt + 1), 500);
      } else {
        res.statusCode = 500;
        res.end("Proxy error loading asset");
      }
    });
  };

  performGet(targetUrl, 1);
}
