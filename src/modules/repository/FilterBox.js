import Box from "../../components/Box";
import Input from "../../components/Input";
import Label from "../../components/Label";
import React from "react";
import PropTypes from "prop-types";

const FilterBox = ({ isChecked, handleCheckOnClick }) => (
  <Box
    borderWidth={isChecked ? "md" : null}
    borderStyle={isChecked ? "solid" : null}
    borderColor={isChecked ? "primary_600" : null}
    m="10px"
    p="xs"
    borderRadius="md"
    boxShadow="lg"
    height="50px"
  >
    <Label>Filter starred repository</Label>
    <Input type="checkbox" onChange={handleCheckOnClick} />
  </Box>
);

FilterBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleCheckOnClick:PropTypes.func.isRequired
};
export default FilterBox;
