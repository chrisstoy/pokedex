// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '@emotion/styled';
import { Container, Row } from 'react-bootstrap';
import PokedexHeader from './components/PokedexHeader/PokedexHeader';
import SelectedPokemon from './components/SelectedPokemon/SelectedPokemon';

export function App() {
  const StyledApp = styled.div``;

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
