import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import loginReducer from "./slice/loginSlice";
import pokemonReducer from "./slice/pokemonSlice";
import pokemonDetailReducer from "./slice/pokemonDetailSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonReducer,
        pokemonDetails: pokemonDetailReducer,
        login: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()