import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Button from '../../components/Button';
import IconMinusCircle from '../../icons/IconMinusCircle';
import IconPlusCircle from '../../icons/IconPlusCircle';
const SelectionButton = styled.button`
  ${css({
    outline: 'none',
    color: 'white',
    padding: 'sm',
    cursor: 'pointer',
    backgroundColor: 'primary_600',
    border: 'none',
    ':hover:enabled': {
      backgroundColor: 'primary_700',
    },
    ':active:enabled': {
      backgroundColor: 'primary_800',
    },
  })}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const RecipeCard = ({
  handleAddRecipe,
  handleRemoveRecipe,
  git_url,
  id,
  description,
  maxRecipesSelected,
  minRecipesSelected,
  name,
  selected,
  selectionLimit,
  yields,
}) => (
  <Box
    borderWidth={selected ? 'md' : null}
    borderStyle={selected ? 'solid' : null}
    borderColor={selected ? 'primary_600' : null}
    m={selected ? '-2px' : null}
    borderRadius="md"
    boxShadow="lg">
    <Box p="xs" height="120px">
      <Text fontWeight="bold" fontFamily="primary" fontSize="md">
        {name}
      </Text>
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
        {git_url}
      </Text>
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
        {description}
      </Text>
    </Box>
    {true ? (
       <IconMinusCircle />
    ) : (
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
      Selected
    </Text>
    )}
  </Box>
);

const SelectedRecipeFooter = ({
  id,
  selected,
  selectionLimit,
  yields,
  maxRecipesSelected,
  handleAddRecipe,
  handleRemoveRecipe,
}) => {
  const disabled = maxRecipesSelected || selected >= selectionLimit;
  return (
    <Flex backgroundColor="primary_600" justifyContent="space-between" alignItems="center">
      <SelectionButton
        onClick={() => handleRemoveRecipe(id)}
        title="Decrease quantity"
        data-test="btn-decrease-quantity">
        <IconMinusCircle />
      </SelectionButton>
      <Box color="white">
        <Text textAlign="center" fontWeight="bold" fontFamily="secondary" fontSize="md">
          {selected} in your box
        </Text>
        <Text textAlign="center" fontFamily="secondary" fontSize="sm">
          ({selected * yields} servings)
        </Text>
      </Box>
      <SelectionButton
        onClick={() => handleAddRecipe(id)}
        title="Increase quantity"
        disabled={disabled}
        data-test="btn-increase-quantity">
        <IconPlusCircle />
      </SelectionButton>
    </Flex>
  );
};

const UnselectedRecipeFooter = ({
  extraCharge,
  id,
  minRecipesSelected,
  maxRecipesSelected,
  handleAddRecipe,
}) => (
  <Flex p="xs">
    
    <Box flex="50%">
      <Button
        onClick={() => handleAddRecipe(id)}
        variant="secondary"
        width="100%"
        p="0"
        disabled={maxRecipesSelected}
        data-test="btn-add">
        {minRecipesSelected ? 'Add extra meal' : 'Add'}
      </Button>
    </Box>
  </Flex>
);

export default RecipeCard;

RecipeCard.propTypes = {
  extraCharge: PropTypes.number,
  handleAddRecipe: PropTypes.func.isRequired,
  handleRemoveRecipe: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  maxRecipesSelected: PropTypes.bool.isRequired,
  minRecipesSelected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,
  selectionLimit: PropTypes.number.isRequired,
  yields: PropTypes.number.isRequired,
};

SelectedRecipeFooter.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,
  selectionLimit: PropTypes.number.isRequired,
  yields: PropTypes.number.isRequired,
  maxRecipesSelected: PropTypes.bool.isRequired,
  handleAddRecipe: PropTypes.func.isRequired,
  handleRemoveRecipe: PropTypes.func.isRequired,
};

UnselectedRecipeFooter.propTypes = {
  extraCharge: PropTypes.number,
  id: PropTypes.string.isRequired,
  minRecipesSelected: PropTypes.bool.isRequired,
  maxRecipesSelected: PropTypes.bool.isRequired,
  handleAddRecipe: PropTypes.func.isRequired,
};
