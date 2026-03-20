import { useState, useCallback } from "react";

const STORAGE_KEY = "liveTranscription";

export function getLiveTranscriptionEnabled(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

export default function TranscriptionSettingsPane() {
  const [enabled, setEnabled] = useState(getLiveTranscriptionEnabled);

  const toggle = useCallback(() => {
    const next = !enabled;
    localStorage.setItem(STORAGE_KEY, String(next));
    setEnabled(next);
  }, [enabled]);

  return (
    <div className="max-w-lg">
      <h2 className="mb-1 text-lg font-semibold text-gray-900">
        Transcription Mode
      </h2>
      <p className="mb-4 text-sm text-gray-500">
        Controls how audio is transcribed during recording.
      </p>

      <label className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
        <div>
          <p className="text-sm font-medium text-gray-900">
            Live Transcription
            <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
              Beta
            </span>
          </p>
          <p className="mt-0.5 text-xs text-gray-500">
            Show text as you speak. Disabling this improves transcription quality
            and performance.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={toggle}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
            enabled ? "bg-primary" : "bg-gray-200"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform ${
              enabled ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </label>
    </div>
  );
}
