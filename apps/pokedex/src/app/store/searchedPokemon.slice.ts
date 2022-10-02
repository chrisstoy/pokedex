import { createSlice } from '@reduxjs/toolkit';

interface ISearchedPokemonState {
  value: string;
  previousValues: string[];
}

const initialState: ISearchedPokemonState = {
  value: '',
  previousValues: [],
};

/**
 * Tracks the currently searched Pokemon and list of all previous searches
 */
const searchedPokemonSlice = createSlice({
  name: 'searchedPokemon',
  initialState,
  reducers: {
    set: (state, action) => {
      state.previousValues = [state.value, ...state.previousValues];
      state.value = action.payload;
    },
  },
});

export const { set } = searchedPokemonSlice.actions;
export default searchedPokemonSlice.reducer;
