/**
 * Lexical-based rich text editor for session tabs (Context, Transcription, Note).
 * Reusable across all three tabs — mount with different initialState per tab.
 */

import { memo, useEffect, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode } from "@lexical/link";
import { CodeNode } from "@lexical/code";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import type { EditorState, SerializedEditorState } from "lexical";
import { ClinicalEntityNode } from "../../lib/clinicalEntityNode";

const EDITOR_NODES = [ListNode, ListItemNode, LinkNode, CodeNode, HeadingNode, QuoteNode, ClinicalEntityNode];

/** Loads an existing Lexical editor state into the editor on mount. */
function LoadStatePlugin({
  editorState,
}: {
  editorState: SerializedEditorState | null;
}) {
  const [editor] = useLexicalComposerContext();
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current || !editorState) return;
    hasLoaded.current = true;
    const state = editor.parseEditorState(editorState);
    editor.setEditorState(state);
  }, [editor, editorState]);

  return null;
}

interface SessionEditorProps {
  /** Existing Lexical editor state to load (null for empty editor). */
  initialState: SerializedEditorState | null;
  /** Called on every change with the serialized editor state. */
  onChange?: (state: SerializedEditorState) => void;
  /** If true, the editor is read-only. */
  readOnly?: boolean;
  /** Placeholder text shown when the editor is empty. */
  placeholder?: string;
  /** Optional header rendered inside the editor card, above the content area. */
  header?: React.ReactNode;
}

export default memo(function SessionEditor({
  initialState,
  onChange,
  readOnly = false,
  placeholder,
  header,
}: SessionEditorProps) {
  const initialConfig = {
    namespace: "SessionEditor",
    nodes: EDITOR_NODES,
    editable: !readOnly,
    theme: {
      paragraph: "mb-2 text-base leading-normal text-gray-900",
      heading: {
        h1: "text-base font-bold mb-2 text-gray-900",
        h2: "text-base font-bold mb-2 text-gray-900",
        h3: "text-base font-bold mb-2 text-gray-900",
      },
      list: {
        ul: "list-disc ml-6 mb-2",
        ol: "list-decimal ml-6 mb-2",
        listitem: "ml-0",
      },
      text: {
        bold: "font-bold",
        italic: "italic",
        underline: "underline",
      },
      code: "bg-gray-100 px-2 py-1 rounded font-mono text-sm",
      link: "text-blue-600 underline hover:text-blue-800",
    },
    onError: (error: Error) => {
      console.error("SessionEditor error:", error);
    },
  };

  function handleChange(editorState: EditorState) {
    if (onChange) {
      onChange(editorState.toJSON());
    }
  }

  const editorClassName = "min-h-0 flex-1 overflow-auto px-4 py-3 max-w-[800px] font-[ui-sans-serif,system-ui,sans-serif] text-base text-gray-900 outline-none";
  const placeholderEl = (
    <div className="pointer-events-none absolute top-0 left-0 px-4 py-3 text-base text-gray-400">
      {placeholder}
    </div>
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div
        className={`flex h-full flex-col rounded-md border border-border bg-white ${
          readOnly
            ? ""
            : "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring"
        }`}
      >
        {header}
        <div className="relative min-h-0 flex-1 flex flex-col">
          <RichTextPlugin
            contentEditable={
              placeholder ? (
                <ContentEditable
                  className={editorClassName}
                  aria-placeholder={placeholder}
                  placeholder={placeholderEl}
                />
              ) : (
                <ContentEditable className={editorClassName} />
              )
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        {onChange && <OnChangePlugin onChange={handleChange} />}
        <LoadStatePlugin editorState={initialState} />
      </div>
    </LexicalComposer>
  );
});
