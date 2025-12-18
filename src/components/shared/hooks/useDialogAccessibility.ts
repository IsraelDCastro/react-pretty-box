import { useCallback, useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";

const FOCUSABLE_SELECTORS = [
	"a[href]",
	"button:not([disabled])",
	"textarea:not([disabled])",
	"input:not([type='hidden']):not([disabled])",
	"select:not([disabled])",
	"[tabindex]:not([tabindex='-1'])"
].join(",");

interface UseDialogAccessibilityOptions {
	isOpen: boolean;
	onClose: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
}

export function useDialogAccessibility({ isOpen, onClose, onNext, onPrevious }: UseDialogAccessibilityOptions) {
	const dialogRef = useRef<HTMLDivElement | null>(null);
	const triggerRef = useRef<HTMLElement | null>(null);
	const previousBodyOverflow = useRef<string>("");

	useEffect(() => {
		if (!isOpen) return undefined;

		const activeElement = document.activeElement as HTMLElement | null;
		if (activeElement) {
			triggerRef.current = activeElement;
		}

		previousBodyOverflow.current = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const frame = requestAnimationFrame(() => {
			dialogRef.current?.focus();
		});

		return () => {
			cancelAnimationFrame(frame);
			document.body.style.overflow = previousBodyOverflow.current;
		};
	}, [isOpen]);

	useEffect(() => {
		if (isOpen || !triggerRef.current) return;

		triggerRef.current.focus();
		triggerRef.current = null;
	}, [isOpen]);

	const maintainFocus = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
		if (event.key !== "Tab" || !dialogRef.current) return;

		const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
		if (focusable.length === 0) {
			event.preventDefault();
			dialogRef.current.focus();
			return;
		}

		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (event.shiftKey) {
			if (document.activeElement === first) {
				event.preventDefault();
				last.focus();
			}
			return;
		}

		if (document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}, []);

	const handleKeyDown = useCallback(
		(event: ReactKeyboardEvent<HTMLDivElement>) => {
			switch (event.key) {
				case "Escape":
					event.preventDefault();
					onClose();
					return;
				case "ArrowLeft":
					if (onPrevious) {
						event.preventDefault();
						onPrevious();
					}
					break;
				case "ArrowRight":
					if (onNext) {
						event.preventDefault();
						onNext();
					}
					break;
				default:
					break;
			}

		maintainFocus(event);
		},
		[maintainFocus, onClose, onNext, onPrevious]
	);

	return {
		dialogProps: {
			ref: dialogRef,
			tabIndex: -1 as const,
			role: "dialog" as const,
			"aria-modal": true,
			onKeyDown: handleKeyDown
		}
	};
}
