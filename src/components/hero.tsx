import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(111,155,134,0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(200,16,46,0.12), transparent 50%), linear-gradient(165deg, #0b0e0d 0%, #121816 42%, #0a0c0b 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
        }}
      />

      <div className="mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-end gap-10 px-5 pb-10 pt-24 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:pb-16 lg:pt-20">
        <div className="hero-copy max-w-xl">
          <h1 className="font-display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            Ivica Stojanoski
          </h1>
          <p className="mt-5 text-lg font-medium tracking-tight text-[var(--pitch)] sm:text-xl">
            Senior Android Engineer — Kotlin &amp; Jetpack Compose
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
            Companion and consumer Android apps, including BLE device
            experiences and large-brand products shipped to the Play Store.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/#work" />}
              size="lg"
              className="h-11 rounded-md bg-[var(--pitch)] px-5 text-[var(--pitch-ink)] hover:bg-[var(--pitch-bright)]"
            >
              View selected work
            </Button>
            <Button
              nativeButton={false}
              render={<a href="mailto:s.ivica@gmail.com" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-white/15 bg-transparent px-5 text-[var(--ink)] hover:bg-white/5 hover:text-[var(--ink)]"
            >
              Email
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
              variant="ghost"
              size="lg"
              className="h-11 px-3 text-[var(--ink-muted)] hover:bg-transparent hover:text-[var(--ink)]"
            >
              LinkedIn
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

        <div className="hero-visual relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.22),transparent_65%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#161a18] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)]">
            <Image
              src="/hero-product.png"
              alt="Premier League Android app — production Play Store screenshot"
              width={512}
              height={910}
              priority
              className="h-auto w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0e0d]/80 to-transparent" />
          </div>
          <p className="mt-3 text-center text-xs tracking-wide text-[var(--ink-faint)] lg:text-left">
            Premier League · current production work
          </p>
        </div>
      </div>
    </section>
  );
}
