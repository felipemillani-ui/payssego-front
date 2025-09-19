const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring/50 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default:  "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:  "border border-border bg-transparent hover:bg-muted/50",
  ghost:    "bg-transparent hover:bg-muted/50",
};

const sizes = {
  sm:  "h-8 px-3 text-sm",
  md:  "h-10 px-4",
  lg:  "h-12 px-5 text-base",
};

export function Button({ variant = "default", size = "md", className = "", ...props }) {
  const cls = [base, variants[variant], sizes[size], className].join(" ");
  return <button className={cls} {...props} />;
}
