
import Link from "next/link";
import { Suspense } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

async function getEvents() {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error("Error loading events:", error);
    return null;
  }
}

async function EventsList() {
  const events = await getEvents();

  if (events === null) {
    return (
      <p className="py-10 text-center">
        Unable to load events. Please try again later.
      </p>
    );
  }

  if (events.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="mb-4">No upcoming events yet.</p>
        <Link href="/events/create" className="btn btn-primary">
          Create an Event
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <article
          key={event._id || event.id}
          className="card overflow-hidden bg-base-100 shadow-xl"
        >
          {event.imageUrl && (
            <figure>
              <img
                src={event.imageUrl}
                alt={event.title}
                className="h-52 w-full object-cover"
              />
            </figure>
          )}

          <div className="card-body">
            <span className="text-sm font-semibold text-primary">
              {event.eventType}
            </span>

            <h2 className="card-title">{event.title}</h2>

            <p>{event.description}</p>

            <p className="text-sm opacity-70">
              <strong>Location:</strong> {event.location}
            </p>

            <p className="text-sm opacity-70">
              <strong>Date:</strong>{" "}
              {new Date(event.eventDate).toLocaleDateString()}
            </p>

            <div className="card-actions justify-end">
              <Link
                href={`/events/${event._id || event.id}`}
                className="btn btn-primary"
              >
                View Event
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function EventsLoading() {
  return (
    <p className="py-10 text-center">
      Loading community events...
    </p>
  );
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-base-100 px-6 py-12 text-base-content">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Upcoming Events</h1>
            <p className="mt-2 opacity-70">
              Discover events and make a difference in your community.
            </p>
          </div>

          <Link href="/events/create" className="btn btn-primary">
            Create an Event
          </Link>
        </div>

        <Suspense fallback={<EventsLoading />}>
          <EventsList />
        </Suspense>
      </div>
    </main>
  );
}
