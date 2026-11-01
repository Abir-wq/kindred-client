const features = [
  {
    number: "01",
    title: "Find your next opportunity",
    description:
      "Explore upcoming cleanup drives, plantation activities, and donation events. Find a cause close to home and close to your heart.",
  },
  {
    number: "02",
    title: "Bring people together",
    description:
      "Create a community event with a location, date, and purpose. Help others discover your initiative and get involved.",
  },
  {
    number: "03",
    title: "Keep your plans together",
    description:
      "See the events you have joined in one place, organised by date, so you can prepare for your next day of volunteering.",
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-[#56735c]">
        Made for making a difference
      </p>

      <h2
        id="features-heading"
        className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Good intentions, made easier.
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-[#53665c]">
        From discovering an opportunity to organising your own initiative,
        Kindred helps you take the next step.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="rounded-3xl border border-[#183c32]/10 bg-white p-7"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e6ecd9] text-sm font-bold text-[#183c32]">
              {feature.number}
            </span>

            <h3 className="mt-6 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#53665c]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}