import { useState, useEffect, useRef } from "react";
import { Calendar, ChevronRight, User } from "lucide-react";

export type DateFilter =
  | { type: "all" }
  | { type: "preset"; days: number }
  | { type: "custom"; start: Date; end: Date };

const DATE_PRESETS: { label: string; days: number }[] = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 90 days", days: 90 },
  { label: "Last 12 months", days: 365 },
];

interface Props {
  dateFilter: DateFilter;
  onDateFilterChange: (filter: DateFilter) => void;
  onClose: () => void;
}

export default function ScribePanelFilterPopover({
  dateFilter,
  onDateFilterChange,
  onClose,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [showDateMenu, setShowDateMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const isDateActive = dateFilter.type !== "all";

  return (
    <div
      ref={ref}
      className="absolute left-0 top-full z-50 mt-1 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
    >
      {/* Date filter */}
      <div className="relative">
        <button
          onClick={() => setShowDateMenu((v) => !v)}
          className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-gray-50 ${
            isDateActive ? "text-gray-900 font-medium" : "text-gray-700"
          }`}
        >
          <Calendar className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">Date</span>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
        </button>

        {showDateMenu && (
          <div className="absolute left-full top-0 ml-1 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            {DATE_PRESETS.map((preset) => {
              const isActive =
                dateFilter.type === "preset" && dateFilter.days === preset.days;
              return (
                <button
                  key={preset.days}
                  onClick={() => {
                    if (isActive) {
                      onDateFilterChange({ type: "all" });
                    } else {
                      onDateFilterChange({ type: "preset", days: preset.days });
                    }
                  }}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-gray-50 ${
                    isActive ? "bg-primary/5 text-gray-900" : "text-gray-700"
                  }`}
                >
                  {preset.label}
                  {isActive && (
                    <span className="ml-auto text-xs">{"\u2713"}</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Patient profile filter — placeholder for KAS-323 */}
      <button
        className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
        disabled
      >
        <User className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Patient profile</span>
        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
      </button>
    </div>
  );
}
