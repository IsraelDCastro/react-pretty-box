import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { ProductGallery } from "@/components";

export default function ProductGalleryExample() {
	return (
		<div className="grid gap-8">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold">Product gallery</h3>
				<p>
					The product gallery component enables you to zoom in on an image for a closer view and also provides a slider in the modal to
					browse through other product images.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<ProductGallery isRounded />
				</div>
				<Table
					aria-label="Example table with dynamic content"
					classNames={{
						base: "bg-white w-full",
						th: "bg-gray-100"
					}}
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
							<TableCell>space</TableCell>
							<TableCell>string</TableCell>
							<TableCell>20px</TableCell>
							<TableCell>Gap space for each column, you can use px, rem, em, etc.</TableCell>
						</TableRow>
						<TableRow key="7">
							<TableCell>bgBackdropClose</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>You can close the image modal by clicking the background.</TableCell>
						</TableRow>
						<TableRow key="8">
							<TableCell>figcaption</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>Display the figcaption of the images in the pretty box.</TableCell>
						</TableRow>
						<TableRow key="9">
							<TableCell>isVertical</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>Use it if you want to put the images carousel vertically.</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
