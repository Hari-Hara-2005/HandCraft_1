import React, { useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography, Grid, Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Title from '../components/Title';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const products = [
  {
    id: 1,
    category: 'Bangles',
    name: 'Radiant Stone Bangles',
    rating: 5,
    price: '₹800',
    image: '/bengel-6.jpeg',
    unitsSold: '50',
  },
  {
    id: 2,
    category: 'Bangles',
    name: 'Mystic Gemstone Bangles',
    rating: 4,
    price: '₹800',
    image: '/bengel-2.jpg',
    unitsSold: 45,
  },
  {
    id: 3,
    category: 'Bangles',
    name: 'Celestial Charm Bangles',
    rating: 4,
    price: '₹800',
    image: '/bengel-5.jpeg',
    unitsSold: 43,
  },
  {
    id: 4,
    category: 'Bangles',
    name: 'Regal Reflection Bangles',
    rating: 3,
    price: '₹800',
    image: '/bengel-1.jpg',
    unitsSold: 25,
  },
  {
    id: 5,
    category: 'Bangles',
    name: 'Drop + Sennheiser PC38X Gaming Headset',
    rating: 4,
    price: '₹800',
    image: '/bengel-7.jpeg',
    unitsSold: 20,
  },
  {
    id: 6,
    category: 'Bangles',
    name: 'Serenity Stone Bangles',
    rating: 4,
    price: '₹800',
    image: '/bengel-3.jpg',
    unitsSold: 20,
  },
  {
    id: 7,
    category: 'Bangles',
    name: 'Luminous Love Bangles',
    rating: 3,
    price: '₹800',
    image: '/bengel-8.jpg',
    unitsSold: 15,
  },
  {
    id: 8,
    category: 'Earrings',
    name: 'Divine Stone Jhumkas',
    rating: 5,
    price: '₹100',
    image: '/hearing-3.jpg',
    unitsSold: 45,
  },
  {
    id: 9,
    category: 'Earrings',
    name: 'Gleaming Grace Jhumkas',
    rating: 4,
    price: '₹100',
    image: '/hearing-2.jpg',
    unitsSold: 42,
  },
  {
    id: 10,
    category: 'Earrings',
    name: 'Opulent Stone Jhumkas',
    rating: 4,
    price: '₹100',
    image: '/hearing-1.jpg',
    unitsSold: 40,
  },
  {
    id: 11,
    category: 'Earrings',
    name: 'Luminous Stone Jhumkas',
    rating: 3,
    price: '₹100',
    image: '/hearing-4.jpg',
    unitsSold: 20,
  },
  {
    id: 12,
    category: 'Keychain',
    name: 'Alphabet Gem Keychain',
    rating: 5,
    price: '₹80',
    image: '/keychain-7.jpg',
    unitsSold: 55,
  },
  {
    id: 13,
    category: 'Keychain',
    name: 'Memorable Keychains',
    rating: 4,
    price: '₹100',
    image: '/keychain-2.jpg',
    unitsSold: 52,
  },
  {
    id: 14,
    category: 'Keychain',
    name: 'Initial Spark Keychain',
    rating: 4,
    price: '₹80',
    image: '/keychain-3.jpg',
    unitsSold: 50,
  },
  {
    id: 15,
    category: 'Keychain',
    name: 'Personalized Stone Keychain',
    rating: 3,
    price: '₹80',
    image: '/keychain-4.jpg',
    unitsSold: 40,
  },
  {
    id: 16,
    category: 'Keychain',
    name: 'Gemstone Initial Keychain',
    rating: 3,
    price: '₹80',
    image: '/keychain-5.jpg',
    unitsSold: 38,
  },
  {
    id: 17,
    category: 'Keychain',
    name: 'Letter Glow Keychain',
    rating: 3,
    price: '₹80',
    image: '/keychain-6.jpg',
    unitsSold: 35,
  },
  {
    id: 18,
    category: 'Keychain',
    name: 'Mystic Letter Keychain',
    rating: 3,
    price: '₹80',
    image: '/keychain-1.jpg',
    unitsSold: 30,
  },
  {
    id: 19,
    category: 'Photo',
    name: 'Picture Perfect Keychain',
    rating: 5,
    price: '₹180',
    image: '/photo-2.jpg',
    unitsSold: 30,
  },
  {
    id: 20,
    category: 'Photo',
    name: 'Memorable Moment Keychain',
    rating: 4,
    price: '₹180',
    image: '/photo-4.jpg',
    unitsSold: 27,
  },
  {
    id: 21,
    category: 'Photo',
    name: 'Capture Stone Keychain',
    rating: 4,
    price: '₹180',
    image: '/photo-3.jpg',
    unitsSold: 25,
  },
  {
    id: 22,
    category: 'Photo',
    name: 'Personalized Photo Charm',
    rating: 3,
    price: '₹180',
    image: '/photo-1.jpg',
    unitsSold: 15,
  },
  {
    id: 23,
    category: 'Photoframe',
    name: 'Timeless Treasures Frames',
    rating: 5,
    price: '₹1000',
    image: '/photofarme.png',
    unitsSold: 20,
  },
  {
    id: 24,
    category: 'Photoframe',
    name: "Nature's Embrance Frames",
    rating: 4,
    price: '₹800',
    image: '/photoframe-1.png',
    unitsSold: 25,
  },
  {
    id: 25,
    category: 'Photoframe',
    name: 'Personalized Photo Charm',
    rating: 4,
    price: '₹500',
    image: '/photoframe-2.png',
    unitsSold: 15,
  },
  {
    id: 26,
    category: 'Photoframe',
    name: 'FrameCraft Creations',
    rating: 4,
    price: '₹300',
    image: '/photoframe-3.png',
    unitsSold: 20,
  },
  {
    id: 27,
    category: 'Photoframe',
    name: 'Momentous Frames',
    rating: 4,
    price: '₹850',
    image: '/frame.jpg',
    unitsSold: 30,
  },
  {
    id: 28,
    category: 'Photoframe',
    name: 'Vintage Bliss Frames',
    rating: 4,
    price: '₹500',
    image: '/frame-2.jpg',
    unitsSold: 35,
  },
  {
    id: 29,
    category: 'Explosionbox',
    name: 'Personalized Explosion Box',
    rating: 4,
    price: '₹800',
    image: '/box-1.jpg',
    unitsSold: 25,
  },
  {
    id: 30,
    category: 'Explosionbox',
    name: 'Capture Stone Explosion Box',
    rating: 4,
    price: '₹800',
    image: '/box-2.jpg',
    unitsSold: 22,
  },
  {
    id: 31,
    category: 'Explosionbox',
    name: 'Memorable Moment Explosion Box',
    rating: 4,
    price: '₹500',
    image: '/box-3.jpg',
    unitsSold: 30,
  },
];

const StyledCard = styled(Card)({
  backgroundColor: '#282828', // Adjust for dark background
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
  },
  borderRadius: 16,
  position: 'relative'
});

const StyledMedia = styled(CardMedia)`
  height: 200px; /* Default height for mobile devices */

  @media (min-width: 600px) {
    /* Adjust height for larger devices (like tablets and desktops) */
    height: 400px;
  }

  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const IconContainer = styled(Box)({
  position: 'absolute',
  top: 8,
  right: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const RatingStars = ({ rating, size }) => (
  <Box display="flex" alignItems="center" sx={{ py: 1.5 }}>
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        sx={{ color: index < rating ? '#FFD700' : 'rgba(255, 215, 0, 0.6)', fontSize: size }}
      />
    ))}
  </Box>
);

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  const handleShoppingClick = () => {
    window.open("https://wa.me/8220570301", "_blank");
  };

  return (
    <StyledCard>
      <StyledMedia component="img" image={product.image} alt={product.name} />
      <IconContainer>
        <IconButton aria-label="add to favorites" sx={{ color: liked ? 'red' : '#fff' }} onClick={handleLikeClick}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="save" sx={{ color: bookmarked ? 'lightgray' : '#fff' }} onClick={handleBookmarkClick}>
          <BookmarkIcon />
        </IconButton>
        <IconButton aria-label="add to cart" sx={{ color: '#fff' }} onClick={handleShoppingClick}>
          <ShoppingCartIcon />
        </IconButton>
      </IconContainer>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ textAlign: 'start' }} >
          {product.name}
        </Typography>
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ py: 1.5 }}>
          <Box>
            <Typography variant="body2" color="#fff" sx={{ textAlign: 'start' }}>
              {product.price}
            </Typography>
            <RatingStars rating={product.rating} size="1.2rem" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" color="gray">
              {product.unitsSold} units sold
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

const ProductGrid = () => {

  const [visibleBanglesCount, setVisibleBanglesCount] = useState(3);
  const [visibleEarringsCount, setVisibleEarringsCount] = useState(3);
  const [visibleKeychainCount, setVisibleKeychainCount] = useState(3);
  const [visiblePhotoCount, setVisiblePhotoCount] = useState(3);
  const [visiblePhotoframeCount, setVisiblePhotoframeCount] = useState(3);
  const handleShowMoreBangles = () => {
    setVisibleBanglesCount((prevCount) => prevCount + 3);
  };

  const handleShowLessBangles = () => {
    setVisibleBanglesCount((prevCount) => (prevCount - 3 > 3 ? prevCount - 3 : 3));
  };

  const handleShowMoreEarrings = () => {
    setVisibleEarringsCount((prevCount) => prevCount + 3);
  };

  const handleShowLessEarrings = () => {
    setVisibleEarringsCount((prevCount) => (prevCount - 3 > 3 ? prevCount - 3 : 3));
  };

  const handleShowMoreKeychain = () => {
    setVisibleKeychainCount((prevCount) => prevCount + 3);
  };

  const handleShowLessKeychain = () => {
    setVisibleKeychainCount((prevCount) => (prevCount - 3 > 3 ? prevCount - 3 : 3));
  };

  const handleShowMorePhoto = () => {
    setVisiblePhotoCount((prevCount) => prevCount + 3);
  };

  const handleShowLessPhoto = () => {
    setVisiblePhotoCount((prevCount) => (prevCount - 3 > 3 ? prevCount - 3 : 3));
  };


  const handleShowMorePhotoframe = () => {
    setVisiblePhotoframeCount((prevCount) => prevCount + 3);
  };

  const handleShowLessPhotoframe = () => {
    setVisiblePhotoframeCount((prevCount) => (prevCount - 3 > 3 ? prevCount - 3 : 3));
  };
  const bangles = products.filter(product => product.category === 'Bangles');
  const earrings = products.filter(product => product.category === 'Earrings');
  const keychain = products.filter(product => product.category === 'Keychain');
  const Photo = products.filter(product => product.category === 'Photo');
  const Photoframe = products.filter(product => product.category === 'Photoframe');
  const Explosionbox = products.filter(product => product.category === 'Explosionbox');
  return (
    <Box sx={{ textAlign: 'center', px: [2, 3, 0] }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: [4, 5, 0] }}>
        <Title>Bangles</Title>
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {bangles.slice(0, visibleBanglesCount).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {visibleBanglesCount > 4 && (
        <Button variant="outlined" startIcon={<ArrowCircleLeftIcon />} sx={{
          my: 4,
          mx: 5,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowLessBangles} >
          Show Less
        </Button>
      )}
      {visibleBanglesCount < bangles.length && (
        <Button variant="outlined" endIcon={<ArrowCircleRightIcon />} sx={{
          my: 4,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowMoreBangles}>
          Show More
        </Button>
      )}


      <Box sx={{ display: 'flex', justifyContent: 'center', mb: [3, 5, 0] }}>
        <Title>Jhumukas</Title>
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {earrings.slice(0, visibleEarringsCount).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {visibleEarringsCount > 3 && (
        <Button variant="outlined" startIcon={<ArrowCircleLeftIcon />} sx={{
          my: 4,
          mx: 5,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowLessEarrings}>
          Show Less
        </Button>
      )}
      {visibleEarringsCount < earrings.length && (
        <Button variant="outlined" endIcon={<ArrowCircleRightIcon />} sx={{
          my: 4,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowMoreEarrings}>
          Show More
        </Button>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: [3, 5, 0] }}>
        <Title>Letter Keychains </Title>
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {keychain.slice(0, visibleKeychainCount).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {visibleKeychainCount > 3 && (
        <Button variant="outlined" startIcon={<ArrowCircleLeftIcon />} sx={{
          my: 4,
          mx: 5,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowLessKeychain}>
          Show Less
        </Button>
      )}
      {visibleKeychainCount < keychain.length && (
        <Button variant="outlined" endIcon={<ArrowCircleRightIcon />} sx={{
          my: 4,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowMoreKeychain}>
          Show More
        </Button>
      )}


      <Box sx={{ display: 'flex', justifyContent: 'center', mb: [3, 5, 0] }}>
        <Title>Photo Keychains</Title>
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {Photo.slice(0, visiblePhotoCount).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {visiblePhotoCount > 3 && (
        <Button variant="outlined" startIcon={<ArrowCircleLeftIcon />} sx={{
          my: 4,
          mx: 5,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowLessPhoto} >
          Show Less
        </Button>
      )}
      {visiblePhotoCount < Photo.length && (
        <Button variant="outlined" endIcon={<ArrowCircleRightIcon />} sx={{
          my: 4,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowMorePhoto}>
          Show More
        </Button>
      )}


      <Box sx={{ display: 'flex', justifyContent: 'center', mb: [3, 5, 0] }}>
        <Title>Photo Frame</Title>
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {Photoframe.slice(0, visiblePhotoframeCount).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {visiblePhotoframeCount > 3 && (
        <Button variant="outlined" startIcon={<ArrowCircleLeftIcon />} sx={{
          my: 4,
          mx: 5,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowLessPhotoframe} >
          Show Less
        </Button>
      )}
      {visiblePhotoframeCount < Photo.length && (
        <Button variant="outlined" endIcon={<ArrowCircleRightIcon />} sx={{
          my: 4,
          textTransform: 'none',
          fontWeight: 800,
          color: '#fff',
          background: '#282828',
          borderColor: '#fff', // Set the outline color to white
          '&:hover': {
            borderColor: '#fff', // Ensure the outline remains white on hover
          },
        }} onClick={handleShowMorePhotoframe}>
          Show More
        </Button>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: [3, 5, 0] }}>
        <Title>Explosion Box</Title>
      </Box>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {Explosionbox.slice().map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
