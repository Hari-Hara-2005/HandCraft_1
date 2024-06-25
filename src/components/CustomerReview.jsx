import { reviews } from "../utils/data";
import { keyframes } from "@emotion/react";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const CustomerReview = () => {
    const scrollX = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  `;
    const duplicateClients = [...reviews, ...reviews];
    return (
        <Box sx={{
            display: "flex",
            userSelect: "none",
            width: "100%",
            overflow: "hidden",
            maskImage:
                "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
        }}>
            <Box sx={{
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                justifyContent: "space-around",
                whiteSpace: "nowrap",
                gap: '2rem',
                justifyContent: 'center',
                py: '4rem',
                animation: [
                    `${scrollX} 15s linear infinite`,
                    `${scrollX} 18s linear infinite`,
                    `${scrollX} 30s linear infinite`,
                ],
            }}>
                {duplicateClients.map((review, index) => (
                    <Box key={index} sx={{
                        width: ['20rem', '20rem', '35rem',],
                        bgcolor: 'white',
                        borderRadius: '24px',
                        px: ['1rem', '3rem'],
                        py: '2rem',
                        boxShadow: 3
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: ['0rem', '0rem', '1rem'] }}>
                            <img src={review.img} alt="customer" style={{ width: '5rem', height: '5rem', borderRadius: '100%' }} />
                        </Box>
                        <Box sx={{ textAlign: 'center', mt: ['5px', '3px', '0px'] }}>
                            <Typography>{review.name}</Typography>
                        </Box>
                        <Box>
                            <img src="/double-quotes.svg" alt="quotes" className='w-fit h-fit ' />
                        </Box>
                        <Typography sx={{ mt: ['0.5rem'], ml: 0.5, textWrap: 'wrap' }}>
                            {review.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default CustomerReview
