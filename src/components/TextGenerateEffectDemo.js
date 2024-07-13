"use client";
import { TextGenerateEffect } from ".//ui/text-generate-effect.tsx";

const words = `Hi there! I'm Maha, a passionate creator of handmade treasures that blend artistry with soul. From vibrant bangles that shimmer with personality to elegant earrings that whisper tales of tradition, each piece I craft tells a story. My journey began in the quiet corners of my home, where I found solace in shaping raw materials into expressions of beauty.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
