import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/navbar";
import { Container } from "@nextui-org/react";
import Footer from "@/layouts/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container responsive className="w-11/12 py-12 flex-1">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
