
import type { Metadata } from "next";

const projects = [
  {
    id: "hotel-reservation-system",
    title: "Hotel Reservation System",
    description:
      "A web-based system for managing hotel rooms, guests, and reservations.",
  },
  {
    id: "car-rental-system",
    title: "Car Rental System",
    description:
      "A system designed to manage vehicle rentals, customer information, and rental transactions.",
  },
  {
    id: "ruby-store-database-management-system",
    title: "Ruby Store Database Management System",
    description:
      "A database project that manages products, customers, and store transactions.",
  },
];

export const metadata: Metadata = {
  title: "Projects | John Paul Quider",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        Selected work
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Projects
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        A selection of systems and database projects I have worked on as a
        student.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 transition-colors hover:border-blue-400/50 hover:bg-slate-900"
          >
            <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-semibold text-blue-400">
              <span aria-hidden="true">{"</>"}</span>
            </div>
            <h2 className="text-xl font-semibold leading-7 text-white">
              {project.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
