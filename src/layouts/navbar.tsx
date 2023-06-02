import React, { ReactNode } from "react";
import { Navbar as Nav, Text } from "@nextui-org/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

interface CustomNavLinkProps {
  to?: string;
  children: ReactNode;
}

function CustomNavLink({ to = "/", children }: CustomNavLinkProps) {
  const route = useLocation();
  const router = useNavigate();

  const changeRoute = () => {
    router(to);
  };

  return (
    <Nav.Link onClick={changeRoute} isActive={route.pathname === to}>
      {children}
    </Nav.Link>
  );
}
export default function Navbar() {
  return (
    <Nav variant="static" maxWidth="fluid">
      <Nav.Toggle showIn="xs" />
      <Nav.Brand>
        <Text h4 color="inherit" weight="bold" hideIn="xs" className="mb-0">
          React Pretty Box
        </Text>
      </Nav.Brand>
      <Nav.Content hideIn="xs" variant="underline-rounded">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/single-image">Single image</CustomNavLink>
        <CustomNavLink to="/image-gallery">Image gallery</CustomNavLink>
        <CustomNavLink to="/image-gallery-masonry">Image gallery masonry</CustomNavLink>
        <CustomNavLink to="/product-gallery">Product gallery</CustomNavLink>
      </Nav.Content>
      <Nav.Collapse>
        <Nav.CollapseItem>
          <Link to="/">Home</Link>
        </Nav.CollapseItem>
        <Nav.CollapseItem>
          <Link to="/single-image">Single image</Link>
        </Nav.CollapseItem>
        <Nav.CollapseItem>
          <Link to="/image-gallery">Image gallery</Link>
        </Nav.CollapseItem>
        <Nav.CollapseItem>
          <Link to="/image-gallery-masonry">Image gallery masonry</Link>
        </Nav.CollapseItem>
        <Nav.CollapseItem>
          <Link to="/product-gallery">Product gallery</Link>
        </Nav.CollapseItem>
      </Nav.Collapse>
    </Nav>
  );
}
