
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";

export default function AuthStatus() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      await authClient.signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  }

  if (isPending) return null;

  if (session?.user) {
    return (
      <button
        onClick={handleLogout}
        disabled={loading}
        className="btn btn-primary rounded-full px-5"
      >
        {loading ? "Signing out..." : "Logout"}
      </button>
    );
  }

  return (
    <Link
      href="/login"
      className="btn btn-primary rounded-full px-5"
    >
      Login
    </Link>
  );
}
