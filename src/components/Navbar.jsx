import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { isAuth, LogOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between text-black-500 bg-blue-300 font-semibold text-[10px]  sm:text-sm md:text-base lg:text-xl py-2 px-8 sm:px-12 md:px-16 lg:px-20 ">
      <Link to="/">HOME</Link>
      <Link to="/products">PRODUCTS</Link>
      {isAuth ? (
        <div className="cursor-pointer" onClick={LogOut}>
          LOGOUT
        </div>
      ) : (
        <Link to="/login">LOGIN</Link>
      )}
    </div>
  );
};

export default Navbar;
