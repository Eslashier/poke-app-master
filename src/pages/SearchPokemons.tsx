import DisplayPokemonsComponent from "../components/DisplayPokemonsComponent";
import { useAppDispatch } from "../state/store";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { selectPokemonsState } from "../state/slice/pokemonSlice";
import "./grid.css"

const SearchPokemons = () => {

    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(getPokemons()) }, [dispatch])
    const pokemons = useSelector(selectPokemonsState())

    const [pokemonsFiltered, setPokemonsFiltered] = useState(pokemons) as any

    const filterPokemons = (e: any) => {
        let pokeFilter = pokemons.filter(
            poke => poke.name?.includes(e.toLowerCase())
        )
        setPokemonsFiltered(pokeFilter)
        console.log(pokemonsFiltered)
    }

    useEffect(() => {
            setPokemonsFiltered(pokemons)
    }, [])


    return (
        <div>
            <br/>
            <div className="center">
                <input type="search" placeholder="... search your pokemons" onChange={(e) => (filterPokemons(e.target.value))}></input>
            </div>
            <br/>
            <div className='containerPokemons' >
                {(pokemonsFiltered).map((pokemons: any) => (
                    <DisplayPokemonsComponent key={pokemons.name} props={pokemons} />
                ))}
            </div>
            <div className="center"> 
                <h2 hidden={pokemonsFiltered.length !== 0 && pokemons.length !==0}>There is no pokemons to show</h2>
            </div>
        </div>
    )

}

export default SearchPokemons;