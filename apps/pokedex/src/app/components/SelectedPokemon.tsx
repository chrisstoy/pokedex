import styled from '@emotion/styled';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useAppSelector } from '../hooks/store.hooks';
import PokemonAttributes from './details/PokemonAttributes';
import PokemonDescription from './details/PokemonDescription';
import PokemonEvolutions from './details/PokemonEvolutions';
import PokemonImage from './details/PokemonImage';
import PokemonStats from './details/PokemonStats';
import PokemonTypeAndWeakness from './details/PokemonTypeAndWeakness';

/* eslint-disable-next-line */
export interface SelectedPokemonProps {}

const StyledSelectedPokemon = styled.div`
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #cccccc;
  padding: 0.5rem;
`;

const StyledName = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: larger;
  color: #212121;
`;

export function SelectedPokemon(props: SelectedPokemonProps) {
  const pokemon = useAppSelector((state) => {
    return state.selectedPokemon.details;
  });

  if (pokemon) {
    return (
      <StyledSelectedPokemon>
        <Container>
          <Row xs={1}>
            <Col>
              <StyledName>
                <div className="d-flex justify-content-center">
                  {pokemon?.name} #{String(pokemon?.id).padStart(3, '0')}
                </div>
              </StyledName>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col className="my-1">
              <PokemonImage
                src={pokemon.heroImage}
                alt={pokemon.name}
              ></PokemonImage>
            </Col>
            <Col className="my-1">
              <PokemonStats stats={pokemon.stats}></PokemonStats>
            </Col>
            <Col className="my-1">
              <PokemonDescription
                text={pokemon.flavorText}
              ></PokemonDescription>
            </Col>
            <Col className="my-1">
              <PokemonAttributes pokemon={pokemon}></PokemonAttributes>
            </Col>
            <Col className="my-1">
              <PokemonTypeAndWeakness
                types={pokemon.type}
                weaknesses={pokemon.weaknesses}
              ></PokemonTypeAndWeakness>
            </Col>
            <Col>
              <PokemonEvolutions
                evolutions={pokemon.evolutions}
              ></PokemonEvolutions>
            </Col>
          </Row>
        </Container>
      </StyledSelectedPokemon>
    );
  } else {
    return (
      <StyledSelectedPokemon>
        <Container>
          <Row className="justify-content-center">
            <Image src="assets/pokeball.png"></Image>
          </Row>
        </Container>
      </StyledSelectedPokemon>
    );
  }
}

export default SelectedPokemon;
