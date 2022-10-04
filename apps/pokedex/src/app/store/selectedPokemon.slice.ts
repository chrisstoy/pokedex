import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPokemonDetails } from '../api/api.service';
import { IPokemonDetails } from '../api/api.types';

type PokemonDetailsType = IPokemonDetails | null;

interface ISelectedPokemnonState {
  details: PokemonDetailsType; // details for the currently selected Pokemon
  isLoading: boolean; // true when a Pokemon details are loading
}

const initialState: ISelectedPokemnonState = {
  details: null,
  isLoading: false,
};

/**
 * Thunk for loading the details of a Pokemon into the store
 */
export const loadPokemonDetails = createAsyncThunk(
  'selectedPokemon/loadPokemonDetails',
  async (name: string, thunkAPI) => {
    const result = await fetchPokemonDetails(name);
    return result;
  }
);

/**
 * Holds the list of all available pokemon to search for
 */
const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadPokemonDetails.pending,
      (state: ISelectedPokemnonState) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      loadPokemonDetails.fulfilled,
      (state: ISelectedPokemnonState, action) => {
        state.details = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      loadPokemonDetails.rejected,
      (state: ISelectedPokemnonState, action) => {
        state.isLoading = false;
        state.details = null;
        console.error(`Failed to fetch details for Pokemnon: ${action.error}`);
      }
    );
  },
});

// export const {} = selectedPokemonSlice.actions;  // no generated actions to export
export default selectedPokemonSlice.reducer;
