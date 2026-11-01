export default function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="mx-auto max-w-6xl px-6 pb-16"
    >
      <div className="grid gap-8 rounded-3xl bg-[#e6ecd9] p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#56735c]">
            Stay connected
          </p>

          <h2
            id="newsletter-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            A little inspiration.
            <br />
            A bigger difference.
          </h2>

          <p className="mt-4 max-w-lg leading-7 text-[#53665c]">
            Community stories, volunteering ideas, and opportunities to
            give back—all in one place.
          </p>
        </div>

        <div>
          <label
            htmlFor="newsletter-email"
            className="mb-3 block text-sm font-semibold"
          >
            Your email address
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              name="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-describedby="newsletter-note"
              className="min-w-0 flex-1 rounded-full border border-[#183c32]/20 bg-white px-5 py-3 text-[#183c32] outline-none placeholder:text-[#65756b] focus:border-[#183c32] focus:ring-2 focus:ring-[#183c32]/20"
            />

            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-[#183c32] px-6 py-3 font-semibold text-white opacity-70"
            >
              Subscribe
            </button>
          </div>

          <p
            id="newsletter-note"
            className="mt-3 text-xs leading-6 text-[#53665c]"
          >
            Newsletter subscriptions are coming soon. This preview does
            not collect your email address.
          </p>
        </div>
      </div>
    </section>
  );
}