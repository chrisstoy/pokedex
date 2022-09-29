// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPokedexSummary } from './api.types';
import PokeMainCard from './components/PokeMainCard/PokeMainCard';

export function App() {
  const bulbasaur: IPokedexSummary = {
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

  return (
    <>
      <h1>Pokedex</h1>
      <hr></hr>
      <PokeMainCard summary={bulbasaur}></PokeMainCard>
    </>
  );
}

export default App;
