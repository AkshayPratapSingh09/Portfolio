"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const DEFAULT_DEPTH = 180;
const DEFAULT_ROTATION = 42;
const DEFAULT_SPACING = 220;
const DEFAULT_SCALE_STEP = 0.14;
const DEFAULT_AUTOPLAY_DELAY = 4000;
const SWIPE_VELOCITY_THRESHOLD = 400;
const SWIPE_DISTANCE_THRESHOLD = 60;
const MAX_VISIBLE_OFFSET = 3;
const MIN_SCALE = 0.55;

export function CoverflowCarousel({
  items = [],
  initialIndex = 1,
  index: indexProp,
  onIndexChange,
  onCardClick,
  inverted = false,
  depth = DEFAULT_DEPTH,
  rotation = DEFAULT_ROTATION,
  spacing = DEFAULT_SPACING,
  scaleStep = DEFAULT_SCALE_STEP,
  loop = true,
  autoplay = false,
  autoplayDelay = DEFAULT_AUTOPLAY_DELAY,
  className,
  cardClassName,
  showControls = true,
  showDots = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  const total = items.length;

  // Initialize with initialIndex (defaults to 1 as requested: "not starting from 0, starting from first (one next pressed)")
  const safeInitialIndex = total > 0 ? Math.min(Math.max(initialIndex, 0), total - 1) : 0;
  const [internalIndex, setInternalIndex] = useState(safeInitialIndex);
  const isControlled = indexProp !== undefined;
  const activeIndex = isControlled ? indexProp : internalIndex;
  const [isPaused, setIsPaused] = useState(false);
  const [effectiveSpacing, setEffectiveSpacing] = useState(spacing);

  // Responsive spacing based on window width
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 480) {
        setEffectiveSpacing(Math.min(spacing, 125));
      } else if (w < 768) {
        setEffectiveSpacing(Math.min(spacing, 165));
      } else if (w < 1024) {
        setEffectiveSpacing(Math.min(spacing, 200));
      } else {
        setEffectiveSpacing(spacing);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [spacing]);

  const goTo = useCallback(
    (next) => {
      if (total === 0) return;
      const clamped = loop
        ? ((next % total) + total) % total
        : Math.min(Math.max(next, 0), total - 1);

      if (!isControlled) {
        setInternalIndex(clamped);
      }
      onIndexChange?.(clamped);
    },
    [isControlled, loop, onIndexChange, total]
  );

  // Autoplay timer
  useEffect(() => {
    if (!autoplay || shouldReduceMotion || isPaused || total <= 1) {
      return;
    }

    const timer = setInterval(() => {
      goTo(activeIndex + 1);
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [
    autoplay,
    shouldReduceMotion,
    isPaused,
    activeIndex,
    autoplayDelay,
    goTo,
    total,
  ]);

  // Pause when document is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  };

  const handleDragEnd = (_event, info) => {
    const isSwipeLeft =
      info.offset.x < -SWIPE_DISTANCE_THRESHOLD ||
      info.velocity.x < -SWIPE_VELOCITY_THRESHOLD;
    const isSwipeRight =
      info.offset.x > SWIPE_DISTANCE_THRESHOLD ||
      info.velocity.x > SWIPE_VELOCITY_THRESHOLD;

    if (isSwipeLeft) {
      goTo(activeIndex + 1);
    } else if (isSwipeRight) {
      goTo(activeIndex - 1);
    }
  };

  const dragEndRef = useRef(handleDragEnd);
  dragEndRef.current = handleDragEnd;

  if (total === 0) {
    return null;
  }

  return (
    <div
      aria-label="Coverflow carousel"
      aria-roledescription="carousel"
      className={cn("relative w-full select-none outline-none", className)}
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      style={{ perspective: shouldReduceMotion ? undefined : 1200 }}
      tabIndex={0}
    >
      {/* 3D Stage */}
      <motion.div
        className="relative mx-auto flex h-[280px] sm:h-[340px] md:h-[390px] items-center justify-center overflow-visible"
        drag={total > 1 && !shouldReduceMotion ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={(event, info) => dragEndRef.current(event, info)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, i) => {
          let offset = i - activeIndex;

          // Circular offset calculation when looping
          if (loop && total > 2) {
            const half = total / 2;
            if (offset > half) offset -= total;
            else if (offset < -half) offset += total;
          }

          const isVisible = Math.abs(offset) <= MAX_VISIBLE_OFFSET;
          const isActive = offset === 0;

          if (!isVisible) {
            return null;
          }

          const direction = inverted ? -1 : 1;
          const rotateY = shouldReduceMotion
            ? 0
            : direction * -offset * rotation;
          const translateX = offset * effectiveSpacing;
          const translateZ = shouldReduceMotion
            ? 0
            : -Math.abs(offset) * depth;
          const scale = Math.max(1 - Math.abs(offset) * scaleStep, MIN_SCALE);
          const zIndex = total - Math.abs(offset);

          return (
            <motion.div
              key={item.id || i}
              animate={
                shouldReduceMotion
                  ? { opacity: isActive ? 1 : 0.4, x: translateX }
                  : {
                      opacity: Math.abs(offset) > 2 ? 0.45 : 1,
                      rotateY,
                      scale,
                      x: translateX,
                      z: translateZ,
                    }
              }
              aria-hidden={!isActive}
              className={cn(
                "group absolute aspect-[4/3] w-[260px] sm:w-[350px] md:w-[440px]",
                "cursor-pointer overflow-hidden rounded-2xl border bg-background",
                "transition-shadow duration-300",
                isActive
                  ? "border-primary/50 shadow-2xl shadow-primary/10 ring-2 ring-primary/40 dark:border-primary/60 dark:shadow-primary/20"
                  : "border-border/70 hover:border-border dark:border-white/10 dark:hover:border-white/20 shadow-xl shadow-black/10 dark:shadow-black/60",
                cardClassName
              )}
              onClick={() => {
                if (!isActive) {
                  goTo(i);
                } else if (onCardClick) {
                  onCardClick(item, i);
                }
              }}
              style={{
                transformStyle: "preserve-3d",
                zIndex,
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { bounce: 0.1, duration: 0.32, type: "spring" }
              }
            >
              {/* Certificate content / Image */}
              {item.image ? (
                <div className="relative h-full w-full overflow-hidden bg-white dark:bg-zinc-950 flex items-center justify-center">
                  <img
                    alt={item.alt ?? item.title ?? "Certificate"}
                    className="h-full w-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
                    draggable={false}
                    src={item.image}
                  />

                  {/* Glossy sheen reflection on card top */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 dark:from-white/10 dark:to-black/30" />

                  {/* Side card dimming overlay to focus on center active item */}
                  {!isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-background/30 dark:bg-black/40 backdrop-blur-[0.5px] transition-opacity duration-300 group-hover:bg-transparent" />
                  )}

                  {/* Active Card hover zoom hint badge */}
                  {isActive && (
                    <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md shadow-md border border-border/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-black/80 dark:border-white/15">
                      <Maximize2 className="h-3 w-3 text-primary" />
                      <span>Click to view</span>
                    </div>
                  )}

                  {/* Category Pill on top left */}
                  {item.category && isActive && (
                    <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground shadow-sm uppercase tracking-wider">
                      {item.category}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6 text-sm">
                  {item.content}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Subtle floor shadow reflection for 3D depth */}
      <div className="pointer-events-none mx-auto -mt-4 h-6 w-3/4 max-w-xl rounded-full bg-gradient-to-r from-transparent via-black/10 dark:via-primary/10 to-transparent blur-md" />

      {/* Navigation Controls & Dots */}
      {showControls && (
        <div className="mt-6 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            {/* Prev Button */}
            <button
              aria-label="Previous slide"
              className={cn(
                "group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur-md shadow-md transition-all",
                "hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95",
                "disabled:pointer-events-none disabled:opacity-40"
              )}
              disabled={!loop && activeIndex === 0}
              onClick={() => goTo(activeIndex - 1)}
              type="button"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Pagination Dots */}
            {showDots && (
              <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-secondary/50 dark:bg-secondary/30 backdrop-blur-sm border border-border/40">
                {items.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      dotIdx === activeIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                    onClick={() => goTo(dotIdx)}
                    type="button"
                  />
                ))}
              </div>
            )}

            {/* Next Button */}
            <button
              aria-label="Next slide"
              className={cn(
                "group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur-md shadow-md transition-all",
                "hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95",
                "disabled:pointer-events-none disabled:opacity-40"
              )}
              disabled={!loop && activeIndex === total - 1}
              onClick={() => goTo(activeIndex + 1)}
              type="button"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Slide counter */}
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground tracking-wider">
            <span className="text-foreground font-semibold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </div>
      )}

      {/* Screen reader live region */}
      <div aria-live="polite" className="sr-only">
        {`Slide ${activeIndex + 1} of ${total}: ${items[activeIndex]?.title ?? ""}`}
      </div>
    </div>
  );
}

export default CoverflowCarousel;
