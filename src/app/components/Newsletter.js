export default function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="mx-auto max-w-6xl px-6 pb-16"
    >
      <div className="grid gap-8 rounded-3xl bg-base-200 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="kindred-muted text-xs font-bold uppercase tracking-widest">
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

          <p className="kindred-muted mt-4 max-w-lg leading-7">
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
              className="input min-w-0 w-full flex-1 rounded-full bg-base-100"
            />

            <button
              type="button"
              disabled
              className="btn btn-primary rounded-full px-6"
            >
              Subscribe
            </button>
          </div>

          <p
            id="newsletter-note"
            className="kindred-muted mt-3 text-xs leading-6"
          >
            Newsletter subscriptions are coming soon. This preview does
            not collect your email address.
          </p>
        </div>
      </div>
    </section>
  );
}