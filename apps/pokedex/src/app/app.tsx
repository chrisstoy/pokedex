// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { fetchAllPokemon } from './api/api.service';
import PokedexHeader from './components/PokedexHeader/PokedexHeader';
import SelectedPokemon from './components/SelectedPokemon/SelectedPokemon';
import { useAppDispatch } from './hooks/store.hooks';
import { setAllPokemon } from './store/allPokemon.slice';

export function App() {
  const StyledApp = styled.div``;
  const dispatcher = useAppDispatch();

  useEffect(() => {
    // load the inital list of Pokemon to search
    fetchAllPokemon()
      .then((pokemonList) => {
        dispatcher(setAllPokemon(pokemonList));
      })
      .catch((error) => {
        console.error(`Failed to load Pokemon! ${error}`);
      });
  }, []);

  return (
    <StyledApp>
      <Container>
        <Row>
          <PokedexHeader></PokedexHeader>
        </Row>
        <Row>
          <SelectedPokemon></SelectedPokemon>
        </Row>
      </Container>
    </StyledApp>
  );
}

export default App;
