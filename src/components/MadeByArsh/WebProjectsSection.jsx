// components/MadeByArsh/WebProjectsSection.jsx

'use client';

import React, { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { webProjectsBase } from '@/data/webProjectsBase';

const items = [
	{
		...webProjectsBase.nptelcompanion,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
	{
		...webProjectsBase.vinhance,
		css: 'border-[1px] border-[var(--border-default)] border-b-0',
	},
	{
		...webProjectsBase.aeducational,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
	// {
	// 	...webProjectsBase.vitcfacultyinfo,
	// 	css: 'border-[1px] border-[var(--border-default)] border-b-0',
	// },
	{
		...webProjectsBase.aconverter,
		css: 'border-[1px] border-[var(--border-default)] border-b-0',
	},
	{
		...webProjectsBase.solarsystem,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
	{
		...webProjectsBase.colors,
		css: 'border-[1px] border-[var(--border-default)] border-b-0',
	},
	{
		...webProjectsBase.qr,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-b-[1px]  md:border-r-0',
	},
	{
		...webProjectsBase.weather,
		css: 'border-[1px] border-[var(--border-default)]',
	},
	// {
	// 	...webProjectsBase.blank,
	// 	css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	// },
	// {
	// 	...webProjectsBase.blank,
	// 	css: 'border-[1px] border-[var(--border-default)]',
	// },
];

export const BentoGrid = ({ children }) => {
	return (
		<>
			<div className="grid md:grid-cols-2">{children}</div>
		</>
	);
};

export const BentoGridItem = ({
	icon,
	label,
	desc1,
	desc2,
	href,
	img,
	screenshots,
	buttonLabel,
	css,
}) => {
	const imageSources = useMemo(() => {
		if (Array.isArray(screenshots) && screenshots.length > 0) {
			return screenshots;
		}

		if (img) {
			return [{ src: img, caption: label || 'Project image' }];
		}

		return [];
	}, [screenshots, img, label]);

	const [currentSlide, setCurrentSlide] = useState(0);
	const hasGallery = imageSources.length > 0;
	const hasMultipleSlides = imageSources.length > 1;
	const currentImage = hasGallery ? imageSources[currentSlide] : null;

	useEffect(() => {
		if (!hasMultipleSlides) {
			return;
		}

		imageSources.forEach((shot) => {
			const preloadImage = new window.Image();
			preloadImage.src = shot.src;
		});
	}, [hasMultipleSlides, imageSources]);

	const hasImage = Boolean(img);
	const hasIcon = Boolean(icon);
	const hasLabel = Boolean(label);
	const hasDesc1 = Boolean(desc1);
	const hasDesc2 = Boolean(desc2);
	const hasHref = Boolean(href);
	const ctaLabel = buttonLabel || 'Check Out';

	const goToNextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % imageSources.length);
	};

	const goToPrevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + imageSources.length) % imageSources.length,
		);
	};

	return (
		<div
			className={`row-span-1 flex h-full flex-col space-y-5 p-5 text-[var(--foreground)] ${css}`}
		>
			{(hasImage || hasGallery) && (
				<div className="relative w-full md:w-full">
					<Image
						src={currentImage?.src || img}
						alt={currentImage?.caption || label || 'Project image'}
						width={0}
						height={0}
						className="h-full w-full rounded-[15px] border-[1px] border-[var(--border-default)]"
					/>
					{hasMultipleSlides && currentImage?.caption && (
						<div className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
							{currentImage.caption}
						</div>
					)}
					{hasMultipleSlides && (
						<>
							<button
								onClick={goToPrevSlide}
								className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1"
								aria-label="Previous screenshot"
							>
								<ChevronLeft size={18} className="text-white" />
							</button>
							<button
								onClick={goToNextSlide}
								className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1"
								aria-label="Next screenshot"
							>
								<ChevronRight
									size={18}
									className="text-white"
								/>
							</button>
						</>
					)}
				</div>
			)}
			<div className="flex h-full w-full flex-col space-y-5">
				{(hasIcon || hasLabel) && (
					<div className="text-2xl font-bold md:text-3xl">
						<div className="flex items-start gap-2">
							{hasIcon && (
								<Image
									src={icon}
									width={0}
									height={0}
									alt={label || 'Project icon'}
									className={`h-[30px] w-[30px] rounded-[6.5px] border-[0.5px] border-[var(--border-default)] bg-[#f5f5f7] md:h-[35px] md:w-[35px] md:rounded-[7.5px]`}
								/>
							)}
							{hasLabel && label}
						</div>
					</div>
				)}
				{(hasDesc1 || hasDesc2) && (
					<div className="md:text-md space-y-5 text-sm">
						{hasDesc1 && <div>{desc1}</div>}
						{hasDesc2 && <div>{desc2}</div>}
					</div>
				)}
			</div>
			{hasHref && (
				<div className="w-fit">
					<Link
						href={href}
						target="_blank"
						className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 pr-[9px] text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
					>
						<span className="text-sm md:text-[15px]">
							{ctaLabel}
						</span>
						<ArrowUpRight className={`ml-1 w-[15px]`} />
					</Link>
				</div>
			)}
		</div>
	);
};

export function WebProjects() {
	return (
		<>
			<div>
				<div className="rounded-t-[25px] border-[1px] border-b-0 border-[var(--border-default)] p-5 text-3xl font-black">
					Projects
				</div>
				<BentoGrid className="mx-auto md:auto-rows-[20rem]">
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							icon={item.icon}
							label={item.label}
							desc1={item.desc1}
							desc2={item.desc2}
							href={item.href}
							img={item.img}
							screenshots={item.screenshots}
							buttonLabel={item.buttonLabel}
							css={item.css}
						/>
					))}
				</BentoGrid>
			</div>
		</>
	);
}
