import "./grid.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginType, logInUserReducer, logOutUserReducer } from "../state/slice/loginSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../state/store";

const Login = () => {

    const dispatch = useAppDispatch()
    
    const [name, setName] = useState('')
    const [validate, setValidate] = useState(true)

    let navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name) {
            const userLog: loginType = {
                name: name,
                isLoggedIn: true,
            }
            dispatch(logInUserReducer(userLog))
            navigate("/")
        } else {
            setValidate(false)
        }
    }

    return (
        <div className="middle" >
            <div className="center">
                <h1 className="title">Welcome to the Poke App</h1>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="center">
                    <label className="nameLabel" htmlFor="name">Name:    </label>
                    <input type="text" id="name" placeholder="Type your name..." onChange={(e) => setName(e.target.value)}></input>
                    <div>
                    <h1 hidden={validate} className="alert">Please enter a name</h1>
                    </div>
                </div>
                <br />
                <div className="center">
                    <input type="submit" value="Log in" />
                </div>
            </form>
        </div>
    )
}

export default Login;

