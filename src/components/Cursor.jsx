import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isHovered, bg }) => {
  const size = isHovered ? 120 : 40;
  const background = bg;
  const circle = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.1),
      y: lerp(y, mouse.current.y, 0.1),
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <div
      ref={circle}
      className="pointer-events-none fixed top-0 left-0 rounded-full mix-blend-difference"
      style={{
        backgroundColor: background.length ? background : "#7C3AED",
        width: size,
        height: size,
        filter: `blur(${isHovered ? 20 : 0}px)`,
        transition:
          "height 0.3s ease-in-out, width 0.3s ease-in-out, filter 0.3s ease-in-out, backgroundColor 0.3s ease-in-out",
      }}
    ></div>
  );
};

export default Cursor;
