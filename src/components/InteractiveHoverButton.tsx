import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        // base noir button shell
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-black/80 p-2 px-6 text-center font-semibold transition-colors duration-200 backdrop-blur-sm",
        // subtle border + invert on hover
        "border-white/20 hover:bg-white hover:border-white/30 group-hover:bg-white group-hover:border-white/30",
        className,
      )}
      {...props}
    >
      <div className="relative z-10 flex items-center gap-2">
        {/* dot: white by default, hidden on hover */}
        <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 transform group-hover:scale-0 group-hover:opacity-0" />
        {/* main label: white by default, turn black on hover */}
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white group-hover:text-black">
          {children}
        </span>
      </div>

      {/* hover panel: appears on hover, text should be black (since background becomes white) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex h-full w-full translate-x-full items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-20"
      >
        <span className="text-black">{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
