// components/Home/MadeByArshSection.jsx

import Image from 'next/image';
import Link from 'next/link';

import { webProjectsBase } from '@/data/webProjectsBase';

import { ChevronRight, ArrowUpRight } from 'lucide-react';

const iconMap = { ChevronRight, ArrowUpRight };

export default function MadeByArshSection() {
	const items = [
		{
			...webProjectsBase.peerroom,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
		},
		{
			...webProjectsBase.stackshot,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
		},
		{
			...webProjectsBase.airroomtv,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
		},
		{
			...webProjectsBase.vinhance,
			buttonLabel: 'Chrome Web Store',
			buttonIcon: 'ArrowUpRight',
		},
		{
			...webProjectsBase.nptelcompanion,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
		},
		{
			...webProjectsBase.aeducational,
			buttonLabel: 'Check Out',
			buttonIcon: 'ArrowUpRight',
		},
	];

	return (
		<>
			<div className="mx-auto grid grid-cols-1 justify-between gap-2 md:grid-cols-2">
				{items.map((item, i) => {
					const ButtonIcon = iconMap[item.buttonIcon];

					return (
						<div
							key={i}
							className={`items-top flex flex-row justify-between ${item.containerCss} rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-3`}
						>
							{item.icon && (
								<Image
									src={item.icon}
									width={0}
									height={0}
									alt={item.label}
									className={`h-[80px] w-[80px] rounded-[15px] border-[1px] border-[var(--border-default)] bg-[#f5f5f7] align-middle ${item.css}`}
								/>
							)}
							<div className="w-full">
								<div className="ml-3 md:ml-5">
									<div className="text-[17px] font-bold md:text-[23px]">
										{item.label}
									</div>
									<div className="text-[12px] md:text-[13px]">
										{item.tagLine}
									</div>
								</div>
								<div
									className={`mt-3 flex w-full justify-end sm:mt-0 ${item.linkContainerCSS}`}
								>
									<Link
										href={item.href}
										target={item.target ?? '_blank'}
										className={`flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 pr-2.5 text-center text-[#f5f5f7] hover:bg-[var(--accent)] ${item.linkCSS}`}
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
