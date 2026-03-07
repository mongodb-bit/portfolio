import { useEffect, useRef, useCallback } from "react";

const FISH_SPRITE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAC4CAIAAACdPgBCAAAABGdBTUEAAK/INwWK6QAAAAZ0Uk5TAAAAAAAAbqYHkQAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvxJREFUeNrtmb9LHEEUxwcTkSCxEAKxCXZWpomCBklhI5IgBEJQkSMWhxZyFgbsAiEi2GhzFkpAS9ughMD1ooVCuqRIF/I/RITx7b7duf0xv3Z2jlPvPR54t7fzYe7W3Q9fHmP3qo7XBv9t9V98GthfHlp6O1qKxS+7+dEjfzgeEXm9tyxxvdoV4eyI/7/9NLF4YoMm4lX9VEls4nB38Qb558e81ofQAsTGwQP+62GKFW9QQ7yufU8TYT/4F1gCkWQhDnrlKa+OAzR16YZ+5IgCh4vrvV/7n2E3WYjLEf/OzsuJvNEjVgagsM7Oz4PXeLzWh7igP8xEqxYqAXHkMEv8Mj0dfLD0HBsoO2y3whYjYnw8woXEoBcqETG/x+AzXBOeBBTATbBXETE8GDSCRKtwuMc/H9/hMngBLX5HfCs+zbcSOjc5KRbru7E1Bb138LL5O6quNUDhPFygaTinuv3CfK31XDiCDaz3q2OZJQYilkAkW4pT3DOyws1Cr58MI+v17ITmfDMRC3CeiYWgtsS7U/BMBBf6MRcLvfp744k3XDkRxg/z5AFvam3ivBCzOkzbdf6N5F60kLVarXmi7oaxsWuGqHtMWNo142sl0c2ualk72VWuVlbCrmr9u9pV+ZWd7WoQoYNdDSJ0s6tZhPDoL2pXswgR6lmtLFZ229TK7EVoTyxQLYGyUF5+tCVw3kTIYhf6Uyv3SkyaSxDLuTCtGs02Df+MEhfG5pK60HDDFHWh4aa2cWEmu5rUWtCFuoejgwuVImSuLtQpwdGFmq/s5kKztoq60DER6l1olQgXN0ekFJW/rLQFUHsX2oqQxS70nwg9ixCqJc5qCbQl5Tka3qqkmcdR0qSkKVZR0kzukZImJc0OT5p3p2hQKj2/4wel4iL4GZQm5640KKVBKQ1KFUWD0jbVfR6U5nFl1ZoevVJ8pfhK8ZXiq/IupPhK8dVz0TC3NI6GuTTMpWEuDXOlUBrmdvIwl9JwaRylYUrDlIYpDauglIbbmYZvACQnkZaK+XLSAAAARXpUWHRTb2Z0d2FyZQAAeNpz0FDW9MxNTE/1TUzPTM5WMNEz0DNVsLTQNzDVNzBUSC7KLC6pdCiuzC1ILMlMztfLL0oHAHyiD/vAl2ahAAAAM3pUWHRTaWduYXR1cmUAAHjas0hOS0lOMjC2NDKwTDEwsjBMNDdLTTKysEy2NExKMTcBAJQkCMet5Z9AAAAAAElFTkSuQmCC";

const TIPS = ["Gulp, gulp", "Bloop, bloop", "Glub, glub"];
const EASE_UP = [
  "linear","ease","ease-in","ease-out","ease-in-out",
  "cubic-bezier(0.47,0,0.745,0.715)","cubic-bezier(0.39,0.575,0.565,1)",
  "cubic-bezier(0.445,0.05,0.55,0.95)","cubic-bezier(0.55,0.085,0.68,0.53)",
  "cubic-bezier(0.25,0.46,0.45,0.94)","cubic-bezier(0.455,0.03,0.515,0.955)",
];
const EASE_H = [
  ...EASE_UP,
  "cubic-bezier(0.55,0.055,0.675,0.19)","cubic-bezier(0.215,0.61,0.355,1)",
  "cubic-bezier(0.645,0.045,0.355,1)","cubic-bezier(0.895,0.03,0.685,0.22)",
  "cubic-bezier(0.165,0.84,0.44,1)","cubic-bezier(0.77,0,0.175,1)",
  "cubic-bezier(0.6,0.04,0.98,0.335)","cubic-bezier(0.075,0.82,0.165,1)",
  "cubic-bezier(0.785,0.135,0.15,0.86)",
];
const DURATIONS = [
  [1,20],[0.875,17.5],[0.75,15],[0.625,11.25],
  [0.5,7.5],[0.375,4.875],[0.25,3.25],
];

const ri  = (arr) => arr[Math.floor(Math.random() * arr.length)];
const rb  = (a, b) => a + Math.random() * (b - a);
const setT  = (el, v) => { el.style.transform = el.style.WebkitTransform = v; };
const setTr = (el, v) => { el.style.transition = el.style.WebkitTransition = v; };
const setAn = (el, v) => { el.style.animation  = el.style.WebkitAnimation  = v; };

function injectStyles() {
  const id = "__shoal_styles__";
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = `
    @keyframes fidoSwimForwards {
      100% { background-position: 0px -184px; }
    }
    .shoal-fish {
      width: 27px;
      height: 23px;
      background-image: url("${FISH_SPRITE}");
      background-repeat: no-repeat;
      background-position: 0 0;
      display: block;
    }
    .shoal-c3 {
      position: fixed;
      bottom: 0;
      z-index: 9999;
      pointer-events: none;
    }
  `;
  document.head.appendChild(s);
}

/**
 * ShoalDoodle — animated fish that swim across the screen.
 *
 * Drop into Hero.jsx:
 *   <ShoalDoodle repeat interval={12000} />
 *
 * Props:
 *   minFish  {number}   2       min fish per shoal
 *   maxFish  {number}   7       max fish per shoal
 *   delay    {number}   500     ms before first spawn
 *   repeat   {boolean}  false   auto-respawn after each shoal finishes
 *   interval {number}   12000   ms between respawns  ← use seconds, not 10!
 */
export default function ShoalDoodle({
  minFish  = 2,
  maxFish  = 7,
  delay    = 500,     // give the page time to paint first
  repeat   = false,
  interval = 12000,   // 12 seconds between shoals
}) {
  const activeC3s = useRef([]);
  const timers    = useRef([]);

  const clearAll = useCallback(() => {
    activeC3s.current.forEach((c) => c?.parentNode?.removeChild(c));
    activeC3s.current = [];
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const spawnShoal = useCallback(() => {
    // Remove leftover fish
    activeC3s.current.forEach((c) => c?.parentNode?.removeChild(c));
    activeC3s.current = [];

    const W     = window.innerWidth;
    const H     = window.innerHeight;
    const animW = W + 27;
    const count = Math.round(rb(minFish, maxFish));
    const shuffled = [...DURATIONS].sort(() => Math.random() - 0.5);

    let slowestDur = 0;
    let slowestC1  = null;

    // ── Step 1: create & attach all DOM nodes (no transitions yet)
    const fishData = [];
    for (let i = 0; i < count; i++) {
      const c3  = document.createElement("div");
      const c2  = document.createElement("div");
      const c1  = document.createElement("div");
      const box = document.createElement("div");

      c3.className  = "shoal-c3";
      box.className = "shoal-fish";
      box.title     = ri(TIPS);

      c1.appendChild(box);
      c2.appendChild(c1);
      c3.appendChild(c2);
      document.body.appendChild(c3);
      activeC3s.current.push(c3);

      const [animDur, bench] = shuffled[i % shuffled.length];
      const transDur  = (animW * bench) / 500;
      const scale     = rb(0.5, 1.5);
      const adjScale  = 1 + (1 / scale - 1) / 2;
      const adjFudge  = scale < 1 ? 1 / scale : 1;
      const swimRight = Math.random() > 0.5;
      const yStart    = Math.round(Math.random() * H * adjScale * 0.1);

      if (transDur > slowestDur) { slowestDur = transDur; slowestC1 = c1; }

      // Set starting position (no transition yet — browser must paint this first)
      if (swimRight) c3.style.left  = "-27px";
      else           c3.style.right = "-27px";
      c3.style.bottom = yStart + "px";

      if (swimRight) setT(box, "rotate3d(0,1,0,180deg)");

      // Start sprite animation
      const animDelay = -Math.random() * animDur;
      setAn(box, `fidoSwimForwards ${animDur}s steps(8) ${animDelay}s infinite`);

      fishData.push({ c1, c2, c3, animW, adjFudge, adjScale, swimRight, transDur, scale });
    }

    // ── Step 2: wait 2 frames so the browser paints the start position,
    //            THEN apply transitions — this is the critical fix.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fishData.forEach(({ c1, c2, c3, animW, adjFudge, adjScale, swimRight, transDur, scale }) => {
          const H2   = window.innerHeight;
          const xMove = Math.round(animW * adjFudge) * (swimRight ? 1 : -1);
          const yMove = -Math.round(Math.random() * H2 * adjScale * 0.333);

          setTr(c1, `transform ${transDur}s ${ri(EASE_H)}`);
          setT(c1,  `translate3d(${xMove}px, 0, 0)`);

          setTr(c2, `transform ${transDur}s ${ri(EASE_UP)}`);
          setT(c2,  `translate3d(0, ${yMove}px, 0)`);

          setTr(c3, `transform ${transDur}s linear`);
          setT(c3,  `scale3d(${scale}, ${scale}, 1)`);

          const onEnd = () => {
            c1.removeEventListener("transitionend", onEnd);
            if (c3.parentNode) c3.parentNode.removeChild(c3);
            activeC3s.current = activeC3s.current.filter((el) => el !== c3);
          };
          c1.addEventListener("transitionend", onEnd);
        });

        // Auto-respawn after the slowest fish finishes
        if (slowestC1 && repeat) {
          const onLast = () => {
            slowestC1.removeEventListener("transitionend", onLast);
            const tid = setTimeout(spawnShoal, interval);
            timers.current.push(tid);
          };
          slowestC1.addEventListener("transitionend", onLast);
        }
      });
    });
  }, [minFish, maxFish, repeat, interval]);

  useEffect(() => {
    injectStyles();
    const tid = setTimeout(spawnShoal, delay);
    timers.current.push(tid);
    return clearAll;
  }, [spawnShoal, delay, clearAll]);

  return null;
}