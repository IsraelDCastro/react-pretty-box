import React from "react";
import { Table, TableRow, TableBody, TableHeader, TableColumn, TableCell } from "@nextui-org/react";
import { MosaicGallery } from "@/components";

export default function MosaicGalleryExample() {
	return (
		<div>
			<div>
				<h3>Mosaic gallery</h3>
				<p>
					The image carousel gallery component displays images in a scrollable horizontal format. Clicking an image opens a modal for a
					larger view, allowing navigation between images. It combines carousel scrolling with modal viewing functionality.
				</p>
			</div>
			<div>
				<MosaicGallery isRounded />
			</div>
			<Table
				aria-label="Example table with dynamic content"
				shadow="none"
				radius="sm"
				classNames={{
					wrapper: "p-2",
					table: "bg-transparent !border-0",
					thead: "*:!m-0"
				}}
				isStriped
			>
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
	);
}
