// components/Common/AnimateBackground.jsx

'use client';

import { useEffect, useRef, useState } from 'react';

import { GradientBackground } from 'react-gradient-animation';

export default function AnimatedBackground() {
	const [mounted, setMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const wrapperRef = useRef(null);
	const [staticImage, setStaticImage] = useState(null);

	useEffect(() => {
		setMounted(true);

		const getTheme = () => {
			const storedTheme = localStorage.getItem('theme');
			const systemPrefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			return (
				storedTheme === 'dark' || (!storedTheme && systemPrefersDark)
			);
		};

		setIsDark(getTheme());

		const observer = new MutationObserver(() => {
			const isNowDark =
				document.documentElement.classList.contains('dark');
			setIsDark(isNowDark);
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		const timeout = setTimeout(() => {
			const canvas = wrapperRef.current?.querySelector('canvas');
			if (canvas) {
				const dataURL = canvas.toDataURL();
				setStaticImage(dataURL);
			}
		}, 5000);

		return () => {
			observer.disconnect();
			clearTimeout(timeout);
		};
	}, []);

	if (!mounted) return null;

	const backgroundColor = isDark ? '#0a0a0a' : '#f5f5f7';
	const particleColors = isDark
		? ['#0a0a0a', '#0a0a0a', '#22c55e']
		: ['#f5f5f7', '#22c55e', '#22c55e'];

	return (
		<div
			ref={wrapperRef}
			style={{
				position: 'fixed',
				inset: 0,
				height: '100dvh',
				zIndex: -1,
				overflow: 'hidden',
			}}
		>
			{!staticImage && (
				<GradientBackground
					count={20}
					size={{ min: 500, max: 750, pulse: 0.5 }}
					speed={{ x: { min: 0.5, max: 2 }, y: { min: 0.5, max: 2 } }}
					colors={{
						background: backgroundColor,
						particles: particleColors,
					}}
					blending="overlay"
					opacity={{ center: 0.5, edge: 0 }}
				/>
			)}
			{staticImage && (
				<img
					src={staticImage}
					alt="Static Background"
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			)}
		</div>
	);
}
