# Khan Abbrar Jaheen Islam — Portfolio

A responsive personal portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages on pushes to `main` and `portfolio-development`.

In the repository settings, open **Pages** and set the build and deployment source to **GitHub Actions**.

The Vite base path is configured for this project repository: `/claude-todo-demo/`. If you rename the repository, update `base` in `vite.config.ts`.

## Personalize before sharing

- Replace the profile portrait placeholder in `src/App.tsx` with a professional photograph.
- Add your approved CV file as `public/cv.pdf`, then change the CV call-to-action in `src/App.tsx` to link to it.
- Replace `YOUR_EMAIL@example.com` with your professional email.
- Replace the generic LinkedIn links with your exact profile URL.
- Add the exact Supply Chain Insider article title and a direct publication link.
- Confirm experience dates, role descriptions, project details and achievement labels.
- Add approved project images or diagrams where available.

Missing details are deliberately represented as placeholders rather than invented. The contact links are email/social links; no form backend has been configured.
