import styled from '@emotion/styled';
import { useState } from 'react';
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { IPokemonId } from '../api/api.types';
import { useAppDispatch, useAppSelector } from '../hooks/store.hooks';
import {
  loadPreviousPokemon,
  searchForPokemon,
} from '../store/searchedPokemon.slice';

/* eslint-disable-next-line */
export interface PokemonSearchProps {}

const StyledPokemonSearch = styled.div`
  padding: 1rem;
`;

/**
 * Component that allows  user to type in the name of a pokemon and set that as
 * the one to load details for.
 */
export function PokemonSearch(props: PokemonSearchProps) {
  const [selected, setSelected] = useState([] as IPokemonId[]);

  const previousSearches = useAppSelector(
    (state) => state.searchedPokemon.previousSearches
  );
  const options = useAppSelector((state) => state.allPokemon.allPokemon);
  const isLoading = useAppSelector(
    (state) => state.selectedPokemon.isLoading || state.allPokemon.isLoading
  );

  const dispatch = useAppDispatch();

  const searchHandler = () => {
    // set newly searched for Pokemon
    const name = selected?.[0]?.name;
    if (name) {
      dispatch(searchForPokemon(name));
    }
    setSelected([]);
  };

  const previousSearchSelectedHandler = (value: string | null) => {
    // select a previously searched for Pokemon
    if (value) {
      dispatch(loadPreviousPokemon(value));
    }
    setSelected([]);
  };

  return (
    <StyledPokemonSearch>
      <Form.Group>
        <InputGroup>
          <InputGroup.Text>Search for Pokemon: </InputGroup.Text>
          <Typeahead
            disabled={isLoading}
            id="search-for-pokemon"
            labelKey="name"
            onChange={(value) => setSelected(value as IPokemonId[])}
            options={options}
            placeholder="Name of Pokemon..."
            selected={selected}
          />
          <Button onClick={searchHandler}>Search!</Button>
          <Dropdown onSelect={previousSearchSelectedHandler}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Previous Searches ({previousSearches?.length})
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {previousSearches.map((previous: string, index: number) => {
                return (
                  <Dropdown.Item
                    disabled={isLoading}
                    key={index}
                    eventKey={previous}
                  >
                    {previous}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </Form.Group>
    </StyledPokemonSearch>
  );
}

export default PokemonSearch;
