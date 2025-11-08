"use client";

import { Suspense } from "react";
import SuccessContent from "./success-content";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-gray-600">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
