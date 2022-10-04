import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PokemonDescriptionProps {
  text: string;
}

const StyledPokemonDescription = styled.div`
  color: #212121;
  padding: 1rem;
`;

export function PokemonDescription({ text }: PokemonDescriptionProps) {
  return <StyledPokemonDescription>{text}</StyledPokemonDescription>;
}

export default PokemonDescription;
