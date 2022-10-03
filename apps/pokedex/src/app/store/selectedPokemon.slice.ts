import { createSlice } from '@reduxjs/toolkit';
import { IPokemonDetails } from '../api/api.types';

interface ISelectedPokemnonState {
  details: IPokemonDetails | null; // details for the currently selected Pokemon
  isLoading: boolean; // true when a Pokemon details are loading
}

const initialState: ISelectedPokemnonState = {
  details: null,
  isLoading: false,
};

/**
 * Holds the list of all available pokemon to search for
 */
const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    setDetails: (state, action: { payload: IPokemonDetails | null }) => {
      state.details = action.payload;
    },
    setIsLoading: (state, action: { payload: boolean }) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setDetails, setIsLoading } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
