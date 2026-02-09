"use client";
import { useState, useLayoutEffect, useRef, HTMLAttributes } from "react";

export function SkeletonCard({ children, className = "", ...rest }: HTMLAttributes<HTMLDivElement>) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const imgs = el.querySelectorAll("img");
    if (imgs.length === 0) { setLoaded(true); return; }

    const checkAll = () => {
      if (Array.from(imgs).every(img => img.complete && img.naturalWidth > 0)) {
        setLoaded(true);
      }
    };

    checkAll();

    const onLoad = () => checkAll();
    imgs.forEach(img => img.addEventListener("load", onLoad));
    return () => imgs.forEach(img => img.removeEventListener("load", onLoad));
  }, []);

  return (
    <div ref={ref} className={className} {...rest}>
      <div
        className="absolute inset-0 bg-cream-dark rounded-[inherit] z-50 pointer-events-none transition-opacity duration-700 ease-out"
        style={{ opacity: loaded ? 0 : 1 }}
      />
      {children}
    </div>
  );
}
