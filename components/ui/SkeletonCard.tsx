"use client";
import { useState, useEffect, useRef, HTMLAttributes } from "react";

export function SkeletonCard({ children, className = "", ...rest }: HTMLAttributes<HTMLDivElement>) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const imgs = el.querySelectorAll("img");
    if (imgs.length === 0) { setLoaded(true); return; }
    if (Array.from(imgs).some(img => img.complete && img.naturalWidth > 0)) {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    imgs.forEach(img => img.addEventListener("load", onLoad, { once: true }));
    return () => imgs.forEach(img => img.removeEventListener("load", onLoad));
  }, []);

  return (
    <div ref={ref} className={className} {...rest}>
      {!loaded && (
        <div className="absolute inset-0 bg-white/[0.03] animate-pulse rounded-[inherit] z-[5] pointer-events-none" />
      )}
      {children}
    </div>
  );
}
