import React from "react";
import { FlipWords } from "./ui/flip-words.tsx";
import { Box, Typography } from "@mui/material";

export function FlipWordsDemo() {
    const words = ["Beautiful", "Modern", "Letters Frame", "Letter keychain", "MemorableFrame", "Greeting cards", "Explosion box", "Wall hanging ", "Silk thread jewellery's", "Mini album"];

    return (
        <Typography sx={{
            fontSize: ['1.5rem', '1.5rem', '2.5rem'],
            fontWeight: '600',
            color: 'white',
            bgcolor: 'transparent',
            textAlign: 'center',
            display: 'flex'
        }}>
            We Provide&nbsp;
            <FlipWords words={words} />
        </Typography>
    );
}
