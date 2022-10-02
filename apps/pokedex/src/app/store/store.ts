import { configureStore } from '@reduxjs/toolkit';
import allPokemonSlice from './allPokemon.slice';
import searchedPokemnonSlice from './searchedPokemon.slice';

const store = configureStore({
  reducer: {
    allPokemon: allPokemonSlice,
    searchedPokemon: searchedPokemnonSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
