export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium tracking-[0.14em] text-[var(--pitch)] uppercase">
            About
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            Skopje-based.
            <br />
            Remote-friendly.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[var(--ink-muted)] lg:col-span-7 lg:col-start-6">
          <p>
            I am a senior Android engineer focused on Kotlin and Jetpack
            Compose. Since 2012 I have shipped consumer and companion apps to
            the Play Store — most recently UI refresh work on the official
            Premier League app, and before that four years on Widex hearing-aid
            companions with Bluetooth Low Energy.
          </p>
          <p>
            Education: Institute of Informatics, Faculty of Natural Sciences and
            Mathematics (FINKI), Ss. Cyril and Methodius University — Skopje. An
            earlier PHP/web chapter came before specializing in Android; it is
            background, not the pitch.
          </p>
          <p>
            Tone: precise and product-minded. Open to senior Android / Compose
            roles — remote or EU.
          </p>
        </div>
      </div>
    </section>
  );
}
