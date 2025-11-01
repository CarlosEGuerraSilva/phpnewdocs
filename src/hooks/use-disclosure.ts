import { useState } from "react";

export function useDisclosure(
	initialValue: boolean = false
): {
	/** Indicates open state. */
	open: boolean;
	/** Set open state. */
	setOpen: (value: boolean) => void;
	/** Toggle open state. */
	toggleOpen: () => void;
} {
	const [open, setOpen] = useState<boolean>(initialValue);
	const toggleOpen = () => {
		setOpen((prev) => !prev);
	}
	return { open, setOpen, toggleOpen };
}
