import React from "react";
import { Link } from "react-router-dom";
import { Card, Text } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      <Card>
        <Link to="/single-image">
          <Card.Body>
            <Text color="primary" h4 className="mb-0">
              Single image
            </Text>
          </Card.Body>
        </Link>
      </Card>
      <Card>
        <Link to="/image-gallery">
          <Card.Body>
            <Text color="primary" h4 className="mb-0">
              Image gallery
            </Text>
          </Card.Body>
        </Link>
      </Card>
      <Card>
        <Link to="/image-gallery-masonry">
          <Card.Body>
            <Text color="primary" h4 className="mb-0">
              Image gallery masonry
            </Text>
          </Card.Body>
        </Link>
      </Card>
      <Card>
        <Link to="/product-gallery">
          <Card.Body>
            <Text color="primary" h4 className="mb-0">
              Product gallery
            </Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
}
