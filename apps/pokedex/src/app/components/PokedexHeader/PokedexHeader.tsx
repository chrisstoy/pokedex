import styled from '@emotion/styled';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import PokemonSearch from '../PokemonSearch/PokemonSearch';

/* eslint-disable-next-line */
export interface PokedexHeaderProps {}

const StyledPokedexHeader = styled.div`
  text-align: center;
`;

export function PokedexHeader(props: PokedexHeaderProps) {
  return (
    <StyledPokedexHeader>
      <Container>
        <Row>
          <div>
            <Image src="/assets/pokedex-logo.png" fluid></Image>
          </div>
        </Row>
        <Row>
          <PokemonSearch></PokemonSearch>
        </Row>
      </Container>
    </StyledPokedexHeader>
  );
}

export default PokedexHeader;
