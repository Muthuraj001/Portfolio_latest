import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useReducedMotion } from "./useReducedMotion";

export function usePageTransition() {
  const { pathname } = useLocation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Reset scroll at instantaneous transition mark
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    if (prefersReduced) return;

    // Trigger full screen content fade in
    const mainEl = document.querySelector("main");
    if (mainEl) {
      gsap.fromTo(
        mainEl,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [pathname, prefersReduced]);
}
