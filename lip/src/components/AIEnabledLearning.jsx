import React from "react";
import { Cpu, BookOpen } from "lucide-react";

export default function AIEnabledLearning() {
  return (
    <>
      <style>{`
        @keyframes subtleFlicker {
          0%, 50%, 100% {
            opacity: 1;
            text-shadow:
              0 0 5px #22d3ee,
              0 0 10px #22d3ee,
              0 0 20px #22d3ee;
          }
          25%, 75% {
            opacity: 0.85;
            text-shadow: none;
          }
        }
      `}</style>

      <section
        className="
          w-full
          bg-gradient-to-r from-[#041d29] via-[#082f44] to-[#041d29]
          border-t-4 border-b-4 border-cyan-400
          py-4
          px-6 sm:px-12
          flex flex-col sm:flex-row items-center justify-between
          gap-4
          select-none
          "
        role="region"
        aria-label="A.I Enabled Learning Feature Highlight"
      >
        {/* Left Icon + Text */}
        <div className="flex items-center gap-3 text-cyan-400 flex-1 min-w-0">
          <Cpu className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 animate-[pulse_3s_ease-in-out_infinite]" />
          <p
            className="
              font-semibold
              uppercase
              tracking-widest
              text-lg sm:text-xl md:text-2xl
              whitespace-nowrap
              animate-subtleFlicker
            "
            style={{ animationDuration: "4s", animationIterationCount: "infinite" }}
          >
            A.I Enabled Learning
          </p>
        </div>

        {/* Center Text Content */}
        <p className="flex-1 text-cyan-100 text-center text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed">
          Empowering pharmacy students with cutting-edge AI tools and personalized learning to shape the future of healthcare.
        </p>

        {/* Right Icon only */}
        <div className="flex items-center gap-3 flex-1 justify-end min-w-0">
          <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
        </div>
      </section>
    </>
  );
}
