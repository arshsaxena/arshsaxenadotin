// components/Layout/Footer/Footer.js

'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { socialLinksBase } from '@/data/socialLinksBase';
import SocialLink from './SocialLinks';
import { webProjectsBase } from '@/data/webProjectsBase';
import MadebyArshLink from './MadebyArshLinks';

import ThemeToggle from '@/components/Theme/ThemeToggle';
import TopButton from '@/components/Layout/Footer/TopButton';

export default function Footer() {
	const [timeString, setTimeString] = useState('');
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const showTime = () => {
			const time = new Date();
			const month = time.toLocaleString('default', {
				month: 'long',
			});
			const date = time.getDate();
			const year = time.getFullYear();
			let hour = time.getHours();
			let min = time.getMinutes();
			let sec = time.getSeconds();
			let am_pm = 'AM';

			if (hour > 12) {
				hour -= 12;
				am_pm = 'PM';
			} else if (hour === 0) {
				hour = 12;
			}

			const formattedTime = `${month} ${date}, ${year} • ${
				hour < 10 ? '0' + hour : hour
			}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec} ${am_pm}`;

			setTimeString(formattedTime);
			setYear(year);
		};

		showTime();
		const interval = setInterval(showTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="m-auto w-full max-w-[980px]">
				<div className="mb-0 border-t-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 text-sm dark:border-[var(--border-default)] dark:bg-[var(--surface)] md:m-5 md:mb-0 md:mt-0 md:rounded-t-[25px] md:border-[1px] md:border-b-0">
					<div className="grid grid-cols-2 gap-6 md:grid-cols-3">
						<div>
							<h3 className="text-md mb-3 font-semibold">
								Discover
							</h3>
							<div className="flex flex-col space-y-2 text-[var(--muted)]">
								<Link
									href="/about"
									className="hover:text-[var(--accent)]"
								>
									About
								</Link>
								<Link
									href="/resume"
									className="hover:text-[var(--accent)]"
								>
									Resume
								</Link>
								<Link
									href="/connect"
									className="hover:text-[var(--accent)]"
								>
									Connect
								</Link>
							</div>
						</div>

						<div>
							<h3 className="text-md mb-3 font-semibold">
								Made by Arsh
							</h3>
							<div className="flex flex-col space-y-2 text-[var(--muted)]">
								{[
									...Object.values(webProjectsBase),
									{
										href: '/made-by-arsh/#templates',
										label: 'Templates',
									},
								].map((item, i) => (
									<MadebyArshLink
										key={i}
										href={item.href}
										label={item.label}
										target={item.target}
									/>
								))}
							</div>
						</div>

						<div>
							<h3 className="text-md mb-3 font-semibold">
								Social
							</h3>
							<div className="flex flex-col space-y-2 text-[var(--muted)]">
								{Object.values(socialLinksBase).map(
									(item, i) => (
										<SocialLink
											key={i}
											href={item.href}
											src={item.icon}
											alt={item.label}
											label={item.label}
										/>
									),
								)}
							</div>
						</div>
					</div>
					<div className="mt-10 space-y-5">
						<div className="flex flex-col justify-between space-y-5 border-b-[1px] border-b-[var(--border-default)] pb-3 md:flex-row md:space-y-0 md:pb-5">
							<div>{timeString}</div>
							<div>Copyright © {year} Arsh Saxena.</div>
						</div>
					</div>
					<div className="mt-5 space-y-5">
						<div className="flex flex-col justify-between space-y-5 pb-3 sm:flex-row sm:space-y-0 sm:pb-5">
							<div className="flex items-center align-middle font-black">
								Made with &nbsp;
								<Image
									src="/emojis/heart.webp"
									width={17}
									height={17}
									alt="heart"
								/>
								&nbsp; in India.
							</div>
							<div className="flex justify-between align-middle">
								<ThemeToggle />
								<TopButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
