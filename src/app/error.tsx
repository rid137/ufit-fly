"use client";

import { useEffect } from "react";
import "@/app/error.css";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex__column w-screen h-screen gap-4 ">
      <h2>Something went wrong!</h2>
      <button
        className="bg-black text-white p-3 rounded-md"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
