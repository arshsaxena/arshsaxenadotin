'use client';

import { useEffect } from 'react';

export default function SetThemeColor() {
	useEffect(() => {
		const updateThemeColor = () => {
			const isDark = document.documentElement.classList.contains('dark');
			const themeTag = document.querySelector('meta[name="theme-color"]');
			if (themeTag) {
				themeTag.setAttribute(
					'content',
					isDark ? '#0a0a0a' : '#f5f5f7',
				);
			} else {
				const newThemeTag = document.createElement('meta');
				newThemeTag.name = 'theme-color';
				newThemeTag.content = isDark ? '#0a0a0a' : '#f5f5f7';
				document.head.appendChild(newThemeTag);
			}
		};

		// Run once on mount
		updateThemeColor();

		// Watch for changes in <html class="">
		const observer = new MutationObserver(updateThemeColor);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		// Cleanup
		return () => observer.disconnect();
	}, []);

	return null;
}
