import React, { useRef, useEffect } from "react";

export default function SnowfallCanvas({ count = 120 }) {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let rafId;
    const particles = [];

    function rand(min, max){ return Math.random()*(max-min)+min; }

    for (let i=0;i<count;i++){
      particles.push({
        x: rand(0, width),
        y: rand(-height, height),
        r: rand(0.6, 3.2),
        d: rand(0.5, 2.5),
        vx: rand(-0.3, 0.3),
      });
    }

    function resize(){
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function draw(){
      ctx.clearRect(0,0,width,height);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.beginPath();
      for (let p of particles){
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      }
      ctx.fill();
      update();
      rafId = requestAnimationFrame(draw);
    }

    function update(){
      for (let p of particles){
        p.y += p.d;
        p.x += p.vx + Math.sin(p.y*0.01)*0.3;
        if (p.y > height + 10) {
          p.y = rand(-50, -10);
          p.x = rand(0, width);
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 5,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
