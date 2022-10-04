import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadPokemonDetails } from './selectedPokemon.slice';

interface ISearchedPokemonState {
  searchFor: string;
  previousSearches: string[];
}

const initialState: ISearchedPokemonState = {
  searchFor: '',
  previousSearches: [],
};

/**
 * Thunk for setting the name of the pokemon to load and triggering loading
 * details
 */
export const searchForPokemon = createAsyncThunk(
  'searchedPokemon/searchForPokemon',
  async (name: string, thunkAPI) => {
    thunkAPI.dispatch(setSearchedPokemon(name));
    thunkAPI.dispatch(loadPokemonDetails(name));
  }
);

/**
 * Thunk for setting the name of the pokemon to load and triggering loading
 * details
 */
export const loadPreviousPokemon = createAsyncThunk(
  'searchedPokemon/loadPreviousPokemon',
  async (name: string, thunkAPI) => {
    thunkAPI.dispatch(setPreviouslySearchedPokemon(name));
    thunkAPI.dispatch(loadPokemonDetails(name));
  }
);

/**
 * Tracks the currently searched Pokemon and list of all previous searches
 */
const searchedPokemonSlice = createSlice({
  name: 'searchedPokemon',
  initialState,
  reducers: {
    setSearchedPokemon: (state, action: PayloadAction<string>) => {
      if (state.searchFor && state.searchFor !== action.payload) {
        // a new value for searched, so store the previous value
        state.previousSearches = [state.searchFor, ...state.previousSearches];
      }
      state.searchFor = action.payload;
    },
    setPreviouslySearchedPokemon: (state, action: PayloadAction<string>) => {
      state.searchFor = action.payload;
    },
  },
});

export const { setSearchedPokemon, setPreviouslySearchedPokemon } =
  searchedPokemonSlice.actions;
export default searchedPokemonSlice.reducer;
