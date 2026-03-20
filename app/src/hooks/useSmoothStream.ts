import { useState, useRef, useCallback } from "react";

/**
 * Smoothing buffer for streaming text. Accumulates incoming chunks and drains
 * them word-by-word via requestAnimationFrame for a typewriter effect at 60fps.
 */
export function useSmoothStream() {
  const [smoothText, setSmoothText] = useState("");
  const bufferRef = useRef("");
  const displayedRef = useRef("");
  const rafRef = useRef<number | null>(null);

  const drain = useCallback(() => {
    const buf = bufferRef.current;
    const displayed = displayedRef.current;

    if (displayed.length >= buf.length) {
      // Nothing left to drain — stop the loop, wait for more chunks
      rafRef.current = null;
      return;
    }

    // Find the next word boundary after current position
    const remaining = buf.slice(displayed.length);
    const wordMatch = remaining.match(/^\S*\s?/);
    const nextWord = wordMatch ? wordMatch[0] : remaining.charAt(0);

    const newDisplayed = displayed + nextWord;
    displayedRef.current = newDisplayed;
    setSmoothText(newDisplayed);

    rafRef.current = requestAnimationFrame(drain);
  }, []);

  const appendChunk = useCallback(
    (fullText: string) => {
      bufferRef.current = fullText;
      // Start draining if not already running
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(drain);
      }
    },
    [drain],
  );

  const flush = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const buf = bufferRef.current;
    displayedRef.current = buf;
    setSmoothText(buf);
  }, []);

  const reset = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    bufferRef.current = "";
    displayedRef.current = "";
    setSmoothText("");
  }, []);

  return { smoothText, appendChunk, flush, reset };
}
