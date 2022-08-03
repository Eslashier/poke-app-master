import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../state/store";

const PrivateRoute = (props: { children: React.ReactNode }): JSX.Element => {

    const { children } = props
    
    const logStatus = useSelector((state: RootState) => state.login)
    const isLoggedIn = logStatus.login.isLoggedIn
  
    return isLoggedIn ? (
      <>{children}</>
    ) : (
      <Navigate to="/login"/>
    )
  }

  export default PrivateRoute