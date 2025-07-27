// components/MadeByArsh/WebMiniProjectsSection.jsx

import React from 'react';

import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

const rawMiniProjects = [
	{
		slug: 'tic-tac-toe',
		name: 'Tic-Tac-Toe',
		css: 'pt-0 border-b-[1px] border-[var(--border-default)]',
	},
	{
		slug: 'ping-pong',
		name: 'Ping-Pong',

		css: 'border-b-[1px] border-[var(--border-default)]',
	},
	{
		slug: 'stopwatch',
		name: 'Stopwatch',
		css: 'border-b-[1px] border-[var(--border-default)]',
	},
	{
		slug: 'rock-paper-scissors',
		name: 'Rock Paper Scissors',
		css: 'border-b-[1px] border-[var(--border-default)]',
	},
	{
		slug: 'snake',
		name: 'Snake',
		css: 'pb-0',
	},
];

export const miniProjects = rawMiniProjects.map((item) => ({
	...item,
	href: `/made-by-arsh/web-projects/${item.slug}`,
}));

export const WebMiniProjects = () => {
	return (
		<div className="rounded-b-[25px] border-[1px] border-t-0 border-[var(--border-default)] p-5">
			<div className="mb-5 text-xs italic md:text-sm">
				The following projects are best experienced on a desktop. They
				may not work properly on smaller screens. For the best
				experience, please switch to desktop mode.
			</div>
			{miniProjects.map((project) => (
				<div
					key={project.slug}
					className={`flex flex-col justify-between py-5 sm:flex-row ${project.css}`}
				>
					<div className="text-2xl font-bold">{project.name}</div>
					<div className="mt-2 flex items-center sm:mt-0">
						<Link
							href={project.href}
							target="_blank"
							className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
						>
							<span className="text-sm md:text-[15px]">
								Check Out
							</span>
							<ArrowUpRight
								className={`ml-1 w-[15px] ${project.buttonCss}`}
							/>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};
