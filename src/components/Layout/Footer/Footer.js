'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import SocialLink from './SocialLinks';
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

		showTime(); // Initial call
		const interval = setInterval(showTime, 1000); // Update every second
		return () => clearInterval(interval); // Cleanup
	}, []);

	return (
		<>
			<div className="m-auto w-full max-w-[980px]">
				<div className="mb-0 border-t-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 text-sm dark:border-[var(--border-default)] dark:bg-[var(--surface)] md:m-5 md:mb-0 md:mt-0 md:rounded-t-[25px] md:border-[1px] md:border-b-0">
					<div className="grid grid-cols-2 gap-6 md:grid-cols-3">
						{/* Column 1 - Discover */}
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
									href="/connect"
									className="hover:text-[var(--accent)]"
								>
									Connect
								</Link>
							</div>
						</div>

						{/* Column 2 - Made By Arsh */}
						<div>
							<h3 className="text-md mb-3 font-semibold">
								Made By Arsh
							</h3>
							<div className="flex flex-col space-y-2 text-[var(--muted)]">
								{[
									{
										href: 'https://education.arshsaxena.in/',
										label: 'aEducational',
										target: '_blank',
									},
									{
										href: 'https://converter.arshsaxena.in/',
										label: 'aConverter',
										target: '_blank',
									},
									{
										href: 'https://solarsystem.arshsaxena.in/',
										label: 'Solar System',
										target: '_blank',
									},
									{
										href: 'https://colors.arshsaxena.in/',
										label: 'Colors',
										target: '_blank',
									},
									{
										href: 'https://qr.arshsaxena.in/',
										label: 'QR Code Generator',
										target: '_blank',
									},
									{
										href: 'https://weather.arshsaxena.in/',
										label: 'Weather',
										target: '_blank',
									},
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

						{/* Column 3 - Social */}
						<div>
							<h3 className="text-md mb-3 font-semibold">
								Social
							</h3>
							<div className="flex flex-col space-y-2 text-[var(--muted)]">
								{[
									{
										href: 'https://linkedin.com/in/arshsaxena',
										label: 'LinkedIn',
										icon: '/social/linkedin.webp',
										alt: 'LinkedIn',
									},
									{
										href: 'https://github.com/arshsaxena',
										label: 'GitHub',
										icon: '/social/github.webp',
										alt: 'GitHub',
									},
									{
										href: 'https://instagram.com/arsh.saxena02',
										label: 'Instagram',
										icon: '/social/instagram.webp',
										alt: 'Instagram',
									},
									{
										href: 'https://x.com/arshsaxena02',
										label: 'X',
										icon: '/social/x.webp',
										alt: 'X',
									},
									{
										href: 'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe',
										label: 'Apple Music',
										icon: '/social/apple-music.webp',
										alt: 'Apple Music',
									},
								].map((item, i) => (
									<SocialLink
										key={i}
										href={item.href}
										src={item.icon}
										alt={item.alt}
										label={item.label}
									/>
								))}
								{/* <SocialLink href="https://linkedin.com/in/arshsaxena" src="/linkedin.webp" alt="LinkedIn" label="LinkedIn" />
                                <SocialLink href="https://github.com/arshsaxena" src="/github.webp" alt="GitHub" label="GitHub" />
                                <SocialLink href="https://instagram.com/arsh.saxena02" src="/instagram.webp" alt="Instagram" label="Instagram" />
                                <SocialLink href="https://x.com/arshsaxena02" src="/x.webp" alt="X" label="X" />
                                <SocialLink href="https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe" src="/apple-music.webp" alt="Apple Music" label="Apple Music" /> */}
							</div>
						</div>
					</div>
					{/* <div className='space-y-5 mt-10'>
                        <ThemeToggle />
                        <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 pb-3 md:pb-5 border-b-[1px] border-b-[var(--border-default)]'>
                            <div>{timeString}</div>
                            <div>Copyright © {year} Arsh Saxena.</div>
                        </div>
                    </div> */}
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
					{/* <div className='pt-5 md:flex align-middle justify-center'>
                        <span className='font-black'>Made with ❤️ in India</span>
                    </div> */}
				</div>
			</div>
		</>
	);
}
