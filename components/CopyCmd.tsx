"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyCmd({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-soft hover:bg-slate-50 active:scale-[0.99]"
      aria-label="Copy command"
      title="Copy"
    >
      <code className="font-mono text-slate-800">{value}</code>
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}
