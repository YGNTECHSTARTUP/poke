import React from "react";

export function GridBackground(
    { children }: { children: React.ReactNode }
) {
  return (
    <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] text-white opacity-0"></div>
{children}
    </div>
  );
}
