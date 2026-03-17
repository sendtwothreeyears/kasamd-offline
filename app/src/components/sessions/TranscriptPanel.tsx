import { useEffect, useRef } from "react";

interface TranscriptPanelProps {
  rawTranscript: string | null;
  liveTranscript: string;
  finalTranscript: string | null;
  isTranscribing: boolean;
  isRecording: boolean;
}

export default function TranscriptPanel({
  rawTranscript,
  liveTranscript,
  finalTranscript,
  isTranscribing,
  isRecording,
}: TranscriptPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show live text while recording/transcribing; afterwards prefer finalTranscript
  // (set synchronously on message arrival) over rawTranscript (persisted via DB).
  // This avoids: (a) a one-frame flash before the DB save completes on first
  // recording, and (b) showing stale rawTranscript from a previous recording
  // before the new value is persisted.
  const displayText = isRecording || isTranscribing
    ? liveTranscript
    : (finalTranscript || rawTranscript || liveTranscript);
  const hasText = displayText && displayText.length > 0;

  // Auto-scroll to bottom when transcript updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayText]);

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto rounded-md border border-border bg-white px-4 py-3"
    >
      {hasText && (
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-900">
          {displayText}
        </p>
      )}

      {isRecording && (
        <div className="flex items-center gap-2 pt-2 text-sm text-gray-500">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-400" />
          Listening…
        </div>
      )}

      {!isRecording && isTranscribing && (
        <div className="flex items-center gap-2 pt-2 text-sm text-gray-500">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          Finalizing transcript…
        </div>
      )}

      {!hasText && !isTranscribing && !isRecording && (
        <p className="text-sm text-gray-400">
          Transcription will appear here during recording…
        </p>
      )}
    </div>
  );
}
