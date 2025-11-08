"use client";

import { Suspense } from "react";
import CallbackContent from "./callback-content";

export default function CallbackPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-gray-600">Loading authentication...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
