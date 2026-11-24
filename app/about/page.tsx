
export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        A little about me
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        About Me
      </h1>
      <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-7 sm:p-10">
        <h2 className="text-2xl font-semibold text-white">
          John Paul Mari S. Quider
        </h2>
        <p className="mt-2 text-sm font-medium text-blue-300">
          BSIT Student
        </p>
        <p className="mt-6 text-base leading-8 text-slate-300">
          I am a Bachelor of Science in Information Technology student building
          a foundation in computing and digital problem-solving. I am especially
          interested in web development, programming, and exploring how
          technology can make everyday tasks easier. My goal is to keep learning,
          strengthen my technical skills, and create useful projects as I grow
          in the field.
        </p>
      </section>
    </main>
  );
}
