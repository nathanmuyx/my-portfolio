"use client";
import { useState, useLayoutEffect, useRef, CSSProperties, HTMLAttributes } from "react";

export function SkeletonCard({ children, className = "", style, ...rest }: HTMLAttributes<HTMLDivElement>) {
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

  const skeletonStyle: CSSProperties | undefined = !loaded
    ? { ...style, background: "var(--cream-dark)" }
    : style;

  return (
    <div ref={ref} className={className} style={skeletonStyle} {...rest}>
      {!loaded && (
        <div className="absolute inset-0 bg-cream-dark animate-pulse rounded-[inherit] z-50 pointer-events-none" />
      )}
      {children}
    </div>
  );
}
