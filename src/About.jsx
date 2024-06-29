import { Box, Typography } from '@mui/material'
import React from 'react'
import StickyWhatsapp from './components/StickyWhatsapp'
import Navbar from './components/Navbar'
import { TextGenerateEffectDemo } from './components/TextGenerateEffectDemo'
import Footer from './components/Footer'
const About = () => {
    return (
        <>
            <Navbar />
            <StickyWhatsapp link={"https://wa.me/8220570301"} />
            {/* Hero Section */}
            <Box sx={{ display: 'flex', bgcolor: '#181818', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
                <Box >
                    <Typography sx={{
                        fontSize: ['2.4rem', '4.5rem',],
                        fontFamily: "sans-serif",
                        fontWeight: '600',
                        color: '#fff',
                        textAlign: 'center'
                    }}>About</Typography>
                    <Typography sx={{ textAlign: 'center', fontSize: ['1rem', '1.4rem'], fontWeight: 'bold', my: 1.5, px: 1, color: 'white', mb: '5rem' }}>Crafting is the art of turning ordinary objects into extraordinary things</Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#181818' }}>
                <Box sx={{ px: [0.9, 2, 10], py: [2, 2, 4], color: 'white', display: 'flex', flexDirection: ["column-reverse", "column-reverse", "row"], }}>
                    <Box sx={{ fontSize: ['1.3rem', '1.5rem', '1.8rem'], fontWeight: 'bold', lineHeight: 1.6, width: ["100%", "100%", '80%'], textAlign: 'justify' }}>
                        <Box>
                            <img src="/double.svg" alt="quotes" className='w-fit h-fit' />
                        </Box>
                        <Box sx={{ px: [2, 2, 5] }}>
                            <TextGenerateEffectDemo />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mt: ['0.5rem', '0.5rem', '-1rem'], mr: 1 }}>
                            <img src="/double.svg" alt="quotes" className='w-fit h-fit' style={{ rotate: '180deg', }} />
                        </Box>
                    </Box>
                    <Box sx={{ width: ['100%', '100%', '30%'] }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: ['1rem', '1rem', '5rem'] }}>
                            <img src="/person.webp" alt="customer" style={{ width: '10rem', height: '10rem', borderRadius: '100%' }} />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: ['1rem', '1.3rem'], letterSpacing: 1, mt: 1.5 }}>Name</Typography></Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: ['center', 'space-around', 'space-between'], width: ['100%', '100%', '60%'], color: 'white', px: [3, 0, 15], flexDirection: ['column', 'row'] }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: ['1.5rem', '1.5rem'], letterSpacing: 1, }}>Products:</Typography>
                        <Typography sx={{ fontWeight: '600', fontSize: ['1.3rem', '1.3rem'], mt: 1, letterSpacing: 1, }}>50+</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: ['1.5rem', '1.5rem'], mt: [2, 0], letterSpacing: 1, }}>Selling Products:</Typography>
                        <Typography sx={{ fontWeight: '600', fontSize: ['1.3rem', '1.3rem'], mt: 1, letterSpacing: 1, }}>300+</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: ['1.5rem', '1.5rem'], mt: [2, 0], letterSpacing: 1, }}>Happy Customers:</Typography>
                        <Typography sx={{ fontWeight: '600', fontSize: ['1.3rem', '1.3rem'], mt: 1, letterSpacing: 1, }}>200+</Typography>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default About
