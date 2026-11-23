import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Hello, my name is John Paul Mari S. Quider</h1>
      <p>
        I am a third-year Bachelor of Science in Information
        Technology student. I am interested in programming,
        technology, and learning new skills.
      </p>

      <Link href="/projects">See my projects</Link>
    </main>
  );
}
