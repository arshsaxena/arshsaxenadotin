// components/About/TimelineSection.jsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

import Image from 'next/image';
import Link from 'next/link';

import { MapPin, ArrowUpRight } from 'lucide-react';

const Timeline = () => {
	const data = [
		{
			title: 'Jul 2026',
			textContent:
				'Shipped <strong>PeerRoom</strong>, an open-source private file sharing and collaboration web app with direct P2P transfers using WebRTC. Features secure local network pairing, ephemeral workspaces with collaborative text editing, and encrypted R2 storage.',
			textContentCss: '',
			imgContent: ['/made-by-arsh/web-projects/icons/peerroom-icon.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: '',
			links: [
				{
					label: 'peerroom.arshsaxena.in',
					url: 'https://peerroom.arshsaxena.in',
				},
				{
					label: 'Open Source',
					url: 'https://github.com/arshsaxena/PeerRoom',
				},
			],
		},
		{
			title: 'Jul 2026',
			textContent:
				'Shipped <strong>GitSort</strong>, an open-source Chrome extension that sorts GitHub repository files and folders by their last commit date.',
			textContentCss: '',
			imgContent: ['/made-by-arsh/web-projects/icons/gitsort.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			links: [
				{
					label: 'Open Source',
					url: 'https://github.com/arshsaxena/GitSort',
				},
			],
		},
		{
			title: 'Jun 2026',
			textContent:
				'Developed <strong>AirRoom TV</strong>, an open-source Android TV AirPlay receiver. Implemented AirPlay and RAOP protocol handling through a native C++ layer integrated with Kotlin using JNI.',
			textContentCss: '',
			imgContent: [
				'/made-by-arsh/web-projects/icons/airroomtv-icon-tv.webp',
			],
			imgWrapperCss: 'grid grid-cols-1',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			links: [
				{
					label: 'airroomtv.arshsaxena.in',
					url: 'https://airroomtv.arshsaxena.in',
				},
				{
					label: 'Open Source',
					url: 'https://github.com/arshsaxena/AirRoomTV',
				},
			],
		},
		{
			title: 'May 2026',
			textContent:
				'Shipped <strong>StackShot</strong>, an open-source macOS utility for managing screenshots in a floating visual stack. Supports region, window, and full-screen captures with clipboard queue organization and batch export.',
			textContentCss: '',
			imgContent: [
				'/made-by-arsh/web-projects/icons/stackshot-icon.webp',
			],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			links: [
				{
					label: 'stackshot.arshsaxena.in',
					url: 'https://stackshot.arshsaxena.in',
				},
				{
					label: 'Open Source',
					url: 'https://github.com/arshsaxena/StackShot',
				},
			],
		},
		{
			title: 'Mar 2026',
			textContent:
				'Shipped <strong>VInhance</strong>, a Chromium-based browser extension that provides enhanced analytics, attendance tracking, academic insights, and productivity features for students, making the portal more intuitive and useful.',
			textContentCss: '',
			imgContent: ['/about/timeline/vinhance.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			links: [
				{
					label: 'Chrome Web Store',
					url: 'https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf',
				},
			],
		},
		{
			title: 'Feb 2026',
			textContent:
				'Revamped and shipped <strong>aEducational by Arsh</strong>, a platform for students to get free English writing resources such as letters, essays, notices, speeches, debates, and paragraphs.',
			textContentCss: '',
			imgContent: [
				'/about/timeline/aeducational-icon-old.webp',
				'/about/timeline/aeducational-icon.webp',
			],
			imgWrapperCss: 'grid grid-cols-2 md:grid-cols-2 gap-2',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			links: [
				{
					label: 'education.arshsaxena.in',
					url: 'https://education.arshsaxena.in',
				},
			],
		},
		{
			title: 'Aug 2025',
			textContent:
				'Shipped <strong>NPTEL Companion</strong>, a platform for students to prepare, practice, and get exam-ready for NPTEL.',
			textContentCss: '',
			imgContent: ['/about/timeline/nptelcompanion-icon.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			links: [
				{
					label: 'nptelcompanion.arshsaxena.in',
					url: 'https://nptelcompanion.arshsaxena.in',
				},
			],
		},
		{
			title: 'Jul 2025',
			textContent:
				'Engaged as a <strong>PRISM Developer</strong> at <strong>Samsung R&D Institute India</strong> under the <strong>PRISM program</strong>, contributing to an AI/ML-focused research project.',
			textContentCss: '',
			imgContent: ['/about/timeline/samsungresearch.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-1/2 md:h-full',
			css: 'pt-10 md:pt-20',
			location: 'Bengaluru, India',
		},
		{
			title: 'Sep 2023',
			textContent:
				'Joined the Development Department of <strong>CYSCOM Student Chapter</strong>, VIT Chennai as a <strong>Web Developer</strong>.',
			textContentCss: '',
			imgContent: ['/about/timeline/cyscomvit.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: 'pt-10 md:pt-20',
			location: 'Chennai, India',
		},
		{
			title: 'Aug 2023',
			textContent:
				'Started pursuing B.Tech. in <strong>Electronics and Communication Engineering</strong> at <strong>Vellore Institute of Technology</strong>.',
			textContentCss: '',
			imgContent: [
				'/about/timeline/vitc1.webp',
				'/about/timeline/vitc2.webp',
			],
			imgWrapperCss: 'grid grid-cols-2 md:grid-cols-2 gap-2',
			imgContentCss: 'h-40 md:h-80',
			css: 'pt-10 md:pt-20',
			location: 'Chennai, India',
		},
		{
			title: 'May 2023',
			textContent:
				'Completed <strong>CBSE Class XII</strong> from <strong>Central Academy</strong> with Physics, Chemistry, Mathematics, Computer Science, and English.',
			textContentCss: '',
			imgContent: ['/about/timeline/centralacademy.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-3/4 md:h-full',
			css: 'pt-10 md:pt-20',
			location: 'Lucknow, India',
		},
	];

	const ref = useRef(null);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, []);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<>
			<div className="w-full" ref={containerRef}>
				<div ref={ref} className="relative mx-auto max-w-7xl pb-16">
					{data.map((item, index) => {
						const isDuplicateTitle =
							index > 0 && data[index - 1].title === item.title;
						return (
							<div
								key={index}
								className={`flex justify-start md:gap-10 ${item.css}`}
							>
								<div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
									<div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#dadada] dark:bg-[#131313]">
										<div className="h-4 w-4 rounded-full border border-[var(--main)] bg-[var(--accent)] p-2" />
									</div>
									<h3
										className={`hidden text-xl font-bold text-[var(--foreground)] md:block md:pl-20 md:text-5xl ${isDuplicateTitle ? 'md:invisible' : ''}`}
									>
										{item.title}
									</h3>
								</div>

								<div className="relative w-full pl-20 md:pl-0">
									<div
										className={`mb-4 block text-left text-2xl font-bold text-[var(--foreground)] md:hidden ${isDuplicateTitle ? 'hidden' : ''}`}
									>
										{item.title}
									</div>
									<div className="text-sm md:text-lg">
										{((item.links &&
											item.links.length > 0) ||
											item.location) && (
											<div className="mb-3 flex flex-wrap items-center gap-2">
												{item.location && (
													<div className="flex items-center text-sm text-[var(--foreground)] opacity-70">
														<MapPin className="mr-1.5 h-[14px] w-[14px]" />
														{item.location}
													</div>
												)}
												{item.links &&
													item.links.map(
														(link, idx) => (
															<Link
																key={idx}
																href={link.url}
																target="_blank"
																className="flex items-center rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-3 py-[3px] pr-2.5 text-xs text-[#f5f5f7] hover:bg-[var(--accent)]"
															>
																<span>
																	{link.label}
																</span>
																<ArrowUpRight className="ml-1 h-[13px] w-[13px]" />
															</Link>
														),
													)}
											</div>
										)}
										{item.textContent && (
											<div
												className={`mb-5 text-[14px] leading-[24px] text-[var(--foreground)] md:text-[16px] ${item.textContentCss}`}
												dangerouslySetInnerHTML={{
													__html: item.textContent,
												}}
											/>
										)}
										{item.imgContent &&
											Array.isArray(item.imgContent) && (
												<div
													className={
														item.imgWrapperCss
													}
												>
													{item.imgContent.map(
														(src, i) => (
															<Image
																key={i}
																src={src}
																alt={`Timeline image ${i + 1}`}
																width={0}
																height={0}
																className={`w-full rounded-[10px] border-[1px] border-[var(--border-default)] object-cover ${item.imgContentCss}`}
															/>
														),
													)}
												</div>
											)}
									</div>
								</div>
							</div>
						);
					})}
					<div
						style={{ height: height + 'px' }}
						className="absolute left-5 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#a8a8a8] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-[#333333] md:left-5"
					>
						<motion.div
							style={{
								height: heightTransform,
								opacity: opacityTransform,
							}}
							className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[var(--accent)] from-[0%] via-[var(--main)] via-[10%] to-transparent"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Timeline;
