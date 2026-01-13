import Image from "next/image";
import type { HackathonPhoto } from "@/data/site";

export function HackathonGallery({ photos }: { photos: HackathonPhoto[] }) {
  const nine = photos.slice(0, 9);

  return (
    <div className="section-card p-5 sm:p-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {nine.map((p, idx) => (
          <div
            key={`${p.src}-${idx}`}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
              priority={idx < 3}
            />
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Tip: replace images in <code className="font-mono">public/hackathon/</code> and keep exactly 9.
      </p>
    </div>
  );
}
