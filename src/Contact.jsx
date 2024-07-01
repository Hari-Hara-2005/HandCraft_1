import React from 'react'
import StickyWhatsapp from './components/StickyWhatsapp'
import Navbar from './components/Navbar'
import { Box, Container, Paper, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import Footer from './components/Footer';
const Contact = () => {
    return (
        <>
            <Navbar />
            <StickyWhatsapp link={"https://wa.me/8220570301"} />
            {/* Hero Section */}
            <Box className="hero_bg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
                <video autoPlay muted loop>
                    <source src="/201736-916310642.mp4" type="video/mp4" />
                </video>
                <Box >
                    <Typography sx={{
                        fontSize: ['2.4rem', '4.5rem',],
                        fontFamily: "sans-serif",
                        fontWeight: '600',
                        color: '#fff',
                        textAlign: 'center'
                    }}>Contact Us</Typography>
                    <Typography sx={{ textAlign: 'center', fontSize: ['1rem', '1.4rem', '2.5rem'], fontWeight: 800, letterSpacing: 1, my: 1.5, px: 2, color: 'white', mb: '5rem', lineHeight: 1.5 }}>Explore the artistry of handmade creations at Maha's Lettering, where every piece is crafted with passion and precision to elevate your everyday moments.</Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#181818' }}>
                <Box sx={{ fontFamily: '"League Spartan", sans-serif' }}>
                    <Container sx={{ pt: { xs: 8, md: 18 } }}>
                        <Paper elevation={3} sx={{ mx: 'auto', maxWidth: 800, border: 4, borderColor: '#282828', borderRadius: 3 }}>
                            <Typography variant="h4" align="center" sx={{ py: 2, backgroundColor: '#282828', color: 'white', fontWeight: 'bold' }}>
                                Registered address
                            </Typography>
                            <Box sx={{ borderBottom: 2, borderColor: '#282828', mx: 4, py: 4 }}>
                                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                    Maha's Lettering
                                </Typography>
                                <Typography variant="body1" align="center" sx={{ mt: 2, lineHeight: 2 }}>
                                    X97F+92G, Chakrapani Sannathi Street,<br />
                                    Karna Kollai Agraharam, Valayapettai Agraharam,<br />
                                    Kumbakonam, Tamil Nadu 612001, India.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, pb: 4 }}>
                                <EmailIcon sx={{ color: '#282828', mr: 1 }} />
                                <Typography variant="body1" sx={{ fontWeight: 'medium', letterSpacing: 1 }}>
                                    maha050108@gmail.com
                                </Typography>
                            </Box>
                        </Paper>
                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Contact
