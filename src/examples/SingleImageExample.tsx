import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import SingleImage from "@/components/singleImage";

export default function SingleImageExample() {
	return (
		<div className="grid gap-8">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold">Single image</h3>
				<p>With this component, you can zoom in on an image to see it up close and view it in better detail.</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<SingleImage bgBackdropClose isRounded hasShadow imageUrl="https://picsum.photos/1280/650?random=1" />
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
							<TableCell>imageUrl</TableCell>
							<TableCell>string</TableCell>
							<TableCell>https://picsum.photos/1280/720?random</TableCell>
							<TableCell>URL for the image to zoom in.</TableCell>
						</TableRow>
						<TableRow key="2">
							<TableCell>animation</TableCell>
							<TableCell>string</TableCell>
							<TableCell>fadeIn</TableCell>
							<TableCell>Animation to open modal with the image.</TableCell>
						</TableRow>
						<TableRow key="3">
							<TableCell>alt</TableCell>
							<TableCell>string</TableCell>
							<TableCell>empty</TableCell>
							<TableCell>Alt text for the image.</TableCell>
						</TableRow>
						<TableRow key="4">
							<TableCell>isRounded</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>Add little rounded corners.</TableCell>
						</TableRow>
						<TableRow key="5">
							<TableCell>isCircled</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>Make a circle with the image, it works better with a square image.</TableCell>
						</TableRow>
						<TableRow key="6">
							<TableCell>hasShadow</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>Add a little shadow to the image.</TableCell>
						</TableRow>
						<TableRow key="7">
							<TableCell>figcaption</TableCell>
							<TableCell>string</TableCell>
							<TableCell>empty</TableCell>
							<TableCell>Add figcaption text to image, it is visible only when you open the image.</TableCell>
						</TableRow>
						<TableRow key="8">
							<TableCell>bgBackdropClose</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
							<TableCell>You can close the image modal by clicking the background.</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
