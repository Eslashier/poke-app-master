import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUserReducer } from "../state/slice/loginSlice";

const LogOut = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const logOutApp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(logOutUserReducer())
        navigate("/login")
    }

    return (
        <div>
            <button className="logout" onClick={(e)=>logOutApp(e)}>Log out</button>
        </div>
    )
}

export default LogOut