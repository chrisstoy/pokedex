import { createSlice } from '@reduxjs/toolkit';
import { IPokemonId } from '../api/api.types';

interface IAllPokemonState {
  allPokemon: IPokemonId[];
}

const initialState: IAllPokemonState = {
  allPokemon: [],
};

/**
 * Holds the list of all available Pokemon to search for
 */
const allPokemnonSlice = createSlice({
  name: 'allPokemon',
  initialState,
  reducers: {
    setAllPokemon: (state, action) => {
      state.allPokemon = action.payload;
    },
  },
});

export const { setAllPokemon } = allPokemnonSlice.actions;
export default allPokemnonSlice.reducer;
