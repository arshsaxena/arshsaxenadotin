// components/MadeByArsh/WebProjectsSection.jsx

'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import { webProjectsBase } from '@/data/webProjectsBase';

const items = [
	{
		...webProjectsBase.nptelcompanion,
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-r-0',
	},
	{
		...webProjectsBase.vitcfacultyinfo,
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
		css: 'border-[1px] border-[var(--border-default)] border-b-0 md:border-b-[1px] md:border-r-0',
	},
	{
		...webProjectsBase.weather,
		css: 'border-[1px] border-[var(--border-default)]',
	},
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
	css,
}) => {
	return (
		<div
			className={`row-span-1 flex h-full flex-col space-y-5 p-5 text-[var(--foreground)] ${css}`}
		>
			<div className="w-full md:w-full">
				<Image
					src={img}
					alt={label}
					width={0}
					height={0}
					className="h-full w-full rounded-[15px] border-[1px] border-[var(--border-default)]"
				/>
			</div>
			<div className="flex h-full w-full flex-col space-y-5">
				<div className="text-2xl font-bold md:text-3xl">
					<div className="flex items-start gap-2">
						<Image
							src={icon}
							width={0}
							height={0}
							alt={label}
							className={`h-[30px] w-[30px] rounded-[6.5px] bg-[#f5f5f7] md:h-[35px] md:w-[35px] md:rounded-[7.5px]`}
						/>
						{label}
					</div>
				</div>
				<div className="md:text-md space-y-5 text-sm">
					<div>{desc1}</div>
					<div>{desc2}</div>
				</div>
			</div>
			<div className="w-fit">
				<Link
					href={href}
					target="_blank"
					className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
				>
					<span className="text-sm md:text-[15px]">Check Out</span>
					<ArrowUpRight className={`ml-1 w-[15px]`} />
				</Link>
			</div>
		</div>
	);
};

export function WebProjects() {
	return (
		<>
			<div>
				<div className="rounded-t-[25px] border-[1px] border-b-0 border-[var(--border-default)] p-5 text-3xl font-black">
					Web Projects
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
							css={item.css}
						/>
					))}
				</BentoGrid>
			</div>
		</>
	);
}
