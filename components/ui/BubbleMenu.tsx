"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface MenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: { bgColor: string; textColor: string };
  onClick?: () => void;
}

interface BubbleMenuProps {
  logo?: React.ReactNode;
  onMenuClick?: (isOpen: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#111",
  useFixedPosition = false,
  items = [],
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleToggle = useCallback(() => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  }, [isMenuOpen, onMenuClick]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean) as HTMLElement[];
    const labels = labelRefs.current.filter(Boolean) as HTMLElement[];

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });

        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            `-=${animationDuration * 0.9}`
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        },
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean) as HTMLElement[];
        const isDesktop = window.innerWidth >= 900;

        bubbles.forEach((bubble, i) => {
          const item = items[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, items]);

  const positionClass = useFixedPosition ? "fixed" : "absolute";

  return (
    <>
      <nav
        className={`${positionClass} left-0 right-0 top-[1em] flex items-center justify-end px-[1.5em] pointer-events-none z-[99] ${className ?? ""}`}
        style={style}
        aria-label="Main navigation"
      >
        {/* Unified pill: logo + hamburger button */}
        <div
          className="inline-flex items-center gap-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] pointer-events-auto pl-4 pr-1.5 py-1.5"
          style={{ background: menuBg }}
        >
          {/* Logo */}
          <span className="inline-flex items-center justify-center shrink-0">
            {typeof logo === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt="Logo" className="max-h-[60%] max-w-full object-contain block" />
            ) : (
              logo
            )}
          </span>

          {/* Toggle circle */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center rounded-full border-none cursor-pointer w-8 h-8 p-0 shrink-0"
            onClick={handleToggle}
            aria-label={menuAriaLabel}
            aria-pressed={isMenuOpen}
            style={{ background: menuContentColor }}
          >
            <span
              className="block w-3.5 h-[1.5px] rounded-full transition-transform duration-300 ease-in-out origin-center"
              style={{
                background: menuBg,
                transform: isMenuOpen ? "translateY(3px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-3.5 h-[1.5px] rounded-full mt-[3px] transition-transform duration-300 ease-in-out origin-center"
              style={{
                background: menuBg,
                transform: isMenuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Overlay with pill items */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`${positionClass} inset-0 flex items-center justify-center pointer-events-none z-[98]`}
          style={{ display: "none" }}
          aria-hidden={!isMenuOpen}
        >
          <ul
            className="list-none m-0 px-6 flex flex-wrap gap-0 row-gap-[4px] w-full max-w-[1600px] mx-auto pointer-events-auto justify-stretch"
            role="menu"
            aria-label="Menu links"
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                role="none"
                className="flex justify-center items-stretch basis-full md:basis-[calc(100%/3)] box-border"
                style={{
                  marginLeft:
                    items.length > 3 && idx === 3 && items.length === 5
                      ? "calc(100% / 6)"
                      : undefined,
                }}
              >
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="w-full flex items-center justify-center rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.1)] no-underline whitespace-nowrap overflow-hidden will-change-transform transition-[background,color] duration-300 ease-in-out text-[clamp(1.2rem,3vw,4rem)] md:text-[clamp(1.5rem,4vw,4rem)] font-normal leading-none min-h-[80px] md:min-h-[160px] py-[clamp(1rem,2vw,2rem)] md:py-[clamp(1.5rem,3vw,8rem)]"
                  style={{
                    background: menuBg,
                    color: menuContentColor,
                    // @ts-expect-error CSS custom properties
                    "--hover-bg": item.hoverStyles?.bgColor || "#f3f4f6",
                    "--hover-color": item.hoverStyles?.textColor || menuContentColor,
                  }}
                  ref={(el) => {
                    bubblesRef.current[idx] = el;
                  }}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                      setIsMenuOpen(false);
                      onMenuClick?.(false);
                    }
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    if (item.hoverStyles) {
                      target.style.background = item.hoverStyles.bgColor;
                      target.style.color = item.hoverStyles.textColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.background = menuBg;
                    target.style.color = menuContentColor;
                  }}
                >
                  <span
                    className="inline-block will-change-[transform,opacity] h-[1.2em] leading-[1.2]"
                    ref={(el) => {
                      labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
