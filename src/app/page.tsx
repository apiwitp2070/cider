"use client";

import TextWithCopy from "@/components/common/text-with-copy";
import { Button } from "@/components/ui/button";
import { dialog } from "@/utils/dialog";

export default function Home() {
  function handleSubmit() {
    dialog.confirm();
  }

  return (
    <div className="items-center justify-items-center min-h-screen p-4 py-12 lg:py-20">
      <main className="flex w-full max-w-3xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Cider</h1>
          <p className="text-muted-foreground">
            Shadcn Alert Dialog from anywhere using a tiny helper.
          </p>
        </header>

        <div className="flex items-center gap-3">
          <Button onClick={handleSubmit}>Open Confirm</Button>
        </div>

        <section className="rounded-lg border p-5">
          <h2 className="font-medium text-lg">Quick Start</h2>

          <div className="mt-4 space-y-2">
            <p>Get required files from registry</p>
            <TextWithCopy>
              bunx --bun shadcn@latest add
              https://cider-alert.vercel.app/r/default.json
            </TextWithCopy>
            <div className="mt-4 space-y-2">
              <p>
                Add <code>{"<ConfirmDialog />"}</code> at your app root (e.g.
                Next.js layout).
              </p>
              <TextWithCopy>
                {`import { ConfirmDialog } from "@/components/common/confirm-dialog";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ConfirmDialog />
      </body>
    </html>
  );
}`}
              </TextWithCopy>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div>
              Call <code>dialog.confirm()</code> inside any function.
            </div>
            <TextWithCopy>
              {`import { dialog } from "@/utils/dialog";

function handleDelete() {
  dialog.confirm({
    title: "Delete item",
    description: "Are you sure you want to proceed?",
    confirmText: "Delete",
    variant: "danger",
  });
}`}
            </TextWithCopy>
          </div>
        </section>

        <footer className="text-center mt-10">
          <a
            href="https://github.com/apiwitp2070/cider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground"
          >
            Repository
          </a>
        </footer>
      </main>
    </div>
  );
}
