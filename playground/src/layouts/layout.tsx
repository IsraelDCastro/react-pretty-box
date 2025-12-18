import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@playground/layouts/navbar";
import Footer from "@playground/layouts/footer";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="container py-12 flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
