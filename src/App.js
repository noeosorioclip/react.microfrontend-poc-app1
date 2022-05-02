import React from "react";

import { ReactLocation, Router, Link, Outlet, useLocation, createHashHistory } from "@tanstack/react-location";
import { Products } from "./pages/Products";
import { Pricing } from "./pages/Pricing";
import { Blog } from "./pages/Blog";


const App = () => {
  // const history = createHashHistory()
  const location = new ReactLocation()

  return <Router
    location={location}
    routes={
      [
        { path: "/", element: <Products /> },
        { path: "products", element: <Products /> },
        { path: "pricing", element: <Pricing /> },
        { path: "blog", element: <Blog /> },
      ]
    }
  >
    
    <Outlet />
  </Router>
}

export default App;


function getActiveProps() {
  return {
    style: {
      fontWeight: "bold",
    },
  };
}
