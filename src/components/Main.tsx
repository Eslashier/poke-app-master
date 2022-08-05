import { useEffect, useState } from "react";
import RoutesSite from "../config/RoutesSite";
import { loginType, logInUserReducer } from "../state/slice/loginSlice";
import { useAppDispatch } from "../state/store";
import Navbar from "./NavBar";

export default function MainSpace(){

    const [name, setName] = useState(localStorage.getItem("name")||"");

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(localStorage.getItem("name")){
            const userLog: loginType = {
                name: name,
                isLoggedIn: true,
            }
            dispatch(logInUserReducer(userLog))
        }
    }, [])
    
    console.log(localStorage.getItem("name"))

    return(
        <>
        <Navbar />
        <RoutesSite />
        </>
    )
}


