import React from "react";

import {
  ReactLocation,
  Router,
  Link,
  Outlet,
  useLocation,
  createHashHistory,
} from "@tanstack/react-location";
import { Products } from "./pages/Products";
import { Pricing } from "./pages/Pricing";
import { Blog } from "./pages/Blog";
import { Evolutions } from "./pages/Evolutions";

const App = ({ location = new ReactLocation(), basepath = "/" }) => {
  // const history = createHashHistory()

  return (
    <Router
      location={location}
      basepath={basepath}
      routes={[
        {
          path: "evolutions",
          children: [{ path: ":pokemonName", element: <Evolutions /> }],
        },
        { path: "products", element: <Products /> },
        { path: "pricing", element: <Pricing /> },
        { path: "blog", element: <Blog /> },
        // { path: "evolutions", children: [
        //   {
        //     path:":pokemonName",
        //     element: <Evolutions /> ,

        //   }
        // ]},
      ]}
    >
      <Outlet />
    </Router>
  );
};

export default App;

function getActiveProps() {
  return {
    style: {
      fontWeight: "bold",
    },
  };
}
