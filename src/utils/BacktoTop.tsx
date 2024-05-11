"use client"
import useScrollDirection from "@/hooks/stacky-header";
import { usePathname } from "next/navigation";
import React, { useRef, useEffect } from "react";
const BacktoTop = () => {
  const pathName = usePathname()
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection(elementRef.current);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const className = pathName === "/" ? "theme-bg" : pathName === "/home-two" ? "h2-theme-bg" : "h3-theme-bg";
  return (
    <>
      <div
        ref={elementRef}
        className="scroll-up"
        id="scroll"
        style={{ display: scrollDirection === "down" ? "block" : "none" }}
      >
        <a
          href="#"
          className={`${className} white d-block text-center position-fixed`}
        >
          <span className="icon-chevrons-up"></span>
        </a>
      </div>
    </>
  );
};

export default BacktoTop;