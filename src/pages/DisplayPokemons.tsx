import DisplayPokemonsComponent from "../components/DisplayPokemonsComponent";
import { useAppDispatch } from "../state/store";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { pokemonType, selectPokemonsState } from "../state/slice/pokemonSlice";
import { ENDPOINTLIST } from "../config/apiConfig";
import { getPokemonDetails } from "../services/pokemonDetailServices";
import "./grid.css"

const DisplayPokemons = () => {

    // const [pokemons, setPokemons] = useState([]) as any

    // useEffect(() => {
    //     const fetchPokemonList = async () => {
    //         const data = await fetch(ENDPOINTLIST)   
    //         const json = await data.json();
    //         setPokemons(json.results)
    //     }
    //     fetchPokemonList()
    //         .catch(console.error)     
    // }, [])

    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(getPokemons()) }, [dispatch])
    const pokemons = useSelector(selectPokemonsState())

    return (
        <div className='containerPokemons' >
            {pokemons.map((pokemons: any) => (
                <DisplayPokemonsComponent key={pokemons.name} props={pokemons} />
            ))}
        </div>
    )

}

export default DisplayPokemons;