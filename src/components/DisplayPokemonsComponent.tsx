import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ENDPOINTDETAIL } from "../config/apiConfig";
import "./cards.scss"


const DisplayPokemonsComponent: React.FunctionComponent<any> = ({ props }) => {

    const [pokemonDetail, setPokemonDetails] = useState([]) as any

    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await fetch(ENDPOINTDETAIL + props.name)
            const json = await data.json();
            setPokemonDetails(json)
        }
        fetchPokemons()
            .catch(console.error)
    }, [])

    return (

        <div className="card">
            <Link className="linkContainer" to={`/pokemon/${pokemonDetail.name}`} state={{ pokemonToShow: props }}>
                <img src={pokemonDetail.sprites?.front_default} className="pokeImage"></img>
                <div className="container">
                    <h2><b>{pokemonDetail.name}</b></h2>
                    <div className="line"></div>
                    <div className="containerTypes">
                        {pokemonDetail.types?.map((item: any) => {
                            return (
                                <div className="types" key={item.type.name}>
                                    {item.type.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Link>
        </div>

    )

}

export default DisplayPokemonsComponent

