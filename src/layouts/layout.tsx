import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";

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
