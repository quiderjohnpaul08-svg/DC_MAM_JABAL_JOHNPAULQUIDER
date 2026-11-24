import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.5fr_0.7fr]">
      <section>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          BSIT-3 Student
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Hello, I&apos;m John Paul Quider
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m a Bachelor of Science in Information Technology student
          passionate about web development, programming, and technology. I enjoy
          learning how ideas can become useful, well-crafted digital
          experiences.
        </p>
        <Link
          href="/projects"
          className="mt-9 inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          See My Projects
          <span aria-hidden="true" className="ml-2">
            &rarr;
          </span>
        </Link>
      </section>

      <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/20">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-bold text-blue-400 ring-1 ring-inset ring-blue-400/20">
          JPQ
        </div>
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
          Student developer
        </p>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
          Curious by nature.
          <br />
          Building with purpose.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Web development", "Programming", "Technology"].map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </aside>
    </main>
  );
}
