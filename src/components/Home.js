import React, { useEffect, useMemo, useRef, useState } from "react";

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [rotation, setRotation] = useState(0);
  const ringRef = useRef(null);
  const [radius, setRadius] = useState(180);

  const handleTooltipToggle = () => setShowTooltip((s) => !s);

  // Core skills (orbiting)
  const skills = [
    { name: "React.js", color: "bg-green-600" },
    { name: "TypeScript", color: "bg-emerald-500" },
    { name: "JavaScript", color: "bg-green-700" },
    { name: "HTML", color: "bg-lime-600" },
    { name: "CSS", color: "bg-green-400" },
    { name: "Node.js", color: "bg-emerald-700" },
  ];

  // Smooth rotation
  useEffect(() => {
    const id = setInterval(() => setRotation((r) => r + 1), 100);
    return () => clearInterval(id);
  }, []);

  // Responsive radius based on the ring container size
  useEffect(() => {
    const updateRadius = () => {
      if (!ringRef.current) return;
      const { offsetWidth } = ringRef.current;
      setRadius(Math.max(100, Math.min(220, Math.floor(offsetWidth / 3))));
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      className="home relative bg-black text-green-400 font-mono h-screen flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      {/* Matrix grid + starfield */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="matrix-bg w-full h-full opacity-15"></div>
        <div className="stars absolute inset-0"></div>

        {/* Cosmic word field */}
        <CosmicWords />
      </div>

      {/* Orbiting Skills + Profile */}
      <div
        ref={ringRef}
        className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] mb-8 z-10"
      >
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index + rotation;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transition-all duration-100 ease-linear"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
              }}
            >
              <div className={`${skill.color} text-black px-3 py-2 rounded-full text-sm md:text-base font-bold shadow-[0_0_14px_#00ff41] hover:scale-125 transition-all cursor-pointer border border-green-500/40`}>
                {skill.name}
              </div>
            </div>
          );
        })}

        {/* Central Profile Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="rounded-full border-4 border-green-500 shadow-[0_0_30px_#00ff41] p-2 h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 hover:scale-110 transition-transform duration-300 bg-black/60">
            <img
              alt="profile"
              loading="lazy"
              src="https://i.imgur.com/QM44mzd.png"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="z-10 text-center animate-[zoomInOut_7s_ease-in-out_infinite_alternate]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest text-green-400 drop-shadow-[0_0_15px_#00ff41]">
          Charan Kumar
        </h1>
        <h2 className="text-2xl sm:text-3xl mt-3 font-semibold text-green-300 drop-shadow-[0_0_10px_#00ff41]">
          Web Developer
        </h2>
        <h3 className="text-lg sm:text-xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-500 to-green-700 animate-pulse">
          Building Better Web
        </h3>
      </div>

      {/* Actions */}
      <div className="z-10 mt-10 flex flex-col sm:flex-row items-center gap-6 animate-[zoomInOut_7s_ease-in-out_infinite_alternate]">
        <a
          className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg shadow-[0_0_20px_#00ff41] hover:bg-green-400 hover:scale-105 transition-all border border-green-500/50"
          href="https://drive.google.com/file/d/1Pt443WtGPr2wtIWI4SPxlzckljNgsCid/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <div
          className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg shadow-[0_0_20px_#00ff41] cursor-pointer hover:bg-green-400 hover:scale-105 transition-all relative border border-green-500/50"
          onMouseEnter={handleTooltipToggle}
          onMouseLeave={handleTooltipToggle}
        >
          Contact
          {showTooltip && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black text-green-400 px-4 py-2 rounded shadow-[0_0_15px_#00ff41] whitespace-nowrap border border-green-500/40">
              be.charankumar@gmail.com
              <br />
              7659067911
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Matrix grid drift */
        .matrix-bg {
          background-image:
            linear-gradient(180deg, rgba(0,255,65,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.06) 1px, transparent 1px);
          background-size: 22px 22px;
          animation: matrixMove 24s linear infinite;
        }
        @keyframes matrixMove {
          from { background-position: 0 0; }
          to   { background-position: 0 1200px; }
        }

        /* Soft star twinkle */
        .stars {
          background:
            radial-gradient(circle at 20% 30%, rgba(0,255,65,0.10) 0 1px, transparent 2px),
            radial-gradient(circle at 70% 60%, rgba(0,255,65,0.12) 0 1px, transparent 2px),
            radial-gradient(circle at 40% 80%, rgba(0,255,65,0.10) 0 1px, transparent 2px);
          background-size: 3px 3px, 2px 2px, 2px 2px;
          animation: starsTwinkle 8s ease-in-out infinite alternate;
        }
        @keyframes starsTwinkle {
          0%   { opacity: .4; transform: scale(1); }
          100% { opacity: .9; transform: scale(1.04); }
        }

        /* Shared gentle zoom */
        @keyframes zoomInOut {
          0%   { transform: scale(1);   }
          100% { transform: scale(1.06); }
        }
      `}</style>
    </div>
  );
};

/* === CosmicWords Layer ===
   50-60 HTML/CSS/JS terms drifting/zooming like particles */
const CosmicWords = () => {
  const terms = useMemo(
    () => [
      "<div>", "<header>", "<main>", "<section>", "<article>", "<footer>", "<nav>", "<aside>", "<p>", "<span>",
      "<a>", "<ul>", "<li>", "<img>", "<button>", "<form>", "<input>", "<label>", "<h1>", "<h2>", "<h3>",
      "display", "position", "absolute", "relative", "fixed", "sticky", "flex", "grid", "gap", "align-items",
      "justify-content", "z-index", "overflow", "opacity", "transform", "translate", "scale", "rotate", "transition",
      "border-radius", "box-shadow", "background", "linear-gradient", "media query", "viewport", "responsive",
      "document", "window", "DOM", "Node", "Element", "querySelector", "addEventListener", "event", "preventDefault",
      "async", "await", "Promise", "fetch", "JSON", "map()", "filter()", "reduce()", "forEach()", "setTimeout",
      "setInterval", "localStorage", "sessionStorage", "classList", "innerHTML", "textContent", "template literal"
    ],
    []
  );

  // Precompute randomized positions & animation timings once
  const particles = useMemo(
    () =>
      terms.map((t, i) => {
        // spread across the viewport (5%..95%) to avoid clipping
        const top = Math.random() * 90 + 5;
        const left = Math.random() * 90 + 5;
        const duration = Math.random() * 14 + 10; // 10s - 24s
        const delay = Math.random() * 8;          // 0s - 8s
        const driftX = (Math.random() - 0.5) * 40; // -20..20 px drift
        const scale = Math.random() * 0.6 + 0.7; // 0.7 - 1.3
        return { t, top, left, duration, delay, driftX, scale, key: i };
      }),
    [terms]
  );

  return (
    <>
      <style>{`
        @keyframes driftZoom {
          0%   { transform: translate3d(var(--dx,0), 20px, 0) scale(var(--s,1)); opacity: .35; }
          50%  { transform: translate3d(calc(var(--dx,0) * -1), -10px, 0) scale(calc(var(--s,1) * 1.08)); opacity: .7; }
          100% { transform: translate3d(var(--dx,0), -40px, 0) scale(var(--s,1)); opacity: .35; }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0"
      >
        {particles.map(({ t, top, left, duration, delay, driftX, scale, key }) => (
          <span
            key={key}
            className="absolute text-[10px] sm:text-xs md:text-sm lg:text-base text-green-300/70"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              // custom properties for animation
              ["--dx"]: `${driftX}px`,
              ["--s"]: scale,
              animation: `driftZoom ${duration}s ease-in-out ${delay}s infinite alternate`,
              textShadow: "0 0 6px rgba(0,255,65,0.5)",
              whiteSpace: "nowrap",
              letterSpacing: "0.02em",
              filter: "drop-shadow(0 0 2px rgba(0,255,65,0.35))",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
};

export default Home;
