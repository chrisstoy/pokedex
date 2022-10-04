import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PokedexHeader from './components/PokedexHeader';
import SelectedPokemon from './components/SelectedPokemon';
import { useAppDispatch } from './hooks/store.hooks';
import { loadAllPokemon } from './store/allPokemon.slice';

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // load the inital list of Pokemon to search
    dispatch(loadAllPokemon());
  }, [dispatch]);

  const StyledApp = styled.div`
    background-image: url('assets/container_bg.png');
  `;

  return (
    <StyledApp className="d-flex justify-content-center">
      <Container fluid>
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
