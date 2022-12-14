import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PokemonEvolutionsProps {
  evolutions: string[];
}

const StyledPokemonEvolutions = styled.div`
  color: black;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #cccccc;
  padding: 0.5rem;

  li {
    color: white;
    text-transform: capitalize;
  }
`;

export function PokemonEvolutions({ evolutions }: PokemonEvolutionsProps) {
  return (
    <StyledPokemonEvolutions data-testid="pokemon-details-evolution">
      <div>Evolution</div>
      <ul>
        {evolutions.map((evo, index) => {
          return <li key={index}>{evo}</li>;
        })}
      </ul>
    </StyledPokemonEvolutions>
  );
}

export default PokemonEvolutions;
