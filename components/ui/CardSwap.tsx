"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface CardImage {
  src: string;
  alt: string;
}

// Three fixed slot positions (back, middle, front) matching the original Typid layout
const slots = [
  { left: "18.5%", top: "21%", width: "62.3%", aspectRatio: "404 / 226", zIndex: 1 },
  { left: "15.4%", top: "30%", width: "69.1%", aspectRatio: "448 / 250", zIndex: 2 },
  { left: "12.3%", top: "41%", width: "75.3%", aspectRatio: "488 / 274", zIndex: 3 },
];

export default function CardSwap({ images }: { images: CardImage[] }) {
  // order[0] = back slot, order[1] = middle slot, order[2] = front slot
  const [order, setOrder] = useState([0, 1, 2]);
  const refs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const isAnimating = useRef(false);

  // Place cards at their slot positions immediately on mount
  useEffect(() => {
    order.forEach((imgIdx, slotIdx) => {
      const el = refs.current[imgIdx];
      if (!el) return;
      const s = slots[slotIdx];
      gsap.set(el, {
        left: s.left,
        top: s.top,
        width: s.width,
        zIndex: s.zIndex,
        opacity: 1,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const swap = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const currentOrder = order;
    const frontImgIdx = currentOrder[2]; // image currently in front slot
    const midImgIdx = currentOrder[1];
    const backImgIdx = currentOrder[0];

    const frontEl = refs.current[frontImgIdx]!;
    const midEl = refs.current[midImgIdx]!;
    const backEl = refs.current[backImgIdx]!;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Front card drops down and fades
    tl.to(frontEl, {
      top: "110%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });

    // Middle card moves to front slot
    tl.to(
      midEl,
      {
        left: slots[2].left,
        top: slots[2].top,
        width: slots[2].width,
        zIndex: slots[2].zIndex,
        duration: 0.5,
        ease: "power2.out",
      },
      0.2
    );

    // Back card moves to middle slot
    tl.to(
      backEl,
      {
        left: slots[1].left,
        top: slots[1].top,
        width: slots[1].width,
        zIndex: slots[1].zIndex,
        duration: 0.5,
        ease: "power2.out",
      },
      0.2
    );

    // Old front card reappears at back slot
    tl.set(frontEl, {
      left: slots[0].left,
      top: slots[0].top,
      width: slots[0].width,
      zIndex: slots[0].zIndex,
    });
    tl.to(frontEl, {
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
    });

    // Rotate order: [back, mid, front] -> [front, back, mid]
    setOrder([frontImgIdx, backImgIdx, midImgIdx]);
  }, [order]);

  return (
    <div
      className="absolute inset-0 overflow-hidden isolate"
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          ref={(el) => { refs.current[i] = el; }}
          className="absolute border-4 border-white/20 rounded-[12px] overflow-hidden"
          style={{ aspectRatio: slots[order.indexOf(i)]?.aspectRatio ?? "488 / 274" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 75vw, (max-width: 1024px) 40vw, 35vw"
          />
        </div>
      ))}
    </div>
  );
}
