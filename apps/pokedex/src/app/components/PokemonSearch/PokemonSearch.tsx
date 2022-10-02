import styled from '@emotion/styled';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { IPokemonId } from '../../api/api.types';

/* eslint-disable-next-line */
export interface PokemonSearchProps {}

const StyledPokemonSearch = styled.div`
  padding: 1rem;
`;

/**
 * Component that allows  user to type in the name of a pokemon and set that as the one to search for
 * If multiple pokemon match, then a
 * @param props
 * @returns
 */
export function PokemonSearch(props: PokemonSearchProps) {
  const [selected, setSelected] = useState([] as IPokemonId[]);

  const options: IPokemonId[] = [
    { name: 'bulbasaur', id: 1 },
    { name: 'ivysaur', id: 2 },
    { name: 'venusaur', id: 3 },
  ];

  const searchHandler = () => {
    // TODO - load the detail for the selected Pokemon
    console.log('Searching for ' + JSON.stringify(selected));
  };

  return (
    <StyledPokemonSearch>
      <Form.Group>
        <InputGroup>
          <InputGroup.Text>Search for Pokemon: </InputGroup.Text>
          <Typeahead
            id="search-for-pokemon"
            labelKey="name"
            onChange={(value) => setSelected(value as IPokemonId[])}
            options={options}
            placeholder="Name of Pokemon..."
            selected={selected}
          />
          <Button onClick={searchHandler}>Search!</Button>
        </InputGroup>
      </Form.Group>
    </StyledPokemonSearch>
  );
}

export default PokemonSearch;
