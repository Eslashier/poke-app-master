import { createAsyncThunk } from "@reduxjs/toolkit";
import {pokemonType} from "../state/slice/pokemonSlice"
 

export const getPokemonDetails = createAsyncThunk('getPokemonDetails', async (pokemonToSearch: pokemonType) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonToSearch.name, { 
        method: 'GET' 
    })
    return (await response.json())
})