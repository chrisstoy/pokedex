import { Image } from 'react-bootstrap';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PokemonImageProps {
  src: string;
  alt: string;
}

const StyledPokemonImage = styled.div`
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #cccccc;
  display: flex;
  justify-content: center;
`;

export function PokemonImage({ src, alt }: PokemonImageProps) {
  return (
    <StyledPokemonImage>
      <Image height="200px" src={src} alt={alt}></Image>
    </StyledPokemonImage>
  );
}

export default PokemonImage;
