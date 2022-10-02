import { createSlice } from '@reduxjs/toolkit';
import { IPokemonId } from '../api/api.types';

/**
 * Holds the list of all available pokemon to search for
 */
const allPokemnonSlice = createSlice({
  name: 'allPokemon',
  initialState: {
    value: [] as IPokemonId[],
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = allPokemnonSlice.actions;
export default allPokemnonSlice.reducer;
