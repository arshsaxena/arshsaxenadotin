// components/Layout/Footer/TopButton.js

'use client';

import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			onClick={scrollToTop}
			title="Go to top"
			aria-label="Go to top"
			className="z-50 ml-2 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--main)] text-[var(--foreground)] transition-colors hover:bg-[var(--main)] hover:text-[#f5f5f7]"
		>
			<ChevronUp className="h-4 w-4" />
		</button>
	);
}
