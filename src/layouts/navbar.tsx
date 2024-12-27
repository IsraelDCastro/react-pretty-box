import React, { ReactNode } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link as NextUILink
} from "@nextui-org/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface CustomNavLinkProps {
	to?: string;
	children: ReactNode;
}

function CustomNavLink({ to = "/", children }: CustomNavLinkProps) {
	const route = useLocation();
	const navigate = useNavigate();

	const changeRoute = () => {
		navigate(to);
	};

	return (
		<NavbarItem isActive={route.pathname === to}>
			<NextUILink className="cursor-pointer" color="foreground" onClick={changeRoute}>
				{children}
			</NextUILink>
		</NavbarItem>
	);
}

export default function NavbarComponent() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<Navbar maxWidth="full" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarBrand>
				<p className="font-bold text-inherit">React Pretty Box</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<CustomNavLink to="/">Home</CustomNavLink>
				<CustomNavLink to="/single-image">Single image</CustomNavLink>
				<CustomNavLink to="/image-gallery">Image gallery</CustomNavLink>
				<CustomNavLink to="/image-gallery-masonry">Image gallery masonry</CustomNavLink>
				<CustomNavLink to="/product-gallery">Product gallery</CustomNavLink>
				<CustomNavLink to="/image-carousel-gallery">Image carousel gallery</CustomNavLink>
				<CustomNavLink to="/mosaic-gallery">Mosaic gallery</CustomNavLink>
				<CustomNavLink to="/slider-gallery">Slider gallery</CustomNavLink>
			</NavbarContent>

			<NavbarMenu className="hidden">
				<NavbarMenuItem>
					<Link to="/">Home</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link to="/single-image">Single image</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link to="/image-gallery">Image gallery</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link to="/image-gallery-masonry">Image gallery masonry</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link to="/product-gallery">Product gallery</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link to="/image-carousel-gallery">Image carousel gallery</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link to="/mosaic-gallery">Mosaic gallery</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}
