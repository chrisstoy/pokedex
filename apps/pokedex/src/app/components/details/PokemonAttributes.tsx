import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { IPokemonDetails } from '../../api/api.types';

/* eslint-disable-next-line */
export interface PokemonAttributesProps {
  pokemon: IPokemonDetails;
}

const StyledPokemonAttributes = styled.div`
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 8px;
  border-color: #30a7d7;
  border-style: solid;
  border-width: 1px;
  background-color: #30a7d7;
  padding: 0.5rem;
`;

const StyledAttribute = styled.div`
  font-family: 'Flexo-Medium', arial, sans-serif;
  color: #212121;
`;

export function PokemonAttributes({ pokemon }: PokemonAttributesProps) {
  const attributes: { name: string; value: string }[] = [
    { name: 'Height', value: `${pokemon.height} decimeters` },
    { name: 'Weight', value: `${pokemon.weight} hectograms` },
    {
      name: 'Abilities',
      value: pokemon.abilities.map((ab) => ab.name).join(', '),
    },
  ];

  return (
    <StyledPokemonAttributes data-testid="pokemon-details-attributes">
      <Container>
        <Row xs={2}>
          {attributes.map((attr, index) => {
            return (
              <Col key={index}>
                <div>{attr.name}</div>
                <StyledAttribute data-testid={`attrib=${attr.name}`}>
                  {attr.value}
                </StyledAttribute>
              </Col>
            );
          })}
        </Row>
      </Container>
    </StyledPokemonAttributes>
  );
}

export default PokemonAttributes;
