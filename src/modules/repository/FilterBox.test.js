import { render, screen, wait } from '@testing-library/react';
import React from 'react';
import FilterBox from './FilterBox';

const handleCheckboxClick = jest.fn();
describe('FilterBox', () => {
  test('Verify FilterBox Rendering', async () => {
    render(<FilterBox isChecked={true} handleCheckOnClick={handleCheckboxClick} />);
    expect(screen.getByText('Filter starred repository')).toBeInTheDocument();
  });

});
