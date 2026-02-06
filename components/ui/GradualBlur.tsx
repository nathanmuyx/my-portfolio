"use client";

import React, { useMemo } from "react";

interface GradualBlurProps {
  position?: "top" | "bottom";
  height?: string;
  strength?: number;
  divCount?: number;
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
  exponential?: boolean;
  opacity?: number;
  className?: string;
  zIndex?: number;
}

const CURVES: Record<string, (p: number) => number> = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
  "ease-in": (p) => p * p,
  "ease-out": (p) => 1 - Math.pow(1 - p, 2),
  "ease-in-out": (p) =>
    p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

export default function GradualBlur({
  position = "bottom",
  height = "6rem",
  strength = 2,
  divCount = 5,
  curve = "linear",
  exponential = false,
  opacity = 1,
  className = "",
  zIndex = 1,
}: GradualBlurProps) {
  const direction = position === "top" ? "to top" : "to bottom";

  const blurDivs = useMemo(() => {
    const divs = [];
    const increment = 100 / divCount;
    const curveFunc = CURVES[curve] || CURVES.linear;

    for (let i = 1; i <= divCount; i++) {
      const progress = curveFunc(i / divCount);

      const blurValue = exponential
        ? Math.pow(2, progress * 4) * 0.0625 * strength
        : 0.0625 * (progress * divCount + 1) * strength;

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      divs.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity,
          }}
        />
      );
    }
    return divs;
  }, [divCount, curve, exponential, strength, direction, opacity]);

  const style: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    height,
    pointerEvents: "none",
    zIndex,
    [position]: 0,
  };

  return (
    <div className={className} style={style}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {blurDivs}
      </div>
    </div>
  );
}
