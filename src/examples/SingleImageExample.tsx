import React from "react";
import { Grid, Table, Text } from "@nextui-org/react";
import SingleImage from "@/components/singleImage";

export default function SingleImageExample() {
  return (
    <Grid.Container gap={2} alignItems="flex-start">
      <Grid xs={12} direction="column">
        <Text h3>Single image</Text>
        <Text>With this component, you can zoom in on an image to see it near and better view it.</Text>
      </Grid>
      <Grid xs={12} md={6}>
        <SingleImage isRounded hasShadow imageUrl="https://picsum.photos/1280/720?random=1" />
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
              <Table.Cell>imageUrl</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>https://picsum.photos/1280/720?random</Table.Cell>
              <Table.Cell>URL for the image to zoom in.</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>animation</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>fadeIn</Table.Cell>
              <Table.Cell>Animation to open modal with the image.</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>alt</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>empty</Table.Cell>
              <Table.Cell>Alt text for the image.</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>isRounded</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>Add little rounded corners.</Table.Cell>
            </Table.Row>
            <Table.Row key="5">
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
              <Table.Cell>figcaption</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>empty</Table.Cell>
              <Table.Cell>Add figcaption text to image, it is visible only when you open the image.</Table.Cell>
            </Table.Row>
            <Table.Row key="7">
              <Table.Cell>bgBackdropClose</Table.Cell>
              <Table.Cell>boolean</Table.Cell>
              <Table.Cell>false</Table.Cell>
              <Table.Cell>You can close the image modal by clicking the background.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid>
    </Grid.Container>
  );
}
