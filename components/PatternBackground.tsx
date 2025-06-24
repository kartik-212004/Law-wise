import React from 'react';

export default function PatternBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#04000F]">
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,#4f4f4f20_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f20_2px,transparent_2px)]
              bg-[size:50px_50px]
              [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
              opacity-60
            "
          />
        </div>
      </div>

      {/* Foreground content */}
      {children}
    </div>
  );
}
