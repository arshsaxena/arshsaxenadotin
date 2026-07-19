// components/MadeByArsh/WebProjectsSection.jsx

'use client';

import React, { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import CppIcon from '@/assets/about/skills/cpp.svg';
import NextjsIcon from '@/assets/about/skills/nextjs.svg';
import TailwindcssIcon from '@/assets/about/skills/tailwindcss.svg';
import JavascriptIcon from '@/assets/about/skills/javascript.svg';
import VercelIcon from '@/assets/about/skills/vercel.svg';
import CloudflareIcon from '@/assets/about/skills/cloudflare.svg';
import HtmlIcon from '@/assets/about/skills/html.svg';
import CssIcon from '@/assets/about/skills/css.svg';

import { webProjectsBase } from '@/data/webProjectsBase';

const items = [
	{
		...webProjectsBase.peerroom,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0 rounded-t-[25px] md:rounded-tr-none md:rounded-tl-[25px]',
	},
	{
		...webProjectsBase.airroomtv,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:rounded-tr-[25px]',
	},
	{
		...webProjectsBase.stackshot,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
	{
		...webProjectsBase.vinhance,
		css: 'border-[1px] border-[var(--border-default)] border-b-0',
	},
	{
		...webProjectsBase.gitsort,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
	{
		...webProjectsBase.nptelcompanion,
		css: 'border-[1px] border-[var(--border-default)] border-b-0',
	},
	{
		...webProjectsBase.aeducational,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
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
		css: 'border-[1px] border-[var(--border-default)] rounded-b-[25px] md:rounded-b-none md:rounded-bl-[25px] md:border-r-0',
	},
	{
		...webProjectsBase.weather,
		css: 'border-[1px] border-[var(--border-default)] rounded-b-[25px] md:rounded-b-none md:rounded-br-[25px]',
	},
	// {
	// 	...webProjectsBase.blank,
	// 	css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	// },
	// {
	// 	...webProjectsBase.blank,
	// 	css: 'hidden md:block border-[1px] border-[var(--border-default)] md:rounded-br-[25px]',
	// },
];

const techStyles = {
	'Next.js': {
		bg: 'bg-black text-white border-transparent',
		icon: NextjsIcon,
	},
	'Tailwind CSS': {
		bg: 'bg-[#38b2ac] text-white border-transparent',
		icon: TailwindcssIcon,
	},
	WebRTC: {
		bg: 'bg-[#e33e38] text-white border-transparent',
		icon: 'https://cdn.simpleicons.org/webrtc/fff',
	},
	Cloudflare: {
		bg: 'bg-[#f38020] text-white border-transparent',
		icon: CloudflareIcon,
	},
	'Cloudflare Workers': {
		bg: 'bg-[#f38020] text-white border-transparent',
		icon: CloudflareIcon,
	},
	Swift: {
		bg: 'bg-[#f05138] text-white border-transparent',
		icon: 'https://cdn.simpleicons.org/swift/fff',
	},
	SwiftUI: {
		bg: 'bg-[#f05138] text-white border-transparent',
		icon: null,
	},
	macOS: {
		bg: 'bg-zinc-800 text-white border-transparent',
		icon: 'https://cdn.simpleicons.org/apple/fff',
	},
	ScreenCaptureKit: {
		bg: 'bg-indigo-600 text-white border-transparent',
		icon: null,
	},
	Kotlin: {
		bg: 'bg-[#7f52ff] text-white border-transparent',
		icon: 'https://cdn.simpleicons.org/kotlin/fff',
	},
	'Jetpack Compose': {
		bg: 'bg-[#4285f4] text-white border-transparent',
		icon: 'https://cdn.simpleicons.org/jetpackcompose/fff',
	},
	'Android TV': {
		bg: 'bg-[#3ddc84] text-black border-transparent',
		icon: 'https://cdn.simpleicons.org/android/000',
	},
	'C++': {
		bg: 'bg-[#00599c] text-white border-transparent',
		icon: CppIcon,
	},
	Vercel: {
		bg: 'bg-black text-white border-transparent',
		icon: VercelIcon,
	},
	JavaScript: {
		bg: 'bg-[#f0db4f] text-[#0a0a0a] border-transparent',
		icon: JavascriptIcon,
	},
	HTML: {
		bg: 'bg-[#e34f26] text-white border-transparent',
		icon: HtmlIcon,
	},
	CSS: {
		bg: 'bg-[#3670a0] text-white border-transparent',
		icon: CssIcon,
	},
};

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
	github,
	img,
	screenshots,
	buttonLabel,
	techStack,
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
	const hasGithub = Boolean(github);
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
						className="h-full w-full rounded-[10px] border-[1px] border-[var(--border-default)]"
					/>
					{hasMultipleSlides && currentImage?.caption && (
						<div className="absolute bottom-2 left-2 rounded-[5px] border-[1px] border-[var(--border-default)] bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-xl">
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
									className={`h-[30px] w-[30px] rounded-[6.5px] border-[1px] border-[var(--border-default)] md:h-[35px] md:w-[35px] md:rounded-[7.5px] ${
										label === 'Solar System' ||
										label === 'Colors' ||
										label === 'Weather'
											? 'bg-[#f5f5f7]'
											: ''
									}`}
								/>
							)}
							{hasLabel && label}
						</div>
					</div>
				)}
				{Array.isArray(techStack) && techStack.length > 0 && (
					<div className="flex flex-wrap gap-[6px]">
						{techStack.map((tech) => {
							const style = techStyles[tech] || {
								bg: 'bg-neutral-500 text-white border-transparent',
								icon: null,
							};
							const Icon = style.icon;
							return (
								<span
									key={tech}
									className={`flex items-center gap-1.5 rounded-full border-[1px] px-[10px] py-[2px] text-[11px] font-normal transition-colors md:text-xs ${style.bg}`}
								>
									{Icon &&
										(typeof Icon === 'string' ? (
											<img
												src={Icon}
												alt={tech}
												className="h-3 w-3 select-none"
												loading="lazy"
											/>
										) : (
											<Icon className="h-3 w-3 fill-current" />
										))}
									<span>{tech}</span>
								</span>
							);
						})}
					</div>
				)}
				{(hasDesc1 || hasDesc2) && (
					<div className="md:text-md space-y-5 text-sm">
						{hasDesc1 && <div>{desc1}</div>}
						{hasDesc2 && <div>{desc2}</div>}
					</div>
				)}
			</div>
			{(hasHref || hasGithub) && (
				<div className="flex w-fit gap-2">
					{hasHref && (
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
					)}
					{hasGithub && (
						<Link
							href={github}
							target="_blank"
							className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 pr-[9px] text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
						>
							<span className="text-sm md:text-[15px]">
								Open Source
							</span>
							<ArrowUpRight className={`ml-1 w-[15px]`} />
						</Link>
					)}
				</div>
			)}
		</div>
	);
};

export function WebProjects() {
	return (
		<>
			<div>
				<BentoGrid className="mx-auto md:auto-rows-[20rem]">
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							icon={item.icon}
							label={item.label}
							desc1={item.desc1}
							desc2={item.desc2}
							href={item.href}
							github={item.github}
							img={item.img}
							screenshots={item.screenshots}
							buttonLabel={item.buttonLabel}
							techStack={item.techStack}
							css={item.css}
						/>
					))}
				</BentoGrid>
			</div>
		</>
	);
}
