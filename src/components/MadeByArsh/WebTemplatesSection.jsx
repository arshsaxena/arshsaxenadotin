// components/MadeByArsh/WebTemplatesSection.jsx

'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { templateData } from '@/data/webTemplatesBase';

export const BentoGrid = ({ children }) => (
	<div className="grid md:grid-cols-2">{children}</div>
);

const Slideshow = ({ screenshots }) => {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => setCurrent((current + 1) % screenshots.length);
	const prevSlide = () =>
		setCurrent((current - 1 + screenshots.length) % screenshots.length);

	const { src, caption } = screenshots[current];

	return (
		<div className="relative w-full">
			<Image
				src={src}
				alt={caption}
				width={800}
				height={600}
				className="h-auto w-full rounded-[15px] border-[1px] border-[var(--border-default)] object-cover"
			/>
			<div className="absolute bottom-2 left-2 rounded-full bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
				{caption}
			</div>
			{screenshots.length > 1 && (
				<>
					<button
						onClick={prevSlide}
						className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-40 p-1"
					>
						<ChevronLeft size={18} className="text-white" />
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-40 p-1"
					>
						<ChevronRight size={18} className="text-white" />
					</button>
				</>
			)}
		</div>
	);
};

export const BentoGridItem = ({
	slug,
	name,
	href,
	screenshots,
	desc,
	features,
	css,
}) => (
	<div
		className={`row-span-1 flex flex-col space-y-5 p-5 text-[var(--foreground)] ${css}`}
	>
		<Slideshow screenshots={screenshots} baseHref={href} />

		<div className="space-y-4">
			<div className="text-2xl font-bold md:text-3xl">{name}</div>
			<div className="md:text-md text-sm">{desc}</div>
			<div>
				<ul className="md:text-md list-inside list-disc space-y-1 text-sm">
					{features.map((feature, i) => (
						<li key={i}>{feature}</li>
					))}
				</ul>
			</div>

			<div className="w-fit">
				<Link
					href={href}
					target="_blank"
					className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 text-[#f5f5f7] hover:bg-[var(--accent)]"
				>
					<span className="text-sm md:text-[15px]">Check Out</span>
					<ArrowUpRight className="ml-1 w-[15px]" />
				</Link>
			</div>
		</div>
	</div>
);

export function WebTemplates() {
	return (
		<div className="rounded-[25px] bg-[var(--surface)]">
			<div className="rounded-t-[25px] border-b-[1px] border-[var(--border-default)] p-5 text-3xl font-black">
				Web Templates
			</div>
			<BentoGrid>
				{templateData.map((item, i) => (
					<BentoGridItem
						key={i}
						slug={item.slug}
						name={item.name}
						href={item.href}
						screenshots={item.screenshots}
						desc={item.desc}
						features={item.features}
						css={item.css}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
