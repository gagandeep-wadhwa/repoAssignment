import React from 'react';
import RecipesList from '../modules/recipes/RecipesList';
import { Container } from '../components/Grid';
import Box from '../components/Box';

const Recipes = () => {
  return (
    <Container>
      <Box textAlign="center">
        <h1>Starred Repository</h1>
      </Box>
      <RecipesList />
    </Container>
  );
};

export default Recipes;
