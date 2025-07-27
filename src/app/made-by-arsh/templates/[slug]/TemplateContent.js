// app/made-by-arsh/templates/[slug]/TemplateContent.js

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = ({ screenshots }) => {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => setCurrent((current + 1) % screenshots.length);
	const prevSlide = () =>
		setCurrent((current - 1 + screenshots.length) % screenshots.length);

	const { src, caption } = screenshots[current];

	return (
		<div className="relative mb-6 w-full">
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

export default function TemplateContent({ template }) {
	return (
		<div className="m-auto max-w-[980px]">
			<div className="text-md mx-5 my-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
				<div className="mb-6 text-3xl font-bold">{template.name}</div>

				<div className="mb-6 text-[var(--muted-foreground)]">
					{template.desc}
				</div>

				<Slideshow screenshots={template.screenshots} />

				<div className="mb-2 text-2xl font-bold">Features</div>
				<div>
					<ul className="text-md mb-6 list-inside list-disc">
						{template.features.map((f, idx) => (
							<li key={idx} className="mb-2">
								{f}
							</li>
						))}
					</ul>
				</div>

				<a
					href={template.downloadLink}
					download
					className="flex w-fit items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-4 py-2 pl-3 text-sm text-[#f5f5f7] hover:bg-[var(--accent)]"
				>
					<Download className="mr-1 h-4" />{' '}
					<div>Download ({template.size})</div>
				</a>
			</div>
		</div>
	);
}
