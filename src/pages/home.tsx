import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function HomePage() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
			<Card>
				<CardBody>
					<Link to="/single-image" className="text-primary">
						<h4 className="text-lg font-semibold m-0">Single image</h4>
					</Link>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<Link to="/image-gallery" className="text-primary">
						<h4 className="text-lg font-semibold m-0">Image gallery</h4>
					</Link>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<Link to="/image-gallery-masonry" className="text-primary">
						<h4 className="text-lg font-semibold m-0">Image gallery masonry</h4>
					</Link>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<Link to="/product-gallery" className="text-primary">
						<h4 className="text-lg font-semibold m-0">Product gallery</h4>
					</Link>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<Link to="/mosaic-gallery" className="text-primary">
						<h4 className="text-lg font-semibold m-0">Mosaic gallery</h4>
					</Link>
				</CardBody>
			</Card>
		</div>
	);
}
