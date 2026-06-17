"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function ErrorContent() {
  const params = useSearchParams();
  const error = params.get("error");

  const message =
    error === "AccessDenied"
      ? "Access denied. Only @chowlyinc.com accounts can sign in."
      : "Something went wrong during sign-in. Please try again.";

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-slate-800 border border-red-500/30 rounded-2xl p-10 flex flex-col items-center gap-6 w-full max-w-sm text-center">
        <div className="text-4xl">🔒</div>
        <div>
          <h1 className="text-xl font-bold text-white">Sign-in Error</h1>
          <p className="text-slate-400 text-sm mt-2">{message}</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition-colors text-sm"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense>
      <ErrorContent />
    </Suspense>
  );
}
