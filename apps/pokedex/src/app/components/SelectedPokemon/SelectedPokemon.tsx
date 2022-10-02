import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface SelectedPokemonProps {}

const StyledSelectedPokemon = styled.div`
  /* background-image: url('/assets/pokeball.png'); */
`;

export function SelectedPokemon(props: SelectedPokemonProps) {
  // const pokemon: IPokemonDetails = {};

  return (
    <StyledSelectedPokemon>
      <Container>
        <Row xs={1} md={2}>
          <Col>First</Col>
          <Col>Second</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>Third</Col>
          <Col>Fourth</Col>
        </Row>
      </Container>
      <div></div>
    </StyledSelectedPokemon>
  );
}

export default SelectedPokemon;
