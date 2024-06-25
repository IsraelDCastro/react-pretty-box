import React from "react";
import { Table, TableRow, TableBody, TableHeader, TableColumn, TableCell } from "@nextui-org/react";
import ImageGallery from "@/components/imageGallery";

export default function ImageGalleryExample() {
  return (
    <div>
      <div>
        <h3>Image gallery</h3>
        <p>
          The image gallery component allows you to zoom in on an image for a closer view and also provides a slider in the modal to browse
          through other images.
        </p>
      </div>
      <div>
        <ImageGallery isRounded />
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableColumn>Props</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Default</TableColumn>
            <TableColumn>Note</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>imagesUrl</TableCell>
              <TableCell>Array</TableCell>
              <TableCell>8 random Picsum photos</TableCell>
              <TableCell>
                URLs for the images to zoom in. Structure below:
                <p>{'[{ img: "...", alt: "...", figcaption: "..." }]'}</p>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>animation</TableCell>
              <TableCell>string</TableCell>
              <TableCell>fadeIn</TableCell>
              <TableCell>Animation to open modal with the image.</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>isRounded</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Add little rounded corners.</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>isCircled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Make a circle with the image, it works better with a square image.</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>hasShadow</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Add a little shadow to the image.</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>squared</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>All images are squared.</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>space</TableCell>
              <TableCell>string</TableCell>
              <TableCell>20px</TableCell>
              <TableCell>Gap space for each column, you can use px, rem, em, etc.</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>columns</TableCell>
              <TableCell>number</TableCell>
              <TableCell>4</TableCell>
              <TableCell>Quantity of columns on desktop.</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>mdColumns</TableCell>
              <TableCell>number</TableCell>
              <TableCell>3</TableCell>
              <TableCell>Quantity of columns on tablet.</TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>xsColumns</TableCell>
              <TableCell>number</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Quantity of columns on mobile.</TableCell>
            </TableRow>
            <TableRow key="11">
              <TableCell>bgBackdropClose</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>You can close the image modal by clicking the background.</TableCell>
            </TableRow>
            <TableRow key="12">
              <TableCell>figcaption</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Display the figcaption of the images in the pretty box.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
