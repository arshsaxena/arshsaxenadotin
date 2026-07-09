// components/Home/AnimatesImgsSection.jsx

'use client';

import { useEffect, useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

import { socialLinksBase } from '@/data/socialLinksBase';
import TypedWords from '@/components/Home/Typed';

const MemoTypedWords = memo(() => <TypedWords strings={['Arsh Saxena']} />);

const ProfileText = memo(({ onPrev, onNext }) => {
	const [year, setYear] = useState(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<div className="flex flex-col justify-between md:pl-8">
			<h3 className="text-[33px] font-bold leading-[50px] text-[var(--foreground)] md:text-[40px]">
				<MemoTypedWords />
			</h3>
			<div className="flex flex-row items-center align-middle text-[15px] font-medium text-[var(--foreground)] md:text-[18px]">
				<div className="mt-5 flex flex-wrap items-center gap-3">
					{[
						socialLinksBase.linkedin,
						socialLinksBase.github,
						socialLinksBase.instagram,
						socialLinksBase.x,
					].map((item, i) => (
						<Link key={i} href={item.href} target="_blank">
							<Image
								src={item.icon}
								width={35}
								height={35}
								alt={item.label}
								className="rounded-[7px]"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="mx-auto mt-5 text-[16.5px] font-medium leading-7 md:text-[19px]">
				Developer, photographer, tech enthusiast, video editor, writer,
				and sneakerhead.
			</div>
			<div className="mt-5 flex w-fit flex-wrap justify-start gap-3">
				{[
					{
						alt: 'boy-using-laptop',
						icon: '/emojis/boy-using-laptop.webp',
					},
					{ alt: 'camera', icon: '/emojis/camera.webp' },
					{ alt: 'laptop', icon: '/emojis/laptop.webp' },
					{ alt: 'movie-camera', icon: '/emojis/movie-camera.webp' },
					{ alt: 'pen', icon: '/emojis/writing.webp' },
					{ alt: 'shoes', icon: '/emojis/shoes.webp' },
				].map((item, i) => (
					<Image
						key={i}
						src={item.icon}
						width={27}
						height={27}
						alt={item.alt}
					/>
				))}
			</div>
			<div className="mt-12 hidden gap-5 md:mt-10 md:flex">
				<button
					onClick={onPrev}
					className="group/button flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] p-[0.5px] text-[#f5f5f7] hover:bg-[var(--accent)]"
				>
					<ChevronLeft className="h-5 w-5 text-[#f5f5f7]" />
				</button>
				<button
					onClick={onNext}
					className="group/button flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] p-[0.5px] text-[#f5f5f7] hover:bg-[var(--accent)]"
				>
					<ChevronRight className="h-5 w-5 text-[#f5f5f7]" />
				</button>
				<Link
					href="/resume"
					className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 pr-2 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
				>
					Resume
					<ArrowUpRight className="ml-1 w-[15px]" />
				</Link>
			</div>
		</div>
	);
});

const AnimatedImgsSection = ({ autoplay = false }) => {
	const imgs = [
		{ src: '/images/img1.webp' },
		{ src: '/images/img2.webp' },
		{ src: '/images/img3.webp' },
		{ src: '/images/img4.webp' },
	];

	const [active, setActive] = useState(0);
	const [rotations, setRotations] = useState([]);

	const handleNext = useCallback(() => {
		setActive((prev) => (prev + 1) % imgs.length);
	}, [imgs.length]);

	const handlePrev = useCallback(() => {
		setActive((prev) => (prev - 1 + imgs.length) % imgs.length);
	}, [imgs.length]);

	const isActive = (index) => index === active;

	useEffect(() => {
		const generated = imgs.map(() => Math.floor(Math.random() * 21) - 10);
		setRotations(generated);
	}, [imgs.length]);

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	if (rotations.length !== imgs.length) return null;

	return (
		<div className="mx-auto max-w-sm px-0 md:max-w-4xl md:px-8 md:py-14 lg:px-12">
			<div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence>
							{imgs.map((img, index) => (
								<motion.div
									key={img.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: rotations[index],
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index)
											? 0
											: rotations[index],
										zIndex: isActive(index)
											? 40
											: imgs.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: rotations[index],
									}}
									transition={{
										duration: 0.5,
										ease: 'easeInOut',
									}}
									className="absolute inset-0 origin-bottom"
								>
									<img
										src={img.src}
										alt={img.name}
										width={500}
										height={500}
										draggable={false}
										className="h-full w-full rounded-3xl object-cover object-center"
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>

					<div className="flex flex-wrap gap-4 pt-12 sm:flex-row md:hidden">
						<div className="flex gap-4 md:hidden">
							<button
								onClick={handlePrev}
								className="group/button flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] p-[0.5px] text-[#f5f5f7] hover:bg-[var(-accent)]"
							>
								<ChevronLeft className="h-5 w-5 text-[#f5f5f7]" />
							</button>
							<button
								onClick={handleNext}
								className="group/button flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] p-[0.5px] text-[#f5f5f7] hover:bg-[var(-accent)]"
							>
								<ChevronRight className="h-5 w-5 text-[#f5f5f7]" />
							</button>
						</div>
						<div>
							<Link
								href="/resume"
								className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
							>
								Resume
								<ArrowUpRight className="ml-1 w-[15px]" />
							</Link>
						</div>
					</div>
				</div>

				<ProfileText onPrev={handlePrev} onNext={handleNext} />
			</div>
		</div>
	);
};

export default AnimatedImgsSection;
