import { useEffect, useState } from "react";
import trinityLogo from "../assets/logo/trinity-logo.jpeg";

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DEMO_EXIT_AT_MS = 6200; // was 4200 — screen now holds longer before exiting
const DEMO_CYCLE_MS = 7600; // was 5500

/**
 * TrinityLoadingScreen
 *
 * Cream / ink / amber tokens matching index.css, real logo wired in with a
 * framed "card" treatment (your JPEG has a white background, so it now
 * reads as a deliberate plaque with shadow instead of a hard-edged square).
 *
 * Props:
 *  - logoSrc  defaults to the real logo import above; falls back to a
 *             drawn gold monogram if that image fails to load.
 *  - demo     (default true) self-loops for standalone preview. In
 *             production, render with demo={false} and control visibility
 *             yourself once real page data/images are ready.
 */
export default function TrinityLoadingScreen({ logoSrc = trinityLogo, demo = true }) {
  const [cycle, setCycle] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    if (!demo) return;
    setExiting(false);
    const exitTimer = setTimeout(() => setExiting(true), DEMO_EXIT_AT_MS);
    const loopTimer = setTimeout(() => setCycle((c) => c + 1), DEMO_CYCLE_MS);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(loopTimer);
    };
  }, [cycle, demo]);

  const showImage = Boolean(logoSrc) && !imgFailed;

  return (
    <div style={styles.wrapper}>
      <style>{css}</style>

      <div key={cycle} className={`tc-stage${exiting ? " tc-exit" : ""}`}>
        <div className="tc-glow" aria-hidden="true" />

        <div className={`tc-mark-wrap${showImage ? " tc-mark-wrap--img" : ""}`}>
          {showImage ? (
            <img
              src={logoSrc}
              alt="Trinity Catering"
              className="tc-logo-img"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <svg className="tc-mark" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="tcGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F0C066" />
                  <stop offset="100%" stopColor="#9C6A0E" />
                </linearGradient>
              </defs>
              <circle className="tc-ring tc-ring-1" cx="50" cy="30" r={RADIUS} />
              <circle className="tc-ring tc-ring-2" cx="34" cy="60" r={RADIUS} />
              <circle className="tc-ring tc-ring-3" cx="66" cy="60" r={RADIUS} />
              <circle className="tc-dot" cx="50" cy="50" r="2.4" />
            </svg>
          )}
          <span className="tc-shine" />
        </div>

        {!showImage && (
          <>
            <h1 className="tc-word">Trinity</h1>
            <p className="tc-sub">Catering</p>
          </>
        )}

        <div className="tc-rule" aria-hidden="true" />

        <p className="tc-tagline">Corporate Catering &bull; Pune</p>

        <div className="tc-track">
          <div className="tc-progress" />
        </div>

        <p className="tc-foot">Good Food &bull; Great Moments</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fbf8f1",
    overflow: "hidden",
    "--tc-ink": "#171717",
    "--tc-amber-text": "#9C6A0E",
    "--tc-amber-light": "#F0C066",
  },
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap');

.tc-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 40px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.tc-glow {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 340px;
  height: 340px;
  background:
    radial-gradient(circle at 50% 32%, rgba(240,192,102,0.22) 0%, rgba(240,192,102,0) 60%),
    radial-gradient(circle at 50% 58%, rgba(156,106,14,0.12) 0%, rgba(156,106,14,0) 70%);
  pointer-events: none;
}

.tc-mark-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 26px;
}

.tc-mark-wrap:not(.tc-mark-wrap--img) {
  width: 96px;
  height: 96px;
}

.tc-mark-wrap--img {
  width: min(60%, 220px);
  border-radius: 16px;
  background: #fff;
  box-shadow:
    0 20px 44px -16px rgba(23,23,23,0.28),
    0 3px 10px rgba(23,23,23,0.08);
  animation: tc-float 4.2s ease-in-out 1.6s infinite;
}

.tc-mark {
  width: 100%;
  height: 100%;
}

.tc-logo-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  opacity: 0;
  transform: scale(0.88);
  animation: tc-logo-in 0.9s cubic-bezier(.22,1,.36,1) 0.15s forwards;
}

.tc-ring {
  fill: none;
  stroke: url(#tcGold);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-dasharray: ${CIRCUMFERENCE};
  stroke-dashoffset: ${CIRCUMFERENCE};
  animation: tc-draw 1.1s cubic-bezier(.4,0,.2,1) forwards;
}
.tc-ring-1 { animation-delay: 0.1s; }
.tc-ring-2 { animation-delay: 0.28s; }
.tc-ring-3 { animation-delay: 0.46s; }

.tc-dot {
  fill: var(--tc-amber-light);
  opacity: 0;
  animation: tc-pulse 1.8s ease-in-out 1.3s infinite;
}

.tc-shine {
  position: absolute;
  top: -50%;
  left: -60%;
  width: 35%;
  height: 220%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);
  transform: rotate(18deg) translateX(-260%);
  animation: tc-shine 1.5s ease-out 1.15s 1 forwards;
  pointer-events: none;
}

.tc-word {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 0.02em;
  color: var(--tc-ink);
  opacity: 0;
  animation: tc-rise 0.8s ease-out 0.9s forwards;
}

.tc-sub {
  margin: 4px 0 18px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: var(--tc-amber-text);
  opacity: 0;
  animation: tc-rise 0.8s ease-out 1.1s forwards;
}

.tc-rule {
  width: 0;
  height: 1px;
  background: rgba(23,23,23,0.18);
  animation: tc-grow 0.7s ease-out 1.3s forwards;
}

.tc-tagline {
  margin: 16px 0 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--tc-amber-text);
  opacity: 0;
  animation: tc-rise 0.7s ease-out 1.5s forwards;
}

.tc-track {
  margin-top: 28px;
  width: 168px;
  height: 2px;
  border-radius: 2px;
  background: rgba(23,23,23,0.12);
  overflow: hidden;
  opacity: 0;
  animation: tc-rise 0.5s ease-out 1.7s forwards;
}

.tc-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--tc-amber-light), var(--tc-amber-text), var(--tc-amber-light));
  background-size: 200% 100%;
  animation:
    tc-fill 4s cubic-bezier(.4,0,.2,1) 1.9s forwards,
    tc-shimmer-bar 1.4s linear 1.9s infinite;
}

.tc-foot {
  margin-top: 14px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(23,23,23,0.45);
  opacity: 0;
  animation: tc-rise 0.7s ease-out 2.3s forwards;
}

.tc-exit {
  animation: tc-out 0.9s cubic-bezier(.76,0,.24,1) forwards;
}

@keyframes tc-draw { to { stroke-dashoffset: 0; } }
@keyframes tc-logo-in { to { opacity: 1; transform: scale(1); } }
@keyframes tc-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes tc-grow { to { width: 64px; } }
@keyframes tc-fill { to { width: 100%; } }
@keyframes tc-pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
@keyframes tc-shine { to { transform: rotate(18deg) translateX(340%); } }
@keyframes tc-out { to { opacity: 0; transform: translateY(-36px); } }
@keyframes tc-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes tc-shimmer-bar { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }

@media (prefers-reduced-motion: reduce) {
  .tc-ring, .tc-dot, .tc-logo-img, .tc-word, .tc-sub, .tc-tagline, .tc-track, .tc-foot, .tc-mark-wrap--img {
    animation: none !important;
    opacity: 1 !important;
  }
  .tc-ring { stroke-dashoffset: 0 !important; }
  .tc-logo-img { transform: scale(1) !important; }
  .tc-rule { animation: none !important; width: 64px !important; }
  .tc-progress { animation: none !important; width: 100% !important; }
  .tc-shine { display: none !important; }
  .tc-exit { animation: none !important; }
}
`;