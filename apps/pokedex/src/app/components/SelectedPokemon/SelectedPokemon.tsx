import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/store.hooks';

/* eslint-disable-next-line */
export interface SelectedPokemonProps {}

const StyledSelectedPokemon = styled.div`
  border: thin solid green;
  /* background-image: url('/assets/pokeball.png'); */
`;

export function SelectedPokemon(props: SelectedPokemonProps) {
  const pokemon = useAppSelector((state) => state.selectedPokemon.details);

  return (
    <StyledSelectedPokemon>
      <Container>
        <Row>
          <Col>
            {pokemon?.name} #{pokemon?.id}
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>Image</Col>
          <Col>Stats</Col>
          <Col>Description</Col>
          <Col>Physical</Col>
          <Col>Type/Weakness</Col>
          <Col>Evolution</Col>
        </Row>
      </Container>
    </StyledSelectedPokemon>
  );
}

export default SelectedPokemon;
