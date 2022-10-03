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
    setSearchedPokemon: (state, action: { payload: string; type: string }) => {
      if (state.value && state.value !== action.payload) {
        // a new value for searched, so store the previous value
        state.previousValues = [state.value, ...state.previousValues];
      }
      state.value = action.payload;
    },
    setPreviouslySearchedPokemon: (
      state,
      action: { payload: string; type: string }
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchedPokemon, setPreviouslySearchedPokemon } =
  searchedPokemonSlice.actions;
export default searchedPokemonSlice.reducer;
