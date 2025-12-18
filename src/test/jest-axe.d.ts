import "vitest";

declare module "vitest" {
	interface Assertion<T = any> {
		toHaveNoViolations(): T extends Promise<unknown> ? Promise<void> : void;
	}

	interface AsymmetricMatchersContaining {
		toHaveNoViolations(): void;
	}
}
