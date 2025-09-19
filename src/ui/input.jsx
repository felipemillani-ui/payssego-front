export function Input({ className = "", ...props }) {
  return (
    <input
      className={[
        // base
        "block w-full rounded-lg border bg-white/90",
        "border-border text-foreground placeholder:text-muted-foreground",
        "px-3 py-2 shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring",
        // dark fallback
        "dark:bg-white/95",
        className
      ].join(" ")}
      {...props}
    />
  );
}
