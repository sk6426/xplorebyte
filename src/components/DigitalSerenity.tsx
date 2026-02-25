"use client";
import React, { useEffect } from "react";

// Utility to apply JS-driven word-appear animations
function useWordAppear() {
  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach(word => {
      const delay = parseInt(word.dataset.delay || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });
  }, []);
}

export default function DigitalSerenity() {
  useWordAppear();

  // Mouse/gradient interactions
  useEffect(() => {
    const gradient = document.getElementById("mouse-gradient");
    function move(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function hide() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  // Ripple effect on click
  useEffect(() => {
    function click(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  // Floating element animations on scroll
  useEffect(() => {
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>(".floating-element")
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = "running";
            }, index * 200);
          });
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Render
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#f8f7f5] font-primary overflow-hidden">
      {/* SVG Grid BG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Main grid lines */}
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          className="grid-line"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          className="grid-line"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="20%"
          y1="0"
          x2="20%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "1.5s" }}
        />
        <line
          x1="80%"
          y1="0"
          x2="80%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2s" }}
        />
        {/* Accent lines */}
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        {/* Detail dots */}
        <circle
          cx="20%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3s" }}
        />
        <circle
          cx="80%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3.2s" }}
        />
        <circle
          cx="20%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3.4s" }}
        />
        <circle
          cx="80%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3.6s" }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="1.5"
          className="detail-dot"
          style={{ animationDelay: "4s" }}
        />
      </svg>

      {/* Corner Elements */}
      <div
        className="corner-element top-8 left-8"
        style={{ animationDelay: "4s" }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#c8b4a0] opacity-30" />
      </div>
      <div
        className="corner-element top-8 right-8"
        style={{ animationDelay: "4.2s" }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#c8b4a0] opacity-30" />
      </div>
      <div
        className="corner-element bottom-8 left-8"
        style={{ animationDelay: "4.4s" }}
      >
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#c8b4a0] opacity-30" />
      </div>
      <div
        className="corner-element bottom-8 right-8"
        style={{ animationDelay: "4.6s" }}
      >
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#c8b4a0] opacity-30" />
      </div>

      {/* Floating Dots */}
      <div
        className="floating-element"
        style={{ top: "25%", left: "15%", animationDelay: "5s" }}
      />
      <div
        className="floating-element"
        style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}
      />
      <div
        className="floating-element"
        style={{ top: "40%", left: "10%", animationDelay: "6s" }}
      />
      <div
        className="floating-element"
        style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-8 py-12 md:px-16 md:py-20">
        {/* Top Text */}
        <div className="text-center">
          <h2 className="text-xs md:text-sm font-mono font-light text-[#e6e1d7] uppercase tracking-[0.2em] opacity-80">
            <span className="word" data-delay="0">
              Embrace
            </span>
            <span className="word" data-delay="200">
              the
            </span>
            <span className="word" data-delay="400">
              present
            </span>
            <span className="word" data-delay="600">
              moment.
            </span>
          </h2>
          <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-[#e6e1d7] to-transparent opacity-30"></div>
        </div>

        {/* Center Text */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-[#f8f7f5] text-decoration">
            <div className="mb-4 md:mb-6">
              <span className="word" data-delay="800">
                Breathe
              </span>
              <span className="word" data-delay="950">
                deeply,
              </span>
              <span className="word" data-delay="1100">
                think
              </span>
              <span className="word" data-delay="1250">
                clearly.
              </span>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-thin text-[#e6e1d7] leading-relaxed">
              <span className="word" data-delay="1600">
                In
              </span>
              <span className="word" data-delay="1750">
                quiet
              </span>
              <span className="word" data-delay="1900">
                moments
              </span>
              <span className="word" data-delay="2050">
                we
              </span>
              <span className="word" data-delay="2200">
                discover
              </span>
              <span className="word" data-delay="2350">
                our
              </span>
              <span className="word" data-delay="2500">
                inner
              </span>
              <span className="word" data-delay="2650">
                wisdom
              </span>
              <span className="word" data-delay="2800">
                and
              </span>
              <span className="word" data-delay="2950">
                find
              </span>
              <span className="word" data-delay="3100">
                balance.
              </span>
            </div>
          </h1>
          {/* Decorative side lines */}
          <div
            className="absolute -left-8 top-1/2 w-4 h-px bg-[#e6e1d7] opacity-20"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.5s",
            }}
          ></div>
          <div
            className="absolute -right-8 top-1/2 w-4 h-px bg-[#e6e1d7] opacity-20"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.7s",
            }}
          ></div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <div className="mb-4 w-16 h-px bg-gradient-to-r from-transparent via-[#e6e1d7] to-transparent opacity-30"></div>
          <h2 className="text-xs md:text-sm font-mono font-light text-[#e6e1d7] uppercase tracking-[0.2em] opacity-80">
            <span className="word" data-delay="3500">
              Cultivate
            </span>
            <span className="word" data-delay="3650">
              mindful
            </span>
            <span className="word" data-delay="3800">
              awareness
            </span>
            <span className="word" data-delay="3950">
              daily.
            </span>
          </h2>
          {/* Extra dots */}
          <div
            className="mt-6 flex justify-center space-x-4 opacity-0"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "4.5s",
            }}
          >
            <div className="w-1 h-1 bg-[#e6e1d7] rounded-full opacity-40"></div>
            <div className="w-1 h-1 bg-[#e6e1d7] rounded-full opacity-60"></div>
            <div className="w-1 h-1 bg-[#e6e1d7] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Interactive Mouse Gradient */}
      <div
        id="mouse-gradient"
        className="fixed pointer-events-none w-96 h-96 bg-gradient-radial from-[#e6e1d7]/5 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out opacity-0 z-50"
      ></div>

      {/* CSS styles */}
      <style>{`
        @keyframes word-appear {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px);}
          50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px);}
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0);}
        }
        @keyframes grid-draw {
          0% { stroke-dashoffset: 1000; opacity: 0;}
          50% { opacity: 0.3;}
          100% { stroke-dashoffset: 0; opacity: 0.15;}
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; transform: scale(1);}
          50% { opacity: 0.3; transform: scale(1.1);}
        }
        .word {
          display: inline-block;
          opacity: 0;
          margin: 0 0.1em;
          transition: all 0.3s ease;
        }
        .word:hover {
          color: #c8b4a0;
          transform: translateY(-2px);
          text-shadow: 0 0 20px rgba(200, 180, 160, 0.5);
        }
        .grid-line {
          stroke: #c8b4a0;
          stroke-width: 0.5;
          opacity: 0;
          stroke-dasharray: 5 5;
          stroke-dashoffset: 1000;
          animation: grid-draw 2s ease-out forwards;
        }
        .detail-dot {
          fill: #c8b4a0;
          opacity: 0;
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .corner-element {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(200, 180, 160, 0.2);
          opacity: 0;
          animation: word-appear 1s ease-out forwards;
        }
        .corner-element::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(200, 180, 160, 0.3);
          border-radius: 50%;
        }
        .text-decoration {
          position: relative;
        }
        .text-decoration::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c8b4a0, transparent);
          animation: underline-grow 2s ease-out forwards;
          animation-delay: 2s;
        }
        @keyframes underline-grow {
          to { width: 100%; }
        }
        .floating-element {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #c8b4a0;
          border-radius: 50%;
          opacity: 0;
          animation: float 4s ease-in-out infinite;
          animation-play-state: paused;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2;}
          25% { transform: translateY(-10px) translateX(5px); opacity: 0.6;}
          50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4;}
          75% { transform: translateY(-15px) translateX(7px); opacity: 0.8;}
        }
      `}</style>
    </div>
  );
}
