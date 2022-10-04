import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllPokemon } from '../api/api.service';
import { IPokemonId } from '../api/api.types';

interface IAllPokemonState {
  allPokemon: IPokemonId[];
  isLoading: boolean;
}

const initialState: IAllPokemonState = {
  allPokemon: [],
  isLoading: false,
};

/**
 * Thunk for loading the list of all available Pokemon into the Store
 */
export const loadAllPokemon = createAsyncThunk(
  'allPokemon/loadAllPokemon',
  async () => {
    const result = await fetchAllPokemon();
    return result;
  }
);

/**
 * Holds the list of all available Pokemon to search for
 */
const allPokemnonSlice = createSlice({
  name: 'allPokemon',
  initialState,
  reducers: {
    setAllPokemon: (state, action: PayloadAction<IPokemonId[]>) => {
      state.allPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadAllPokemon.pending, (state: IAllPokemonState) => {
      state.isLoading = true;
    });
    builder.addCase(
      loadAllPokemon.fulfilled,
      (state: IAllPokemonState, { payload }) => {
        state.allPokemon = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      loadAllPokemon.rejected,
      (state: IAllPokemonState, action) => {
        state.isLoading = false;
        console.error(`Failed to fetch list of all Pokemnon: ${action.error}`);
      }
    );
  },
});

export const { setAllPokemon } = allPokemnonSlice.actions;
export default allPokemnonSlice.reducer;
