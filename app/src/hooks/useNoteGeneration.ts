import { useState, useRef, useCallback, useEffect } from "react";
import { useSidecar } from "../contexts/SidecarContext";

interface UseNoteGenerationReturn {
  isGenerating: boolean;
  isStreaming: boolean;
  streamingText: string;
  error: string | null;
  /** noteId is required — identifies which session_notes row this generation targets. */
  generateNote: (
    sessionId: string,
    noteId: string,
    transcript: string,
    template?: string,
    context?: string,
  ) => void;
  /** Called when a note finishes generating. Receives (noteId, markdownContent). */
  onNoteGenerated: (callback: (noteId: string, content: unknown) => void) => void;
  /** The noteId currently being generated (or null). */
  activeNoteId: string | null;
}

export function useNoteGeneration(): UseNoteGenerationReturn {
  const { send, onMessage, connectionState } = useSidecar();

  const [isGenerating, setIsGenerating] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  const callbackRef = useRef<((noteId: string, content: unknown) => void) | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  const noteIdRef = useRef<string | null>(null);
  const isGeneratingRef = useRef(false);
  const accumulatedRef = useRef("");

  // Subscribe to sidecar messages
  useEffect(() => {
    const unsub = onMessage((raw: string) => {
      let data: {
        type: string;
        session_id?: string;
        note_id?: string;
        content?: unknown;
        text?: string;
        message?: string;
      };
      try {
        data = JSON.parse(raw);
      } catch {
        return;
      }

      // Only handle messages for our active session
      if (data.session_id && data.session_id !== sessionIdRef.current) return;
      // Filter by note_id when present
      if (data.note_id && data.note_id !== noteIdRef.current) return;

      if (data.type === "note_progress") {
        isGeneratingRef.current = true;
        setIsGenerating(true);
        setIsStreaming(true);
        accumulatedRef.current = "";
        setStreamingText("");
      } else if (data.type === "note_chunk") {
        accumulatedRef.current += data.text ?? "";
        setStreamingText(accumulatedRef.current);
      } else if (data.type === "note") {
        const nid = noteIdRef.current;
        isGeneratingRef.current = false;
        // Fire callback BEFORE clearing isStreaming so the store updates
        // before React re-renders and the editor remounts with fresh data
        if (nid) callbackRef.current?.(nid, data.content);
        setIsGenerating(false);
        setIsStreaming(false);
        setStreamingText("");
        setError(null);
        setActiveNoteId(null);
      } else if (data.type === "error" && isGeneratingRef.current) {
        isGeneratingRef.current = false;
        setError(data.message ?? "Note generation error");
        setIsGenerating(false);
        setIsStreaming(false);
        setActiveNoteId(null);
      }
    });

    return unsub;
  }, [onMessage]);

  // Handle connection loss while generating
  useEffect(() => {
    if (connectionState === "disconnected" && isGenerating) {
      isGeneratingRef.current = false;
      setError("Connection lost during note generation");
      setIsGenerating(false);
      setIsStreaming(false);
      setActiveNoteId(null);
    }
  }, [connectionState, isGenerating]);

  const generateNote = useCallback(
    (sessionId: string, noteId: string, transcript: string, template?: string, context?: string) => {
      sessionIdRef.current = sessionId;
      noteIdRef.current = noteId;
      setError(null);
      isGeneratingRef.current = true;
      setIsGenerating(true);
      setActiveNoteId(noteId);
      accumulatedRef.current = "";
      setStreamingText("");
      send(
        JSON.stringify({
          type: "generate_note",
          session_id: sessionId,
          note_id: noteId,
          transcript,
          template: template ?? "",
          context: context ?? "",
        }),
      );
    },
    [send],
  );

  const onNoteGenerated = useCallback((callback: (noteId: string, content: unknown) => void) => {
    callbackRef.current = callback;
  }, []);

  return {
    isGenerating,
    isStreaming,
    streamingText,
    error,
    generateNote,
    onNoteGenerated,
    activeNoteId,
  };
}
