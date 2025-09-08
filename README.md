## Cider

Cider provides a small set of components and utilities to open a Shadcn AlertDialog programmatically.

### installation

This package comes with modified shadcn `Button` and `AlertDialog` to include custom variant and add loading state to it. If don't need it, or want to install in existing project, you can use `groupped` registry to download file to separate directory first, then grab only files that you want.

- If install in fresh application, You can grab the files from this repository with shadcn registry command.
   ```bash
   bunx --bun shadcn@latest add https://cider-alert.vercel.app/r/default.json
   ```
   
- For existing project, You can install it in separate groupped directory, then copy required file to your project manually.
   ```bash
   bunx --bun shadcn@latest add https://cider-alert.vercel.app/r/groupped.json
   ```
    This will store all files under `/cider` directory
### Usage

1. Add `ConfirmDialog` component at the app root (e.g. Next.js `src/app/layout.tsx`):

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

2. Call the dialog with `dialog` utility:

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
