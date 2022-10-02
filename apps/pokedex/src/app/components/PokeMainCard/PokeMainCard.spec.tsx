import { render } from '@testing-library/react';
import { IPokedexSummary } from '../../api/api.types';

import PokeMainCard from './PokeMainCard';

describe('PokeMainCard', () => {
  it('should render successfully', () => {
    const mockSummary: IPokedexSummary = {
      abilities: ['Overgrow'],
      detailPageURL: '/us/pokedex/bulbasaur',
      weight: 15.2,
      weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
      number: '001',
      height: 28.0,
      collectibles_slug: 'bulbasaur',
      featured: 'true',
      slug: 'bulbasaur',
      name: 'Bulbasaur',
      ThumbnailAltText: 'Bulbasaur',
      ThumbnailImage:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      id: 1,
      type: ['grass', 'poison'],
    };

    const { baseElement } = render(<PokeMainCard summary={mockSummary} />);
    expect(baseElement).toBeTruthy();
  });
});
