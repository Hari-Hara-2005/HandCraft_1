"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Maha's",
        },
        {
            text: "Lettering",
        },
    ];
    return (
      <>
            <TypewriterEffectSmooth words={words} />
          </>
    );
}
