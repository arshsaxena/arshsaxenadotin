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
            className="z-50 rounded-full px-[1px] text-[var(--foreground)] ml-2 border-[1px] border-[var(--main)] hover:bg-[var(--main)] hover:text-[#f5f5f7]"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    );
}