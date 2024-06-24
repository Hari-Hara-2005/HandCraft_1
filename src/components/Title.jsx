import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const textAni = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
};
function Title({ children, firstLetter }) {
    return (
        <>
            <Typography
                className="title-txt"
                component={motion.p}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: .9 }}
                transition={{ staggerChildren: 0.5 }}
                variants={textAni}
                sx={{
                    fontSize: ["2rem", "2.8rem", "2rem", "3rem", "3.5 rem"],
                    fontWeight: "800",
                    textAlign: 'center',
                    fontFamily: "'Work Sans', sans-serif !important",
                    lineHeight: "normal",
                    background: "linear-gradient(91.83deg, #fff 0%, #fff 100%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    width: "fit-content",
                }}
            >
                <Typography
                    sx={{
                        fontSize: ["3rem", "3.5rem", "4.4rem", "5rem", "9rem"],
                        fontWeight: "800",
                        display: "inline",
                        fontFamily: "'Work Sans', sans-serif !important",
                        lineHeight: "normal",
                    }}
                >
                    {firstLetter}
                </Typography>
                {children}
            </Typography>
        </>
    );
}

export default Title;
