// Shared compact duration-toggle used on Dandeli resort detail pages and homepage package cards.
export const DurationSelector = ({ resort, durations, selectedKey, onSelect, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`} data-testid={`${resort.id}-duration-selector`}>
    {durations.map((d) => (
      <button
        key={d.key}
        type="button"
        aria-pressed={selectedKey === d.key}
        onClick={() => onSelect(d.key)}
        data-testid={`${resort.id}-duration-${d.key}`}
        className={`rounded-full border px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 ${
          selectedKey === d.key
            ? "border-[#8B5A2B] bg-[#8B5A2B] text-[#F7F5F0]"
            : "border-[#0A170F]/20 text-[#0A170F] hover:border-[#8B5A2B] hover:text-[#8B5A2B]"
        }`}
      >
        {d.label}
      </button>
    ))}
  </div>
);
