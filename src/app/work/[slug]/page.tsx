import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary[0],
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <Link
        href="/#work"
        className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
      >
        ← Selected work
      </Link>
      <p className="mt-8 text-sm text-[var(--ink-faint)]">
        {project.context} · {project.years}
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl tracking-tight text-[var(--ink)] sm:text-6xl">
        {project.name}
      </h1>
      <div className="mt-8 grid max-w-3xl gap-4 text-base leading-relaxed text-[var(--ink-muted)]">
        {project.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 max-w-2xl border-l-2 border-[var(--pitch)] pl-4 text-sm leading-relaxed text-[var(--ink)]">
        <span className="font-medium text-[var(--pitch)]">Interview hook: </span>
        {project.interviewHook}
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="border border-white/10 px-2.5 py-1 text-xs tracking-wide text-[var(--ink-muted)]"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Button
            key={link.href}
            nativeButton={false}
            render={
              <a href={link.href} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            className="h-11 rounded-md bg-[var(--pitch)] px-5 text-[var(--pitch-ink)] hover:bg-[var(--pitch-bright)]"
          >
            {link.label}
          </Button>
        ))}
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {project.images.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#151918]"
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
  );
}
