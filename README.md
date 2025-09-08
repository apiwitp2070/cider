This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Cider (Shadcn dialog caller) Registry

Cider provides a small set of components and utilities to open a Shadcn AlertDialog programmatically.

### Registry Layout

- Directory: `registry/neutral/Cider`
  - Includes: `components/ui/*`, `components/common/confirm-dialog.tsx`, `utils/dialog.ts`, `interfaces/common/dialog.ts`, `consts/common/dialog.ts`, and `lib/utils.ts`.
- Index: `registry.json` (lists all registry items and their files)

### How to Use

1. Copy files from `registry/neutral/Cider` into your project under `src/` preserving structure (or consume via `registry.json`).
2. Add the host component at the app root (e.g. Next.js `src/app/layout.tsx`):

   ```tsx
   import { ConfirmDialog } from "@/components/common/confirm-dialog";

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="en">
         <body>
           {children}
           <ConfirmDialog />
         </body>
       </html>
     );
   }
   ```

3. Call the dialog anywhere:

   ```tsx
   import { dialog } from "@/utils/dialog";

   function onAction() {
     dialog.confirm({
       title: "Are you sure?",
       description: "This action cannot be undone.",
       confirmText: "Confirm",
     });
   }
   ```

Variants are also available: `dialog.success(...)`, `dialog.info(...)`, `dialog.warning(...)`, `dialog.danger(...)`, `dialog.error(...)`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
