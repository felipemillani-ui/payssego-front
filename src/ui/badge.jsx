const variants = {
  default:   "bg-primary/15 text-primary border border-primary/30",
  secondary: "bg-muted text-foreground border border-border",
};

export function Badge({ variant = "default", className = "", ...props }) {
  const cls = [
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
    variants[variant],
    className,
  ].join(" ");
  return <span className={cls} {...props} />;
}
