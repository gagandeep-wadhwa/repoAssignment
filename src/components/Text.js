import styled from 'styled-components';
import { typography, space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Text = styled.div`
  ${typography}
  ${space}
  ${color}
  display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
 overflow: hidden;
 text-overflow: ellipsis;
`;

Text.propTypes = {
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.color,
};

export default Text;
