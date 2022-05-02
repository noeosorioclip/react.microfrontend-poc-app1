import React from "react";
import ResponsiveAppBar from "../components/NavBar";

export function NavbarLayout({ children, ...props }) {
  return (
    <>
      <ResponsiveAppBar />
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#FFEE58",
          color: "grey",
        }}
      >
        {children}
      </div>
    </>
  );
}
