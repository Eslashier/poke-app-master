import { createSlice } from "@reduxjs/toolkit"
import { possibleStatus } from "../../config/possibleStatus"
import { getPokemons } from "../../services/pokemonServices";
import { RootState } from "../store";

type pokemonType = {
    name?: string,
    url?: string,
}

type pokemonStateType = {
    pokemons: pokemonType[],
    status: possibleStatus,
    error: string | null,
}

const initialState: pokemonStateType ={
    pokemons: [],
    status: possibleStatus.IDLE,
    error: null,
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        //GET pokemons
        builder.addCase(getPokemons.pending, (state, action)=>{
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getPokemons.fulfilled, (state, action)=>{
            state.status = possibleStatus.COMPLETED;
            state.pokemons = action.payload;
        })
        builder.addCase(getPokemons.rejected, (state, action)=>{
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong fetching the tasks";
            state.pokemons = [];
        })
    }
})

export default pokemonSlice.reducer

export type { pokemonType}
export const selectPokemonsState = () => (state: RootState) => state.pokemons.pokemons
export const selectPokemonsStatus = () => (state: RootState) => state.pokemons.status
export const selectPokemonsFetchError = () => (state: RootState) => state.pokemons.error