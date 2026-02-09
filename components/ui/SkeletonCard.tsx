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

    const checkAll = () => {
      if (Array.from(imgs).every(img => img.complete && img.naturalWidth > 0)) {
        setLoaded(true);
      }
    };

    // Check if already cached
    checkAll();

    const onLoad = () => checkAll();
    imgs.forEach(img => img.addEventListener("load", onLoad));
    return () => imgs.forEach(img => img.removeEventListener("load", onLoad));
  }, []);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
      {!loaded && (
        <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse rounded-[inherit] z-[5] pointer-events-none" />
      )}
    </div>
  );
}
