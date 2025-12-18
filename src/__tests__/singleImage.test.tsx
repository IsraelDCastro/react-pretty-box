import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SingleImage from "@/components/singleImage";
import { axe } from "jest-axe";

describe("SingleImage", () => {
	it("abre el dialogo con teclado, no registra violaciones de accesibilidad y restaura el foco al cerrar", async () => {
		const user = userEvent.setup();
		const { container } = render(<SingleImage imageUrl="https://example.com/photo.jpg" alt="Fotografía de prueba" />);

		const accessibilityReport = await axe(container);
		expect(accessibilityReport).toHaveNoViolations();

		const trigger = screen.getByRole("button", { name: /abrir visor/i });
		trigger.focus();
		await user.keyboard("{Enter}");

		const dialog = await screen.findByRole("dialog", { name: /vista ampliada/i });
		expect(dialog).toBeInTheDocument();

		await user.keyboard("{Escape}");
		await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
		await waitFor(() => expect(document.activeElement).toBe(trigger));
	});
});
