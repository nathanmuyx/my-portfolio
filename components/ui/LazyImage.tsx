"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export function LazyImage({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-white/[0.03] animate-pulse rounded-[inherit]" />
      )}
      <Image
        {...props}
        className={`${className ?? ""} transition-opacity duration-500 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={(e) => {
          setLoaded(true);
          if (typeof onLoad === "function") onLoad(e);
        }}
      />
    </>
  );
}
