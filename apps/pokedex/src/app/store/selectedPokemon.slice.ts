import { createSlice } from '@reduxjs/toolkit';
import { IPokemonDetails } from '../api/api.types';

interface ISelectedPokemnonState {
  value: IPokemonDetails | null;
}

const initialState: ISelectedPokemnonState = {
  value: null,
};

/**
 * Holds the list of all available pokemon to search for
 */
const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
