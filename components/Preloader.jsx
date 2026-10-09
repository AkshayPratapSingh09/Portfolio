"use client";

import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";

const STEPS = [
  {
    acc: "#f6c177",
    shape: <div className="cn-shring" />,
    text: (
      <>
        a developer<span className="cn-p">.</span>
      </>
    ),
  },
  {
    acc: "#9ccfd8",
    shape: (
      <div className="cn-shbars">
        <i />
        <i />
        <i />
      </div>
    ),
    text: (
      <>
        an innovator<span className="cn-p">.</span>
      </>
    ),
  },
  {
    acc: "#c4a7e7",
    shape: <div className="cn-shaster">✳</div>,
    text: (
      <>
        an ideator<span className="cn-p">.</span>
      </>
    ),
  },
  {
    acc: "#ebbcba",
    shape: <div className="cn-shcube" />,
    text: (
      <>
        an <span className="cn-p">ai-obsessed</span> builder<span className="cn-p">.</span>
      </>
    ),
  },
  {
    acc: "#eb6f92",
    shape: <div className="cn-shmoon" />,
    text: (
      <>
        crafting digital wonders<span className="cn-soft"> — with code & AI.</span>
      </>
    ),
  },
  {
    acc: "#f6c177",
    shape: (
      <div className="cn-shstack">
        <div className="cn-dot" />
        <div className="cn-sq" />
        <div className="cn-tri" />
      </div>
    ),
    isNameFlip: true,
  },
];

const DURATIONS = [1850, 1800, 1800, 2000, 2200, 2600];
const STORAGE_KEY = "akshay-trailer-seen";

export default function Preloader() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [phase, setPhase] = useState("playing"); // "playing" | "fading" | "gone"
  const runIdRef = useRef(0);
  const timerRef = useRef(null);

  const skipTrailer = useCallback(() => {
    runIdRef.current++;
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
    setPhase("fading");
    const currentRun = runIdRef.current;
    setTimeout(() => {
      if (runIdRef.current === currentRun) {
        setPhase("gone");
      }
    }, 950);
  }, []);

  const playTrailer = useCallback(() => {
    runIdRef.current++;
    const currentRun = runIdRef.current;
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhase("playing");
    setCurrentStep(-1);

    let step = -1;
    const next = () => {
      if (runIdRef.current === currentRun) {
        step++;
        if (step >= DURATIONS.length) {
          skipTrailer();
          return;
        }
        setCurrentStep(step);
        timerRef.current = setTimeout(next, DURATIONS[step]);
      }
    };
    timerRef.current = setTimeout(next, 380);
  }, [skipTrailer]);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setPhase("gone");
        return;
      }
    } catch (e) {}
    playTrailer();
  }, [playTrailer]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;

      if (e.key === "Escape") {
        skipTrailer();
      } else if (e.key === "r" || e.key === "R") {
        playTrailer();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      runIdRef.current++;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [playTrailer, skipTrailer]);

  if (phase === "gone") {
    return (
      <button
        type="button"
        className="cn-replay-hint"
        onClick={playTrailer}
        aria-label="Replay intro animation"
        title="Replay intro trailer"
      >
        press <b>R</b> to replay trailer ↺
      </button>
    );
  }

  return (
    <div
      className={`cn-trailer ${phase === "fading" ? "cn-done" : ""}`}
      id="trailer-cinema"
      aria-label="Cinematic intro animation"
    >
      {/* Cinematic Projector Light Beam Backdrop */}
      <div className="fs-projector" aria-hidden="true">
        <div className="fs-beam" />
        <div className="fs-source" />
      </div>

      {/* Slide Steps */}
      {STEPS.map((step, idx) => (
        <div
          key={idx}
          className={`cn-tstep ${currentStep === idx ? "cn-on" : ""}`}
          style={{ "--t-acc": step.acc }}
        >
          <div className="cn-shapezone">{step.shape}</div>

          <div className="cn-ttext">
            {step.isNameFlip ? (
              <div className="cn-nameflip">
                <span className="cn-name-full">
                  akshay pratap singh<span className="cn-p">.</span>
                </span>
                <span className="cn-name-tag font-mono">
                  AKSHAY<span className="cn-p">.</span>
                </span>
              </div>
            ) : (
              step.text
            )}
          </div>
        </div>
      ))}

      {/* Skip Button */}
      <button
        type="button"
        className="cn-skip"
        onClick={skipTrailer}
        aria-label="Skip intro animation"
      >
        skip →
      </button>

      {/* Keyboard hints */}
      <div className="cn-keys-hint" aria-hidden="true">
        <span>esc</span> to skip · <span>R</span> to replay
      </div>
    </div>
  );
}

export { Preloader as CinemaTrailer };
