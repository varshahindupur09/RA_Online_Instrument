// src/components/ScrollToTop.js
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // hard reset (cover all engines)
    document.documentElement.scrollTop = 0; // <html>
    document.body.scrollTop = 0;            // <body>
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
