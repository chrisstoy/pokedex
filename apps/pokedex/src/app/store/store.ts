import { configureStore } from '@reduxjs/toolkit';
import allPokemonSlice from './allPokemon.slice';
import searchedPokemonSlice from './searchedPokemon.slice';
import selectedPokemonSlice from './selectedPokemon.slice';

const store = configureStore({
  reducer: {
    allPokemon: allPokemonSlice,
    searchedPokemon: searchedPokemonSlice,
    selectedPokemon: selectedPokemonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
