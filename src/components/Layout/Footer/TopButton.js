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
			className="z-50 ml-2 rounded-full border-[1px] border-[var(--main)] px-[1px] text-[var(--foreground)] hover:bg-[var(--main)] hover:text-[#f5f5f7]"
		>
			<ChevronUp className="h-5 w-5" />
		</button>
	);
}
