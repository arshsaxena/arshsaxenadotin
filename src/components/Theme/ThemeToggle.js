// components/Theme/ThemeToggle.js

'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [isMounted, setIsMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [currentTheme, setCurrentTheme] = useState('system');

	useEffect(() => {
		setIsMounted(true);

		const storedTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;
		const initialTheme = storedTheme || 'system';
		const initialDark = storedTheme
			? storedTheme === 'dark'
			: systemPrefersDark;

		document.documentElement.classList.toggle('dark', initialDark);
		setIsDark(initialDark);
		setCurrentTheme(initialTheme);

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e) => {
			if (!localStorage.getItem('theme')) {
				const newSystemDark = e.matches;
				document.documentElement.classList.toggle(
					'dark',
					newSystemDark,
				);
				setIsDark(newSystemDark);
				setCurrentTheme('system');
			}
		};

		mediaQuery.addEventListener('change', handleSystemChange);
		return () =>
			mediaQuery.removeEventListener('change', handleSystemChange);
	}, []);

	const setTheme = (theme) => {
		if (theme === 'system') {
			localStorage.removeItem('theme');
			const systemDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			document.documentElement.classList.toggle('dark', systemDark);
			setIsDark(systemDark);
		} else {
			const newIsDark = theme === 'dark';
			document.documentElement.classList.toggle('dark', newIsDark);
			localStorage.setItem('theme', theme);
			setIsDark(newIsDark);
		}
		setCurrentTheme(theme);
	};

	const buttonClass = (theme) => {
		const isSelected = currentTheme === theme;
		return `
            px-2 rounded-full flex items-center gap-2
            ${isSelected ? 'bg-[var(--main)] dark:bg-[var(--main)] text-[#f5f5f7]' : 'pointer hover:bg-[var(--accent)] hover:text-[#f5f5f7]'}
        `;
	};

	if (!isMounted) return null;

	return (
		<div className="flex flex-col items-start gap-2 text-xs">
			<div className="flex flex-row space-x-1 rounded-full border border-solid border-[var(--main)] p-[2px]">
				<button
					onClick={() => setTheme('light')}
					className={buttonClass('light')}
				>
					Light
				</button>
				<button
					onClick={() => setTheme('dark')}
					className={buttonClass('dark')}
				>
					Dark
				</button>
				<button
					onClick={() => setTheme('system')}
					className={buttonClass('system')}
				>
					Auto
				</button>
			</div>
		</div>
	);
}
