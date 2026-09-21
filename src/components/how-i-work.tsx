export function HowIWork() {
  const points = [
    {
      title: "Compose UI systems",
      body: "Screen state, navigation, animations, and empty/error paths treated as product surface — not leftovers.",
    },
    {
      title: "Networking + offline storage",
      body: "Retrofit/Moshi or Ktor with Room (and earlier Realm) so companion and consumer flows survive flaky radios.",
    },
    {
      title: "BLE / device UX",
      body: "Pairing reliability, battery constraints, and accessibility for users who depend on the connected hardware.",
    },
    {
      title: "Observability",
      body: "App Center analytics and production habits that make regressions visible before users do.",
    },
    {
      title: "CI and tests",
      body: "Gradle pipelines, unit coverage where it pays off, and public notes in the engineering playbook.",
    },
  ];

  return (
    <section
      id="how"
      className="scroll-mt-20 border-t border-white/8 bg-[linear-gradient(180deg,rgba(18,24,22,0.65),transparent)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.14em] text-[var(--pitch)] uppercase">
            How I work
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            Senior IC habits
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
            Pulled from production companion and consumer work — not a generic
            skills matrix.
          </p>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <li key={point.title} className="border-t border-white/10 pt-5">
              <h3 className="text-base font-medium text-[var(--ink)]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {point.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-[var(--ink-muted)]">
          Public notes:{" "}
          <a
            href="https://github.com/sivica/engineering-playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)]"
          >
            engineering-playbook
          </a>
        </p>
      </div>
    </section>
  );
}
