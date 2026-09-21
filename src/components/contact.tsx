import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-medium tracking-[0.14em] text-[var(--pitch)] uppercase">
          Contact
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
          Prefer senior Android / Compose roles.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-muted)]">
          Reach out directly — email is fastest. LinkedIn and GitHub are linked
          for context.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<a href="mailto:s.ivica@gmail.com" />}
            size="lg"
            className="h-11 rounded-md bg-[var(--pitch)] px-5 text-[var(--pitch-ink)] hover:bg-[var(--pitch-bright)]"
          >
            s.ivica@gmail.com
          </Button>
          <Button
            nativeButton={false}
            render={
              <a
                href="https://www.linkedin.com/in/ivica-stojanoski-3576283/"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
            className="h-11 rounded-md border-white/15 bg-transparent px-5 text-[var(--ink)] hover:bg-white/5"
          >
            LinkedIn
          </Button>
          <Button
            nativeButton={false}
            render={
              <a
                href="https://github.com/sivica"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
            className="h-11 rounded-md border-white/15 bg-transparent px-5 text-[var(--ink)] hover:bg-white/5"
          >
            GitHub
          </Button>
          <Button
            nativeButton={false}
            render={<a href="/cv/Ivica-Stojanoski-CV.pdf" />}
            variant="ghost"
            size="lg"
            className="h-11 px-3 text-[var(--ink-muted)] hover:bg-transparent hover:text-[var(--ink)]"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
