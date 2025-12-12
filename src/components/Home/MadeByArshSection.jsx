// components/Home/MadeByArshSection.jsx

import Image from 'next/image';
import Link from 'next/link';

import { webProjectsBase } from '@/data/webProjectsBase';

import { ChevronRight, ArrowUpRight } from 'lucide-react';

const iconMap = { ChevronRight, ArrowUpRight };

export default function MadeByArshSection() {
	const items = [
		// {
		// 	href: '/',
		// 	label: 'Arsh Saxena',
		// 	tagLine: 'Official app.',
		// 	icon: '/made-by-arsh/web-projects/icons/arshsaxena-app-icon.webp',
		// 	buttonLabel: 'Coming Soon',
		// 	// buttonIcon: 'ChevronRight',
		// 	containerCss:
		// 		'pb-5 border-b-[1px] border-b-[var(--border-default)]',
		// },
		{
			...webProjectsBase.nptelcompanion,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'pb-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.vitcfacultyinfo,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.aeducational,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.aconverter,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.solarsystem,
			css: 'p-[2px]',
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.colors,
			css: 'p-[2px]',
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.qr,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			...webProjectsBase.weather,
			css: 'p-[0.5px]',
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
			containerCss: 'pt-5',
		},
	];

	return (
		<>
			<div className="mx-auto flex flex-col justify-between">
				{items.map((item, i) => {
					const ButtonIcon = iconMap[item.buttonIcon];

					return (
						<div
							key={i}
							className={`flex flex-row justify-between md:items-end ${item.containerCss}`}
						>
							<Image
								src={item.icon}
								width={0}
								height={0}
								alt={item.label}
								className={`h-[70px] w-[70px] rounded-[15px] border-[1px] border-[var(--border-default)] bg-[#f5f5f7] md:h-[80px] md:w-[80px] ${item.css}`}
							/>
							<div className="w-full">
								<div className="ml-3 md:ml-5">
									<div className="text-[17px] font-bold md:text-[23px]">
										{item.label}
									</div>
									<div className="text-sm">
										{item.tagLine}
									</div>
								</div>
								<div className="mt-5 flex w-full justify-end sm:mt-0">
									<Link
										href={item.href}
										target="_blank"
										className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
									>
										<span className="text-sm md:text-[15px]">
											{item.buttonLabel}
										</span>
										{ButtonIcon && (
											<ButtonIcon
												className={`ml-1 w-[15px] ${item.buttonCss}`}
											/>
										)}
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
