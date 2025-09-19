export function Card({ className = "", ...props }) {
  const cls = [
    "rounded-xl border border-border bg-white/90 dark:bg-white shadow-sm",
    className,
  ].join(" ");
  return <section className={cls} {...props} />;
}

export function CardHeader({ className = "", ...props }) {
  return <header className={["px-5 py-4", className].join(" ")} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={["px-5 pb-5", className].join(" ")} {...props} />;
}
