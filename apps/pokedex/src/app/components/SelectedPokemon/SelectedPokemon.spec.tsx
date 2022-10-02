import { render } from '@testing-library/react';

import SelectedPokemon from './SelectedPokemon';

describe('SelectedPokemon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectedPokemon />);
    expect(baseElement).toBeTruthy();
  });
});
