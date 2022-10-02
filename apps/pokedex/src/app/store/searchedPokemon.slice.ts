import { createSlice } from '@reduxjs/toolkit';

/**
 * Tracks the currently searched Pokemon and list of all previous searches
 */
const searchedPokemnonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    value: '',
    previousValues: [] as string[],
  },
  reducers: {
    set: (state, action) => {
      state.previousValues = [state.value, ...state.previousValues];
      state.value = action.payload;
    },
  },
});

export const { set } = searchedPokemnonSlice.actions;
export default searchedPokemnonSlice.reducer;
