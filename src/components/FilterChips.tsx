export interface FilterOption {
  value: string;
  label: string;
}

export const ALL_FILTER = "all";

export const FilterChips = ({
  options,
  value,
  onChange,
  label,
}: {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) => (
  <div className="chips" role="group" aria-label={label}>
    {[{ value: ALL_FILTER, label: "Todos" }, ...options].map((option) => (
      <button
        key={option.value}
        className={`chip ${value === option.value ? "is-active" : ""}`}
        onClick={() => onChange(option.value)}
        aria-pressed={value === option.value}
      >
        {option.label}
      </button>
    ))}
  </div>
);
