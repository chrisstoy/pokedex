import { Badge, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PokemonTypeAndWeaknessProps {
  types: string[];
  weaknesses: string[];
}

const StyledPokemonTypeAndWeakness = styled.div`
  color: black;
  border-radius: 8px;
  border-color: #cccccc;
  border-style: solid;
  border-width: 1px;
  padding: 0.5rem;
  background-color: antiquewhite;

  .bottom-margin {
    margin-bottom: 0.5rem;
  }
`;

export function PokemonTypeAndWeakness({
  types,
  weaknesses,
}: PokemonTypeAndWeaknessProps) {
  return (
    <StyledPokemonTypeAndWeakness data-testid="pokemon-details-types-and-weaknesses">
      <Container className="bottom-margin" data-testid="types">
        <Row>Type</Row>
        <Row xs="auto">
          {types.map((type, index) => (
            <Col key={index}>
              <Badge pill>{type}</Badge>
            </Col>
          ))}
        </Row>
      </Container>
      <Container data-testid="weaknesses">
        <Row>Weaknesses</Row>
        <Row xs="auto">
          {weaknesses.map((type, index) => (
            <Col key={index}>
              <Badge pill bg="danger">
                {type}
              </Badge>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledPokemonTypeAndWeakness>
  );
}

export default PokemonTypeAndWeakness;
