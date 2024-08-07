import React from 'react'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import { FlipWordsDemo } from './components/FlipWordsDemo'
import { motion } from 'framer-motion';
import Title from './components/Title';
import CustomerReview from './components/CustomerReview'
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyWhatsapp from './components/StickyWhatsapp';
import Navbar from './components/Navbar';
import { keyframes } from '@emotion/react';


const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Hero = () => {
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
          <Typography sx={{
            fontSize: ['2.4rem', '4.5rem',],
            fontFamily: "cursive",
            fontWeight: '600',
            color: '#fff',
            textAlign: 'center'
          }}>Maha's Lettering</Typography>

          <Typography sx={{ textAlign: 'center', fontSize: ['1rem', '1.4rem', '2rem'], fontWeight: 'bold', my: 1.5, px: 1, color: 'white', mb: '5rem', }}>Crafting is the art of turning ordinary objects into extraordinary things</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
            <Typography sx={{
              fontSize: ['1.5rem', '1.5rem', '2.5rem'],
              fontWeight: '600',
              color: 'white',
              bgcolor: 'transparent',
              textAlign: 'center',
              color: '#fff',
              display: "flex",
            }}>
              We Provide&nbsp;
            </Typography>
            <FlipWordsDemo />
          </Box>
        </Box>
      </Box>
      {/* <Button
        href="#next-section"
        sx={{
          animation: `${bounceAnimation} 2s infinite`,
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </Button> */}

      {/* Best Selling */}
      <Box sx={{ bgcolor: '#181818' }}>
        {/* <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Title>Best Selling</Title>
          </Box>
        </Box> */}
        {/* Our Work Section */}
        <section id='next-section'>
          <Box
            py={{ xs: 3, md: 5, }}
            sx={{
              zIndex: 21,
              display: "flex",
              width: "100%",
              alignItems: "center",
              height: ["auto", "auto",],
              flexDirection: ["column", "column",],
              justifyContent: "space-between",
              gap: [3, 5, 3],
              position: "relative",
            }}
          >
            <Title>Our Works</Title>
            <Box sx={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              height: ["130vw", "85vw", "85vw", "85vw", "85vw"],
            }}>
              < Box
                component={motion.div}
                animate={{ y: 15, }}
                transition={{
                  duration: 2, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ["58vw", '35vw'],
                  height: ['8rem', '10rem', '10rem', '25rem'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  bottom: ["35px", "0"],
                  left: ["-5%", "-8%"],
                  zIndex: "40"
                }}>
                <Box
                  component="img"
                  alt="dashboard"
                  src="/hearing-2.jpg"
                  sx={{
                    width: '100%',
                    height: ['8rem', '10rem', '10rem', '25rem'],
                    boxShadow: 2,
                    borderRadius: ".5rem",
                  }}
                />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: 15, }}
                transition={{
                  duration: 2, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ["58vw", '25vw'],
                  height: ['10rem', '10rem', '15rem', '25rem'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  bottom: ["35px", "0"],
                  left: ["-30%", "30%"],
                  zIndex: "20"
                }}>
                <Box
                  component="img"
                  alt="dashboard"
                  src="/hearing-1.jpg"
                  sx={{
                    width: '100%',
                    height: ['10rem', '15rem', '15rem', '25rem'],
                    boxShadow: 2,
                    borderRadius: ".5rem",
                  }}
                />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -40, }}
                transition={{
                  duration: 2, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['50vw', '45vw'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  top: ["50%"],
                  left: ["-10%"],
                  zIndex: "30"
                }}>
                <Box
                  component="img"
                  alt="dashboard"
                  src="/frame-3.jpg"
                  sx={{
                    width: '100%',
                    height: ['10rem', '15rem', '15rem', '25rem'],
                    boxShadow: 2,
                    borderRadius: ".5rem",
                  }}
                />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -50, }}
                transition={{
                  duration: 3, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['48vw', '35vw'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  top: ["5%", "10%"],
                  right: ["-20px"]
                }}>
                <img alt="project" src="/frame-2.jpg" width="100%" height="auto" style={{ boxShadow: 2, borderRadius: ".5rem", }} />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: 30, }}
                transition={{
                  duration: 2, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['50vw', '45vw'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  top: ["40%"],
                  right: ["20px"]
                }}>
                <img alt="home-needs" src="/neck.jpg" width="100%" style={{ boxShadow: 2, borderRadius: ".5rem" }} />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -30, }}
                transition={{
                  duration: 6, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['20vw', '15vw'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 5,
                  position: "absolute",
                  top: ["30%"],
                  zIndex: "10"
                }}>
                <img alt="eco-rich" src="/keychain-2.jpg" width="100%" height="auto" style={{ boxShadow: 2, borderRadius: ".5rem", }} />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -30, }}
                transition={{
                  duration: 6, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['20vw', '15vw'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 5,
                  position: "absolute",
                  top: ["30%"],
                  left: ["18%"],
                  zIndex: "29"
                }}>
                <img alt="eco-rich" src="/keychain-1.jpg" width="100%" height="auto" style={{ boxShadow: 2, borderRadius: ".5rem", }} />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -30, }}
                transition={{
                  duration: 3, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['55vw', '30vw'],
                  height: ['8rem', '10rem', '10rem', '25rem'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  top: ["10%"],
                  left: ["-6%", "-3%"],
                  zIndex: "20",
                }}>
                <Box
                  component="img"
                  alt="dashboard"
                  src="/bengel-2.jpg"
                  sx={{
                    width: '100%',
                    height: ['8rem', '10rem', '10rem', '25rem'],
                    boxShadow: 2,
                    borderRadius: ".5rem",
                  }}
                />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -30, }}
                transition={{
                  duration: 3, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['55vw', '30vw'],
                  height: ['8rem', '10rem', '10rem', '25rem'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  top: ["20%", "13%"],
                  left: ["40%", "32%"],
                  zIndex: "20",
                }}>
                <Box
                  component="img"
                  alt="dashboard"
                  src="/bengel-5.jpeg"
                  sx={{
                    width: '100%',
                    height: ['8rem', '10rem', '10rem', '25rem'],
                    boxShadow: 2,
                    borderRadius: ".5rem",
                  }}
                />
              </Box >
              < Box
                component={motion.div}
                animate={{ y: -30, }}
                transition={{
                  duration: 3, repeat: Infinity, repeatType: "reverse"
                }}
                sx={{
                  width: ['45vw', '35vw'],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  boxShadow: 6,
                  position: "absolute",
                  top: ["38%", "30%"],
                  left: ["45%", "33%"],
                  zIndex: "50",
                }}>
                <img alt="sarielkent" src="/frame.jpg" width="100%" height="auto" style={{ boxShadow: 2, borderRadius: ".5rem", }} />
              </Box >
            </Box>
          </Box >
        </section>
        {/* Booking Process */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
            <Title>Booking Process</Title>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src='/booking.png' style={{ width: '100%', height: 'fit' }} />
          </Box>
        </Box>
        {/* Customer Review Section */}
        <Box >
          <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
            <Title>Read our customers say</Title>
          </Box>
          <CustomerReview />
        </Box>
        {/* Faq Section */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Title>Frequently Asked Question</Title>
          </Box>
          <Box
            sx={{
              px: [2, 2, 3, 4],
              py: '2rem'
            }}
          >
            <Faq />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default Hero
