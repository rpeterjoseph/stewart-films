export default function PhotoPlaceholder({
  label,
  className = "",
  dark = false,
  showLabel = true,
}: {
  label: string;
  className?: string;
  dark?: boolean;
  showLabel?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-bg-alt to-line ${
        dark ? "from-ink to-[#3a352c]" : ""
      } ${className}`}
    >
      {showLabel && (
        <div className={`flex flex-col items-center gap-3 ${dark ? "text-bg/70" : "text-ink-muted"}`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="6" width="14" height="11" rx="1.5" />
            <path d="M17 10l4-2.5v9L17 14" />
          </svg>
          <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-center px-4">{label}</span>
        </div>
      )}
    </div>
  );
}
