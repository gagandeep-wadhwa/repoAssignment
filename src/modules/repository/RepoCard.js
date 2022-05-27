import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import css from "@styled-system/css";

import Box from "../../components/Box";
import Text from "../../components/Text";
const SelectionButton = styled.button`
  ${css({
    outline: "none",
    color: "white",
    padding: "sm",
    cursor: "pointer",
    backgroundColor: "primary_600",
    border: "none",
    ":hover:enabled": {
      backgroundColor: "primary_700",
    },
    ":active:enabled": {
      backgroundColor: "primary_800",
    },
  })}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const RepoCard = ({
  clone_url,
  id,
  description,
  name,
  stargazers_count,
  handleButtonClick,
  disabled,
  isChecked,
}) => (
  <Box
    borderWidth="md"
    borderColor="primary_600"
    m="2px"
    borderRadius="md"
    boxShadow="lg"
  >
    <Box p="xs" height="200px">
      <Text fontWeight="bold" fontFamily="primary" fontSize="md">
        {name}
      </Text>
      <Text
        textAlign="right"
        fontWeight="bold"
        fontFamily="primary"
        fontSize="md"
      >
        {stargazers_count}
      </Text>
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
        <a href={clone_url}>{clone_url}</a>
      </Text>
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
        {description}
      </Text>
    </Box>
    {!isChecked ? (
      <SelectionButton
        onClick={(e) => handleButtonClick(id)}
        title="Mark it Starred"
        disabled={disabled}
        data-test="btn-star"
      >
        Star Me
      </SelectionButton>
    ) : null}
  </Box>
);

export default RepoCard;

RepoCard.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  stargazers_count: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  clone_url: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked:PropTypes.bool.isRequired
};
