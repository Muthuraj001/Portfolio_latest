import { useEffect, useRef } from "react";
import { animate, random } from "animejs";
import { useReducedMotion } from "./useReducedMotion";

export function useAnimeParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent || prefersReduced) return;

    // Dynamically insert tiny particle nodes
    const particleCount = 20;
    const dots: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement("div");
      dot.className = "absolute rounded-full pointer-events-none opacity-20 bg-emerald-500/60 blur-[1px]";
      
      // Random sizes and positions
      const size = Math.random() * 5 + 3;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      
      parent.appendChild(dot);
      dots.push(dot);
    }

    // Animate them randomly with animejs loops
    const animation = animate(dots, {
      translateX: () => random(-120, 120),
      translateY: () => random(-120, 120),
      scale: () => [1, random(0.5, 1.8)],
      opacity: () => [0.1, random(0.4, 0.7), 0.1],
      duration: () => random(6000, 15000),
      delay: () => random(0, 2000),
      ease: "easeInOutQuad",
      alternate: true,
      loop: true
    });

    return () => {
      // Cleanup loops and elements
      animation.pause();
      dots.forEach(dot => {
        if (parent.contains(dot)) {
          parent.removeChild(dot);
        }
      });
    };
  }, [prefersReduced]);

  return containerRef;
}
