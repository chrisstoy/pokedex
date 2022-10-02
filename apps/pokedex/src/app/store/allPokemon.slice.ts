import { createSlice } from '@reduxjs/toolkit';
import { IPokemonId } from '../api/api.types';

interface IAllPokemonState {
  value: IPokemonId[];
}

const initialState: IAllPokemonState = {
  value: [],
};

/**
 * Holds the list of all available Pokemon to search for
 */
const allPokemnonSlice = createSlice({
  name: 'allPokemon',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = allPokemnonSlice.actions;
export default allPokemnonSlice.reducer;
