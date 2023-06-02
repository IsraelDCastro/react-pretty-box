import React from "react";
import { Grid, Table, Text } from "@nextui-org/react";
import { ProductGallery } from "@/components";

export default function ProductGalleryExample() {
  return (
    <Grid.Container gap={2} alignItems="flex-start">
      <Grid xs={12} direction="column">
        <Text h3>Product gallery</Text>
        <Text>
          The product gallery component enables you to zoom in on an image for a closer view and also provides a slider in the modal to
          browse through other product images.
        </Text>
      </Grid>
      <Grid xs={12} md={6}>
        <ProductGallery isRounded />
      </Grid>
      <Grid xs={12} md={6}>
        <Table lined striped headerLined className="bg-white w-full">
          <Table.Header>
            <Table.Column>Props</Table.Column>
            <Table.Column>Type</Table.Column>
            <Table.Column>Default</Table.Column>
            <Table.Column>Note</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>imagesUrl</Table.Cell>
              <Table.Cell>Array</Table.Cell>
              <Table.Cell>8 random Picsum photos</Table.Cell>
              <Table.Cell>
                URLs for the images to zoom in. Structure below:
                <p>{"[{ img: \"...\", alt: \"...\", figcaption: \"...\" }]"}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>animation</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>fadeIn</Table.Cell>
              <Table.Cell>Animation to open modal with the image.</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>isRounded</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>Add little rounded corners.</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>isCircled</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>Make a circle with the image, it works better with a square image.</Table.Cell>
            </Table.Row>
            <Table.Row key="5">
              <Table.Cell>hasShadow</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>Add a little shadow to the image.</Table.Cell>
            </Table.Row>
            <Table.Row key="6">
              <Table.Cell>space</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>20px</Table.Cell>
              <Table.Cell>Gap space for each column, you can use px, rem, em, etc.</Table.Cell>
            </Table.Row>
            <Table.Row key="7">
              <Table.Cell>bgBackdropClose</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>You can close the image modal by clicking the background.</Table.Cell>
            </Table.Row>
            <Table.Row key="8">
              <Table.Cell>figcaption</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>Display the figcaption of the images in the pretty box.</Table.Cell>
            </Table.Row>
            <Table.Row key="9">
              <Table.Cell>isVertical</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>Use it if you want to put the images carousel vertically.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid>
    </Grid.Container>
  );
}
