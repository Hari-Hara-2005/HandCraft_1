import { Box, Typography } from '@mui/material';
import React from 'react';
import StickyWhatsapp from './components/StickyWhatsapp';
import Navbar from './components/Navbar';
import { TextGenerateEffectDemo } from './components/TextGenerateEffectDemo';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
const About = () => {
    const textAni = {
        offscreen: { y: 20, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
        },
    };

    return (
        <>
            <Navbar />
            <StickyWhatsapp link={"https://wa.me/8220570301"} />
            {/* Hero Section */}
            <Box className="hero_bg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
                <video autoPlay muted loop>
                    <source src="/201736-916310642.mp4" type="video/mp4" />
                </video>
                <Box>
                    <Typography
                        component={motion.p}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ staggerChildren: 0.5 }}
                        variants={textAni}
                        sx={{
                            fontSize: ['2.4rem', '4.5rem'],
                            fontFamily: "sans-serif",
                            fontWeight: '600',
                            color: '#fff',
                            textAlign: 'center'
                        }}
                    >
                        About
                    </Typography>
                    <Typography
                        component={motion.p}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ staggerChildren: 0.5 }}
                        variants={textAni}
                        sx={{
                            textAlign: 'center',
                            fontSize: ['1rem', '1.4rem', '2.5rem'],
                            fontWeight: 800,
                            letterSpacing: 1,
                            my: 1.5,
                            px: 2,
                            color: 'white',
                            mb: '5rem',
                            lineHeight: 1.5
                        }}
                    >
                        Welcome to Maha's Lettering, where every creation tells a story through craftsmanship and creativity. Discover personalized gifts and unique decor that inspire and delight.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#181818' }}>
                <Box sx={{ px: [0.9, 2, 10], py: [2, 2, 4], color: 'white', display: 'flex', flexDirection: ["column-reverse", "column-reverse", "row"] }}>
                    <Box
                        component={motion.p}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ staggerChildren: 0.5 }}
                        variants={textAni}
                        sx={{
                            fontSize: ['1.3rem', '1.5rem', '1.8rem'],
                            fontWeight: 'bold',
                            lineHeight: 1.6,
                            width: ["100%", "100%", '80%'],
                            textAlign: 'justify'
                        }}
                    >
                        <Box>
                            <img src="/double.svg" alt="quotes" className='w-fit h-fit' />
                        </Box>
                        <Box sx={{ px: [2, 2, 5] }}>
                            <TextGenerateEffectDemo />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mt: ['0.5rem', '0.5rem', '-1rem'], mr: 1 }}>
                            <img src="/double.svg" alt="quotes" className='w-fit h-fit' style={{ rotate: '180deg' }} />
                        </Box>
                    </Box>
                    <Box sx={{ width: ['100%', '100%', '30%'] }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: ['1rem', '1rem', '5rem'] }}>
                            <img src="/person.webp" alt="customer" style={{ width: '10rem', height: '10rem', borderRadius: '100%' }} />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: ['1rem', '1.3rem'], letterSpacing: 1, mt: 1.5 }}>Mahalashmi</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: ['center', 'space-around', 'space-between'],
                        width: ['0%', '100%', '60%'],
                        color: 'white',
                        px: [3, 0, 15],
                        flexDirection: ['column', 'row']
                    }}
                >
                    {[
                        { end: 50, label: 'Products' },
                        { end: 300, label: 'Selling Products' },
                        { end: 200, label: 'Happy Customers' }
                    ].map((item, index) => (
                        <Box key={index}>
                            <Typography
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                sx={{ fontWeight: '600', fontSize: ['1.5rem', '2rem'], mt: 1, letterSpacing: 1 }}
                            >
                                <CountUp start={0} end={item.end} duration={20} startOnScreen={true} />+
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: ['1.3rem', '1.3rem'], letterSpacing: 1 }}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box
                    component={motion.p}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{ staggerChildren: 0.5 }}
                    variants={textAni}
                    sx={{ pt: [4, 4, 10], }}>
                    <Typography sx={{
                        fontSize: ['1.8rem', '2rem', '2.5rem'],
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#fff',
                        letterSpacing: 1.5
                    }}>About craft</Typography>
                    <Box
                        component={motion.p}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ staggerChildren: 0.5 }}
                        variants={textAni}
                        sx={{ px: [0.9, 2, 10], mt: -5 }}
                    >
                        <Box>
                            <img src="/double.svg" alt="quotes" className='w-fit h-fit' />
                        </Box>
                        <Box sx={{ px: [2, 2, 5] }}>
                            <Typography sx={{
                                fontSize: ['1.3rem', '1.5rem', '1.8rem'],
                                fontWeight: 'bold',
                                lineHeight: 1.6,
                                color: '#fff',
                                textAlign: 'justify'
                            }}>Arts and crafts are a great tool for improving mental health. This applies especially to children, as it provides an outlet for them to express their emotions, have fun and develop a sense of mindfulness.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mt: ['0.5rem', '0.5rem', '-1rem'], mr: 1 }}>
                            <img src="/double.svg" alt="quotes" className='w-fit h-fit' style={{ rotate: '180deg' }} />
                        </Box>
                    </Box>
                </Box>

                <Footer />
            </Box >
        </>
    );
}

export default About;
