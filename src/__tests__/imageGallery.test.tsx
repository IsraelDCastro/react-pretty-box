import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ImageGallery from "@/components/imageGallery";

const sampleImages = [
	{ url: "https://example.com/one.jpg", alt: "Imagen uno", figcaption: "Descripción 1" },
	{ url: "https://example.com/two.jpg", alt: "Imagen dos", figcaption: "Descripción 2" }
];

describe("ImageGallery", () => {
	it("permite navegar con flechas dentro del dialogo", async () => {
		const user = userEvent.setup();
		render(<ImageGallery imagesUrl={sampleImages} figcaption />);

		const firstThumbnail = screen.getByRole("button", { name: /imagen uno/i });
		await user.click(firstThumbnail);

		let dialog = await screen.findByRole("dialog", { name: /visor de galería/i });
		let activeImage = within(dialog).getByRole("img", { name: /imagen uno/i });
		expect(activeImage).toBeInTheDocument();

		await user.keyboard("{ArrowRight}");
		dialog = await screen.findByRole("dialog", { name: /visor de galería/i });
		activeImage = within(dialog).getByRole("img", { name: /imagen dos/i });
		expect(activeImage).toBeInTheDocument();

		await user.keyboard("{ArrowLeft}");
		dialog = await screen.findByRole("dialog", { name: /visor de galería/i });
		activeImage = within(dialog).getByRole("img", { name: /imagen uno/i });
		expect(activeImage).toBeInTheDocument();

		await user.keyboard("{Escape}");
		await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
	});
});
