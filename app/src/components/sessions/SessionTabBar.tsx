import type { SessionNoteTab } from "../../types";

/**
 * A SessionTab is either a static tab ("context" | "transcription") or a
 * note tab identified by `note:<noteId>`.
 */
export type SessionTab = "context" | "transcription" | `note:${string}`;

/** Extract the noteId from a note tab string, or null if not a note tab. */
export function getNoteId(tab: SessionTab): string | null {
  return tab.startsWith("note:") ? tab.slice(5) : null;
}

/** Build a note tab string from a noteId. */
export function noteTab(noteId: string): SessionTab {
  return `note:${noteId}`;
}

interface SessionTabBarProps {
  activeTab: SessionTab;
  onTabChange: (tab: SessionTab) => void;
  /** When true, lock user on the current tab (e.g. during recording). */
  locked?: boolean;
  /** Whether to show the Transcription tab. */
  showTranscription?: boolean;
  /** Dynamic note tabs to render. */
  noteTabs: SessionNoteTab[];
  /** Called when the '+' button is clicked to add a new note tab. */
  onAddNote?: () => void;
  /** Called when the dropdown menu is requested on a note tab. */
  onNoteMenu?: (noteId: string, anchor: HTMLElement) => void;
}

function Separator() {
  return <div className="mx-2 my-auto h-6 w-px shrink-0 bg-border" />;
}

function TabButton({
  active,
  disabled,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  disabled: boolean;
  onClick: () => void;
  icon?: string;
  label: string;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-md border px-1 py-1.5 text-base font-medium transition-colors whitespace-nowrap ${
        active
          ? "border-border bg-white text-gray-900"
          : disabled
            ? "cursor-not-allowed border-transparent text-gray-300"
            : "border-transparent text-gray-500 hover:border-border"
      }`}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className={`h-5 w-5 ${active ? "" : "brightness-0 opacity-50"}`}
        />
      )}
      {label}
    </button>
  );
}

export default function SessionTabBar({
  activeTab,
  onTabChange,
  locked = false,
  showTranscription = false,
  noteTabs,
  onAddNote,
  onNoteMenu,
}: SessionTabBarProps) {
  const staticTabs: { id: SessionTab; label: string; icon: string; show: boolean }[] = [
    { id: "context", label: "Context", icon: "/icons/context.svg", show: true },
    { id: "transcription", label: "Transcription", icon: "/icons/transcription.svg", show: showTranscription },
  ];

  const visibleStatic = staticTabs.filter((t) => t.show);

  return (
    <div className="flex items-center py-2 overflow-x-auto scrollbar-hide">
      {/* Static tabs */}
      {visibleStatic.map((tab, i) => {
        const isActive = activeTab === tab.id;
        const disabled = locked && !isActive;
        return (
          <div key={tab.id} className="flex items-center shrink-0">
            {i > 0 && <Separator />}
            <TabButton
              active={isActive}
              disabled={disabled}
              onClick={() => onTabChange(tab.id)}
              icon={tab.icon}
              label={tab.label}
            />
          </div>
        );
      })}

      {/* Dynamic note tabs */}
      {noteTabs.map((nt) => {
        const tabId = noteTab(nt.id);
        const isActive = activeTab === tabId;
        const disabled = locked && !isActive;
        return (
          <div key={nt.id} className="flex items-center shrink-0">
            <Separator />
            <div className="flex items-center gap-0.5">
              <TabButton
                active={isActive}
                disabled={disabled}
                onClick={() => onTabChange(tabId)}
                icon="/icons/note.svg"
                label={nt.templateName}
              />
              {onNoteMenu && (
                <button
                  onClick={(e) => onNoteMenu(nt.id, e.currentTarget)}
                  className={`rounded p-0.5 transition-colors ${
                    isActive
                      ? "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  }`}
                  title="Note options"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        );
      })}

      {/* '+' button to add a note tab */}
      {onAddNote && (
        <div className="flex items-center shrink-0">
          <Separator />
          <button
            onClick={onAddNote}
            disabled={locked}
            className={`flex items-center justify-center rounded-md border border-dashed px-2 py-1.5 text-base font-medium transition-colors ${
              locked
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600"
            }`}
            title="Add note"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
