import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../assets/Style/cursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [dots, setDots] = useState([]);
  const amount = 20;
  const width = 26;
  const idleTimeout = 150;
  let timeoutID;

  const mousePosition = useRef({ x: 0, y: 0 });
  const idle = useRef(false);
  const lastFrame = useRef(0);

  useEffect(() => {
    if (cursorRef.current) {
      buildDots();
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("scroll", onScroll);

      requestAnimationFrame(render);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [cursorRef.current]);

  const onMouseMove = (event) => {
    mousePosition.current.x = event.clientX - width / 2;
    mousePosition.current.y = event.clientY - width / 2;
    resetIdleTimer();
  };

  const onTouchMove = (event) => {
    mousePosition.current.x = event.touches[0].clientX - width / 2;
    mousePosition.current.y = event.touches[0].clientY - width / 2;
    resetIdleTimer();
  };

  const onScroll = () => {
    resetIdleTimer();
  };

  const startIdleTimer = () => {
    timeoutID = setTimeout(() => {
      idle.current = true;
      dots.forEach((dot) => dot.lock());
    }, idleTimeout);
    idle.current = false;
  };

  const resetIdleTimer = () => {
    clearTimeout(timeoutID);
    startIdleTimer();
  };

  const buildDots = () => {
    if (dots.length === 0) {
      const newDots = [];
      for (let i = 0; i < amount; i++) {
        newDots.push(new Dot(i));
      }
      setDots(newDots);
    }
  };

  const render = (timestamp) => {
    const delta = timestamp - lastFrame.current;
    positionCursor(delta);
    lastFrame.current = timestamp;
    requestAnimationFrame(render);
  };

  const positionCursor = (delta) => {
    let x = mousePosition.current.x;
    let y = mousePosition.current.y;

    dots.forEach((dot, index) => {
      const nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw(delta);

      const dx = (nextDot.x - dot.x) * 0.35;
      const dy = (nextDot.y - dot.y) * 0.35;
      x += dx;
      y += dy;
    });
  };

  class Dot {
    constructor(index) {
      this.index = index;
      this.anglespeed = 0.05;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.05 * index;
      this.range = width / 2 - (width / 2) * this.scale + 2;
      this.limit = width * 0.75 * this.scale;
      this.angleX = 0;
      this.angleY = 0;
      this.lockX = 0;
      this.lockY = 0;
    }

    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
    }

    draw(delta) {
      if (!idle.current || this.index <= Math.floor(amount * 0.3)) {
        if (cursorRef.current && cursorRef.current.children[this.index]) {
          gsap.set(cursorRef.current.children[this.index], {
            x: this.x,
            y: this.y,
          });
        }
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;

        if (cursorRef.current && cursorRef.current.children[this.index]) {
          gsap.set(cursorRef.current.children[this.index], {
            x: this.x,
            y: this.y,
          });
        }
      }
    }
  }

  return (
    <div id="cursor" ref={cursorRef} className="Cursor">
      {Array.from({ length: amount }).map((_, i) => (
        <span key={i} className={`dot dot-${i}`}></span>
      ))}
    </div>
  );
};

export default CustomCursor;
