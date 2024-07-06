import { Box, Typography } from '@mui/material';
import React from 'react';
import StickyWhatsapp from './components/StickyWhatsapp';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import ProductGrid from './components/Product';
import Footer from './components/Footer';
const ProductView = () => {
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
                        Product
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
                        Welcome to Maha's Lettering! Discover personalized gifts and unique decor crafted with creativity and care. Find the perfect piece that inspires and delights.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#181818' }}>
                <ProductGrid />
                <Footer />
            </Box>
        </>
    )
}

export default ProductView
