import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "./useReducedMotion";

interface RevealOptions {
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  delay?: number;
  duration?: number;
  scale?: number;
}

export function useGSAPReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const elementRef = useRef<T | null>(null);
  const prefersReduced = useReducedMotion();

  const {
    direction = "up",
    distance = 50,
    delay = 0,
    duration = 0.8,
    scale = 1
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (prefersReduced) {
      // Direct opacity toggle without kinetic transformations
      gsap.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay, ease: "power1.out" }
      );
      return;
    }

    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x,
        y,
        scale: scale !== 1 ? scale : undefined,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  }, [direction, distance, delay, duration, scale, prefersReduced]);

  return elementRef;
}
