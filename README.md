# LAMSA Coffee

A responsive, bilingual English/Arabic website for LAMSA in Sbata, Casablanca.

Run `npm start` and open http://localhost:3000. No dependency installation required. The digital menu is also available at `/menu`, suitable for a future table QR code.

## Deploy to Vercel

Import the repository with the repository root as the Root Directory. `vercel.json` configures the Other framework preset, `npm run build`, and the `dist` output directory. The build copies only the public HTML, CSS, JavaScript, and image assets; the local preview server and project files are not published. Vercel rewrites `/menu` and `/menu/` to the homepage so the digital menu opens correctly.

Run `npm run check` and `npm run build` to verify the deployment files locally. Push the changes to the connected GitHub branch to trigger a new Vercel deployment.

Features: original supplied logo, editorial homepage, coffee collection, café concept, keyboard-accessible menu filters, Arabic translation with right-to-left layout, mobile navigation, and neighbourhood directions.

Before launch, replace the sample menu and prices in `app.js`, add the verified street address and opening hours in `index.html` and the Arabic translation in `app.js`, and replace concept photos with the café’s own photos. The directions link currently points to the Sbata neighbourhood, not a confirmed LAMSA location. No social account, phone number or ordering service has been invented.

Photography: AI-generated hero concept; supporting concept photography from Unsplash. The supplied LAMSA logo is preserved unchanged and displayed using CSS framing.
