"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, Suspense } from "react";
import AuthProvider from "./AuthProvider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <div >
      <Suspense fallback={<p>Loading...</p>}>
        <ConvexProvider client={convex}>
          <AuthProvider>{children}</AuthProvider>
        </ConvexProvider>
      </Suspense>
      ;
    </div>
  );
}
