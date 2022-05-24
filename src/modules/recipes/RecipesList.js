import React from 'react';

import { Row, Col } from '../../components/Grid';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import RecipeCard from './RecipeCard';
import useGithubRepoFetch from '../../hooks/useGithubRepoFetch';

const Recipes = () => {
  // This state stores the array of recipes with the changes performed by the customer.
  const [recipes, setRecipes] = React.useState([]);
  const { data, loading } = useGithubRepoFetch();

  // add/remove recipe, feel free to remove or rename these these variables and values.
  const handleAddRecipe = React.useCallback( (recipeId) => {
    const updatedRecipes = recipes.map((el) =>
      el.id === recipeId ? Object.assign({}, el, { selected: el['selected'] + 1 }) : el
    );
    setRecipes(updatedRecipes);
  },[recipes])
  const handleRemoveRecipe = (recipeId) => {
    const updatedRecipes = recipes.map((el) =>
      el.id === recipeId
        ? Object.assign({}, el, {
            selected: el['selected'] > 0 ? el['selected'] - 1 : el['selected'],
          })
        : el
    );
    setRecipes(updatedRecipes);
  };

  // min/max recipe boundaries, feel free to remove or rename these variables and values.
  const totalSelected =  1
  //React.useMemo(recipes.reduce((total, recipe) => (total += recipe.selected ?? 0), 0),[recipes]);


  const minRecipesSelected = totalSelected >= data.min ?? 0;
  const maxRecipesSelected = totalSelected >= data.max;

  React.useEffect(() => {
    const items = data;
    console.log("in recipes list"+items)
    if (items) {
      setRecipes(items);
    }
  }, [setRecipes, data]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>{data.headline}</h3>
        </Col>
      </Row>
      <Row>
        {recipes.map((recipe) => (
          <Col sm={6} md={6} xl={4} key={recipe.id}>
            <Box mb="lg">
              <RecipeCard
                {...recipe}
                // if recepie selectionLimit is null then use box max
                selectionLimit={recipe.selectionLimit ?? data.max}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                minRecipesSelected={minRecipesSelected}
                maxRecipesSelected={maxRecipesSelected}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
