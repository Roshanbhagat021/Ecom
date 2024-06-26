import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider"
import {  Navigate} from "react-router-dom";

function PrivateRoute({children}) {
  const { isAuth } = useContext(AuthContext);

  if(!isAuth){
   return <Navigate to="/login"/>
  }

 return children

}

export default PrivateRoute;
