import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login"
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts"
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <AllProducts />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export { AllRoutes };
