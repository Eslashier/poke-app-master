import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import DisplayPokemons from "../pages/DisplayPokemons"
import Login from "../pages/LogIn"
import PokemonDetail from "../pages/PokemonDetail"
import SearchPokemons from "../pages/SearchPokemons"
import PrivateRoute from "./PrivateRoute"

export default function RoutesSite() {


    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<PrivateRoute> <DisplayPokemons /> </PrivateRoute>} />
            <Route path='/search' element={<PrivateRoute> <SearchPokemons /> </PrivateRoute>} />
            <Route path='/pokemon/:pokemonName' element={<PrivateRoute> <PokemonDetail /></PrivateRoute>} />
            <Route path="*" element={<PrivateRoute><Login /></PrivateRoute>} />
        </Routes>
    )
}

