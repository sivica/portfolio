export function SiteFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Ivica Stojanoski</p>
        <p>Senior Android · Kotlin · Jetpack Compose · Skopje</p>
      </div>
    </footer>
  );
}
