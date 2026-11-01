import Link from "next/link";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";

const causes = [
  {
    number: "01",
    title: "Greener neighbourhoods",
    description: "Plant trees and care for shared green spaces.",
  },
  {
    number: "02",
    title: "Care that reaches people",
    description: "Share clothing, food, and everyday essentials.",
  },
  {
    number: "03",
    title: "Cleaner places to gather",
    description: "Help keep local streets and parks welcoming.",
  },
];

export default function Home() {
  return (
    <main className="bg-base-100 text-base-content">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="kindred-muted mb-5 text-xs font-bold uppercase tracking-[0.2em]">
            Small actions. Shared purpose.
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            A better community starts with{" "}
            <span className="text-secondary">you.</span>
          </h1>

          <p className="kindred-muted mt-6 max-w-lg text-lg leading-8">
            Plant a tree. Share a warm meal. Help a neighbour. Find local
            service events and turn your time into something that matters.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="btn btn-primary rounded-full px-6"
            >
              Explore events →
            </Link>

            <a
              href="#our-purpose"
              className="btn btn-outline rounded-full px-6"
            >
              Our purpose
            </a>
          </div>

          <p className="kindred-muted mt-8 text-sm">
            For your neighbourhood. For each other.
          </p>
        </div>

        <div className="rounded-4xl bg-base-200 p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            Find your way to give back
          </p>

          <div className="mt-7 space-y-4">
            {causes.map((item) => (
              <div
                key={item.number}
                className="kindred-card flex gap-4 rounded-2xl p-5"
              >
                <span className="text-sm font-bold text-secondary">
                  {item.number}
                </span>

                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="kindred-muted mt-2 text-sm leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="kindred-muted mt-6 text-sm leading-6">
            You don’t need to change everything. Start with something nearby.
          </p>
        </div>
      </section>

      <section
        id="our-purpose"
        className="border-t border-base-content/10 px-6 py-12"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Together, local action goes further.
          </h2>

          <p className="kindred-muted mt-4 max-w-2xl leading-7">
            Kindred brings volunteers and community organisers together.
            Discover a cause you care about, take part in a local event,
            or invite others to join an initiative of your own.
          </p>
        </div>
      </section>

      <Features />
      <Gallery />
      <Newsletter />
    </main>
  );
}