import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>header</header>
      <h1>layosut</h1>
      <div>
        consdfgtent
        <Outlet />
      </div>
      <footer>footsser</footer>
    </>
  );
}
