import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const lastTextRef = useRef("");
  const [isInView, setIsInView] = useState(false);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatter = useMemo(() => {
    const hasDecimals = maxDecimals > 0;

    return new Intl.NumberFormat("en-US", {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    });
  }, [maxDecimals, separator]);

  const formatValue = useCallback(
    (latest: number) => {
      const formattedNumber = formatter.format(latest);

      return separator
        ? formattedNumber.replace(/,/g, separator)
        : formattedNumber;
    },
    [formatter, separator],
  );

  const writeValue = useCallback(
    (value: number) => {
      const nextText = formatValue(value);

      if (ref.current && nextText !== lastTextRef.current) {
        ref.current.textContent = nextText;
        lastTextRef.current = nextText;
      }
    },
    [formatValue],
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    writeValue(direction === "down" ? to : from);
  }, [from, to, direction, writeValue]);

  useEffect(() => {
    if (!isInView || !startWhen) {
      return;
    }

    if (typeof onStart === "function") {
      onStart();
    }

    let animationFrameId = 0;
    let animationStartTime = 0;
    let lastPaintTime = 0;

    const startValue = direction === "down" ? to : from;
    const endValue = direction === "down" ? from : to;
    const durationMs = Math.max(duration * 1000, 0);

    const timeoutId = window.setTimeout(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion || durationMs === 0) {
        writeValue(endValue);

        if (typeof onEnd === "function") {
          onEnd();
        }

        return;
      }

      const isMobileLike =
        window.matchMedia("(pointer: coarse)").matches ||
        navigator.hardwareConcurrency <= 4;
      const frameInterval = 1000 / (isMobileLike ? 24 : 60);

      const update = (timestamp: number) => {
        if (animationStartTime === 0) {
          animationStartTime = timestamp;
        }

        const elapsed = timestamp - animationStartTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const shouldPaint =
          progress === 1 || timestamp - lastPaintTime >= frameInterval;

        if (shouldPaint) {
          const easedProgress = easeOutCubic(progress);
          const currentValue =
            startValue + (endValue - startValue) * easedProgress;

          writeValue(currentValue);
          lastPaintTime = timestamp;
        }

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(update);
        } else {
          writeValue(endValue);

          if (typeof onEnd === "function") {
            onEnd();
          }
        }
      };

      animationFrameId = requestAnimationFrame(update);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    isInView,
    startWhen,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
    writeValue,
  ]);

  return <span className={className} ref={ref} />;
}
