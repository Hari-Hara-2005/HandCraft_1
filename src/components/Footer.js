import { Box, Fab, Grid, Typography } from '@mui/material';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box data-aos="fade-up"
            data-aos-duration="3000" sx={{ mt: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF6B6B" fillOpacity="1" d="M0,32L80,53.3C160,75,320,117,480,112C640,107,800,53,960,42.7C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            <Box sx={{ backgroundColor: '#FF6B6B', mt: { xs: -2, sm: -8, md: -16 }, pb: 2 }}>
                <Box sx={{ pt: 0, mx: 4 }}>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: '500', color: 'white', letterSpacing: 1 }}>RED PANDA</Typography>
                    <Typography sx={{ fontSize: '10px', fontFamily: 'sans-serif', fontWeight: '500', color: 'white', letterSpacing: 7 }}>VACATIONS</Typography>
                </Box>

                <Box sx={{ mx: 4, mt: 4 }}>
                    <Grid container spacing={6} justifyContent={{ xs: 'flex-start', md: 'center' }}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: '500', color: 'white', letterSpacing: 1 }}>
                                    Address
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', mt: 2, letterSpacing: 1 }}>
                                    No-10, Third Floor, 2nd Main Rd,
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Balaji Nagar, Ekkatuthangal,
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Chennai, Tamil Nadu 600032, India.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: '500', color: 'white', letterSpacing: 1 }}>
                                    Contact Us
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', mt: 2, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <MailIcon />contact@redpandavacations.com
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', mt: 0.5, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <PhoneIcon />96298 79633
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: '500', color: 'white', letterSpacing: 1 }}>
                                    Overview
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1, mt: 2 }}>
                                    About
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Customer-Support
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Cancellation-and-refund-policy
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Policy
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Services
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', color: 'white', letterSpacing: 1 }}>
                                    Terms-condition
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: '500', color: 'white', letterSpacing: 1 }}>
                                    Follow Us
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Fab component='a'
                                        href='https://wa.me/916369842254' sx={{ backgroundColor: 'white', mx: 0.5, color: '#FF6B6B' }}>
                                        <WhatsAppIcon />
                                    </Fab>
                                    <Fab component='a'
                                        href='https://www.instagram.com/chan_dru472?igsh=Z2UxMmR2M3Bib3U=' sx={{ backgroundColor: 'white', mx: 0.5, color: '#FF6B6B' }}>
                                        <InstagramIcon />
                                    </Fab>
                                    <Fab sx={{ backgroundColor: 'white', mx: 0.5, color: '#FF6B6B' }}>
                                        <FacebookIcon />
                                    </Fab>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', fontWeight: '600', color: 'white', letterSpacing: 1, mt: 6, textAlign: 'center' }}>
                        Red Panda vacations © 2024 | Developed By Chandru
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;