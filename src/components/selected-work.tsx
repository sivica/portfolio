import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.14em] text-[var(--pitch)] uppercase">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            Shipped products, not sample tiles
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            Three pieces that hire: BLE companion depth, a brand sports app in
            production, and a cloneable Compose/KMP sample.
          </p>
        </div>

        <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              id={project.slug}
              className="project-block scroll-mt-24 grid gap-10 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <p className="text-sm text-[var(--ink-faint)]">
                  {project.context} · {project.years}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
                  {project.name}
                </h3>
                <div className="mt-5 space-y-3 text-[0.98rem] leading-relaxed text-[var(--ink-muted)]">
                  {project.summary.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="border border-white/10 px-2.5 py-1 text-xs tracking-wide text-[var(--ink-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-l-2 border-[var(--pitch)] pl-4 text-sm leading-relaxed text-[var(--ink)]">
                  <span className="font-medium text-[var(--pitch)]">
                    Interview hook:{" "}
                  </span>
                  {project.interviewHook}
                </p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[var(--ink)]"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Link
                    href={`/work/${project.slug}`}
                    className="link-underline text-[var(--ink-muted)]"
                  >
                    Case notes
                  </Link>
                </div>
              </div>

              <div
                className={`grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {project.images.map((image, imageIndex) => (
                  <div
                    key={image.src}
                    className={`project-image overflow-hidden rounded-2xl border border-white/10 bg-[#151918] ${
                      imageIndex === 0 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                    style={{
                      boxShadow: `0 24px 60px -28px ${project.accent}55`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={540}
                      height={960}
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
