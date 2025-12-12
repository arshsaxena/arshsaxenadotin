// components/MadeByArsh/PythonProjectsSection.jsx

'use client';

import React, { useEffect, useRef, useState } from 'react';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const PythonProjects = ({ initialScroll = 0 }) => {
	const cardData = [
		{
			title: 'Sudoku with Solver',
			category: 'Game',
			src: '/made-by-arsh/python-projects/sudoku.webp',
			desc: 'Three difficulty levels. Auto-solver.',
			href: 'https://github.com/arshsaxena/PythonGamesAndProjects/tree/main/Sudoku%20with%20Solver',
		},
		{
			title: 'Truck VS Car',
			category: 'Game',
			src: '/made-by-arsh/python-projects/truck-vs-car.webp',
			desc: 'Three difficulty levels. Health bar. Morning-afternoon-evening-night. Background music.',
			href: 'https://github.com/arshsaxena/PythonGamesAndProjects/tree/main/Truck%20VS%20Car',
		},
		{
			title: 'Typing Speed Calucator',
			category: 'Utility',
			src: '/made-by-arsh/python-projects/typing-speed-calculator.webp',
			desc: 'Live typing indicator. Tells WPM. Tells accuracy..',
			href: 'https://github.com/arshsaxena/PythonGamesAndProjects/tree/main/Typing%20Speed%20Calculator',
		},
		{
			title: 'Ping-Pong',
			category: 'Game',
			src: '/made-by-arsh/python-projects/ping-pong.webp',
			desc: 'Three speed difficulty levels. Increase in speed with score..',
			href: 'https://github.com/arshsaxena/PythonGamesAndProjects/tree/main/Ping-Pong',
		},
		{
			title: 'Space Invaders',
			category: 'Game',
			src: '/made-by-arsh/python-projects/space-invaders.webp',
			desc: 'Interactive.',
			href: 'https://github.com/arshsaxena/PythonGamesAndProjects/tree/main/Space%20Invaders',
		},
		{
			title: 'Snake',
			category: 'Game',
			src: '/made-by-arsh/python-projects/snake.webp',
			desc: 'Classic.',
			href: 'https://github.com/arshsaxena/PythonGamesAndProjects/tree/main/Snake',
		},
	];
	const items = cardData.map((card, index) => (
		<Card
			key={card.title}
			index={index}
			layout={false}
			card={{
				...card,
				desc: <p>{card.desc}</p>,
			}}
		/>
	));
	const carouselRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
		}
	};

	return (
		<div className="relative w-full py-5">
			<div className="border-b-[1px] border-[var(--border-default)] px-5 pb-5 text-3xl font-black">
				Python Projects
			</div>
			<div className="p-5 pb-7 text-[var(--foreground)]">
				<div className="text-xs italic md:text-sm">
					To run any of the Python projects, just download them, open
					your Terminal or Command Prompt in the project folder, type{' '}
					<span className="whitespace-nowrap rounded-full bg-[var(--accent)] px-[5px] py-[0px] font-mono not-italic text-[#0a0a0a] md:px-[10px]">
						python3 [file name].py
					</span>
					, and hit ENTER.
				</div>
			</div>
			<div
				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-5 [scrollbar-width:none]"
				ref={carouselRef}
				onScroll={checkScrollability}
			>
				<div
					className={cn(
						'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l',
					)}
				/>
				<div
					className={cn(
						'flex flex-row justify-start gap-4 pl-5',
						'mx-auto max-w-7xl',
					)}
				>
					{items.map((item, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
									delay: 0.2 * index,
									ease: 'easeOut',
									once: true,
								},
							}}
							key={'card' + index}
							className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
						>
							{item}
						</motion.div>
					))}
				</div>
			</div>
			<div className="mr-5 flex justify-end gap-2">
				<button
					className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] hover:bg-[var(--accent)] disabled:opacity-50"
					onClick={scrollLeft}
					disabled={!canScrollLeft}
				>
					<ChevronLeft className="h-7 w-7 text-[#f5f5f7]" />
				</button>
				<button
					className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] hover:bg-[var(--accent)] disabled:opacity-50"
					onClick={scrollRight}
					disabled={!canScrollRight}
				>
					<ChevronRight className="h-7 w-7 text-[#f5f5f7]" />
				</button>
			</div>
		</div>
	);
};

export const Card = ({ card }) => {
	return (
		<div className="relative z-10 flex h-80 w-60 flex-col items-start justify-start overflow-hidden rounded-[20px] border-[1px] border-[var(--border-default)] bg-[#0a0a0a] md:h-[20rem] md:w-96">
			<div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
			<div className="relative z-40 flex h-full flex-col justify-between p-3 md:p-5">
				<div className="space-y-2">
					<div className="w-fit rounded-full bg-[var(--main)] px-2 py-[2px] text-left text-xs text-[#f5f5f7]">
						{card.category}
					</div>
					<div className="max-w-xs text-left font-sans text-xl font-bold text-white [text-wrap:balance] md:text-2xl">
						{card.title}
					</div>
					<div className="text-left text-[12px] text-[#f5f5f7] md:text-[14px]">
						{card.desc}
					</div>
				</div>
				<div className="text-left text-[12px] text-[#f5f5f7] md:text-[15px]">
					<Link
						href={card.href}
						target="_blank"
						className="flex w-fit items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-2 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
					>
						<span className="">Get Now</span>
						<ArrowUpRight
							className={`ml-1 w-[16px] ${card.buttonCss}`}
						/>
					</Link>
				</div>
			</div>
			<BlurImage
				src={card.src}
				alt={card.title}
				fill
				className="absolute inset-0 z-10 object-cover"
			/>
		</div>
	);
};

export const BlurImage = ({
	height,
	width,
	fill,
	src,
	className,
	alt,
	...rest
}) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<Image
			className={cn('opacity-40 blur-[1.5px]', className)}
			onLoad={() => setLoading(false)}
			src={src}
			alt={alt}
			loading="lazy"
			decoding="async"
			{...(fill ? { fill: true } : { width, height })}
			{...rest}
		/>
	);
};
