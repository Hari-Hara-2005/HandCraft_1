import React, { useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography, Grid, Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  {
    id: 1,
    name: 'Massdrop x Sennheiser HD 6XX Headphones',
    rating: 5,
    price: '$220',
    image: 'image-url-1.jpg',
    unitsSold: 7479,
    daysLeft: 27,
  },
  {
    id: 2,
    name: 'Drop + Sennheiser PC38X Gaming Headset',
    rating: 4,
    price: '$169',
    image: 'image-url-2.jpg',
    unitsSold: 6898,
    daysLeft: 24,
  },
  {
    id: 3,
    name: 'Massdrop x Sennheiser HD 58X Jubilee Headphones',
    rating: 4,
    price: '$170',
    image: 'image-url-3.jpg',
    unitsSold: 6347,
    daysLeft: 21,
  },
  {
    id: 4,
    name: 'Massdrop x Sennheiser HD 6XX Headphones',
    rating: 5,
    price: '$220',
    image: 'image-url-1.jpg',
    unitsSold: 7479,
    daysLeft: 27,
  },
  {
    id: 5,
    name: 'Drop + Sennheiser PC38X Gaming Headset',
    rating: 4,
    price: '$169',
    image: 'image-url-2.jpg',
    unitsSold: 6898,
    daysLeft: 24,
  },
  {
    id: 6,
    name: 'Massdrop x Sennheiser HD 58X Jubilee Headphones',
    rating: 4,
    price: '$170',
    image: 'image-url-3.jpg',
    unitsSold: 6347,
    daysLeft: 21,
  },
  {
    id: 7,
    name: 'Massdrop x Sennheiser HD 6XX Headphones',
    rating: 5,
    price: '$220',
    image: 'image-url-1.jpg',
    unitsSold: 7479,
    daysLeft: 27,
  },
  {
    id: 8,
    name: 'Drop + Sennheiser PC38X Gaming Headset',
    rating: 4,
    price: '$169',
    image: 'image-url-2.jpg',
    unitsSold: 6898,
    daysLeft: 24,
  },
  {
    id: 9,
    name: 'Massdrop x Sennheiser HD 58X Jubilee Headphones',
    rating: 4,
    price: '$170',
    image: 'image-url-3.jpg',
    unitsSold: 6347,
    daysLeft: 21,
  }
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

const StyledMedia = styled(CardMedia)({
  height: 200,
});

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
        <Typography variant="h6" component="div" sx={{textAlign:'start'}} >
          {product.name}
        </Typography>
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ py: 1.5 }}>
          <Box>
            <Typography variant="body2" color="#fff" sx={{textAlign:'start'}}>
              {product.price}
            </Typography>
            <RatingStars rating={product.rating} size="1.2rem" />
          </Box>
          <Box >
            <Typography variant="body2" color="gray">
              {product.unitsSold} units sold
            </Typography>
            <Typography variant="body2" color="gray" sx={{ py: 1 }} >
              {product.daysLeft} days left
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

const ProductGrid = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {products.slice(0, visibleCount).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3.5}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {visibleCount < products.length && (
        <Button variant="contained" sx={{ mt: 4 }} onClick={handleShowMore}>
          Show More
        </Button>
      )}
    </Box>
  );
};

export default ProductGrid;
