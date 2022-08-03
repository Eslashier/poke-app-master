import { createSlice } from "@reduxjs/toolkit"
import { possibleStatus } from "../../config/possibleStatus"
import { getPokemonDetails } from "../../services/pokemonDetailServices"
import { RootState } from "../store"

type pokemonDetailStateType = {
    pokemonsDetail: any[],
    status: possibleStatus,
    error: string | null,
}

const initialState: pokemonDetailStateType ={
    pokemonsDetail: [],
    status: possibleStatus.IDLE,
    error: null,
}

const pokemonDetailSlice = createSlice({
    name: "pokemonDetail",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        //GET pokemons
        builder.addCase(getPokemonDetails.pending, (state, action)=>{
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getPokemonDetails.fulfilled, (state, action)=>{
            state.status = possibleStatus.COMPLETED;
            state.pokemonsDetail.push(action.payload);
        })
        builder.addCase(getPokemonDetails.rejected, (state, action)=>{
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong fetching the tasks";
            state.pokemonsDetail = [];
        })
    }
})

export default pokemonDetailSlice.reducer

export const selectPokemonDetailState = () => (state: RootState) => state.pokemonDetails.pokemonsDetail
export const selectPokemonDetailStatus = () => (state: RootState) => state.pokemonDetails.status
export const selectPokemonDetailFetchError = () => (state: RootState) => state.pokemonDetails.error