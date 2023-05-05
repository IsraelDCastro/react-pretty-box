import React from "react";
import { Container, Row, Spacer, Text } from "@nextui-org/react";

export default function Footer() {
  const currentYear = new Date();

  return (
    <Container alignItems="center" justify="center" className="bg-secondary-900 p-10">
      <Row justify="center" align="center">
        <Text h5 weight="bold" color="white" className="mb-0">
          {currentYear.getFullYear()}
        </Text>
      </Row>
    </Container>
  );
}
