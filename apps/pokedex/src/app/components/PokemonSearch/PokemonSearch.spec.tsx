import { render } from '@testing-library/react';

import PokemonSearch from './PokemonSearch';

describe('PokemonSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonSearch />);
    expect(baseElement).toBeTruthy();
  });
});
