import { CopyIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TextWithCopyProps {
  children: string;
}

export default function TextWithCopy({ children }: TextWithCopyProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(textToCopy: string) {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      }
    } catch (err) {
      console.error("Failed to copy content: ", err);
    }
  }

  return (
    <pre className="rounded-md bg-muted p-3 text-xs overflow-x-auto flex gap-3">
      <div className="flex-1 py-3 self-center overflow-x-scroll">
        {children}
      </div>
      <Button variant="ghost" onClick={() => copyTextToClipboard(children)}>
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </pre>
  );
}
