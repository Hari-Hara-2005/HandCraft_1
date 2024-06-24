import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
export default function Faq() {
    const faqs = [
        {
            que: "Crafting is the art of turning ordinary objects into extraordinary things",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non ipsa aspernatur ration"
        },
        {
            que: "Crafting is the art of turning ordinary objects into extraordinary things",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non ipsa aspernatur ration"
        },
        {
            que: "Crafting is the art of turning ordinary objects into extraordinary things",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non ipsa aspernatur ration"
        },
    ];
    const [currentFaq, setCurrentFaq] = React.useState(faqs);
    const [expand, setExpand] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpand = () => {
        if (expand) {
            setCurrentFaq(faqs.slice(0, 7));
            setExpand(false);
        } else {
            setCurrentFaq(faqs);
            setExpand(true);
        }
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    "& .MuiPaper-root.MuiAccordion-root": {
                        boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
                        borderTop: "none",
                        borderRadius: '.4rem',
                        p: 1,
                        bgcolor: '#212121',
                        color: '#fff'
                    },
                    "& .MuiPaper-root.MuiAccordion-root.Mui-expanded": {
                        boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
                        borderTop: "none",
                        borderRadius: '.4rem',
                        background: "linear-gradient(91.83deg,#212121 0%, #212121  100%)",
                        color: "#fff",
                        p: 1
                    },
                    "& .MuiPaper-root.MuiAccordion-root:before": {
                        height: 0,
                    },
                    "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
                        color: "#fff",
                    },
                    "& .MuiCollapse-root": {
                        color: "#fff",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        background: "transparent",
                        color: "#fff",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                        background: "transparent",
                        color: "#fff",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                {currentFaq.map((i, k) => (
                    <Accordion key={k} expanded={expanded === k} onChange={handleChange(k)}>
                        <AccordionSummary
                            expandIcon={expanded === k ? <CancelIcon /> : <AddCircleIcon />}
                            aria-controls={`panel1a-content-${k}`}
                            id={`panel1a-header-${k}`}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: "1rem", xl: "1.2rem" },
                                    fontWeight: 400,
                                }}
                            >
                                {i.que}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: "1rem", xl: "1.2rem" },
                                    fontWeight: 400,
                                }}
                            >
                                {i.ans}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </>
    );
}
