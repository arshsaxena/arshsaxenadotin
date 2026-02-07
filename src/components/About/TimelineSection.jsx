// components/About/TimelineSection.jsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

import Image from 'next/image';

const Timeline = () => {
	const data = [
		{
			title: 'Jul 2025',
			preTextContent: 'Bengaluru, India',
			textContent:
				'Engaged as a <strong>PRISM Developer</strong> at <strong>Samsung R&D Institute India</strong> under the <strong>PRISM program</strong>, contributing to an AI/ML-focused research project.',
			textContentCss: '',
			imgContent: ['/about/timeline/samsungresearch.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-1/2 md:h-full',
			css: '',
		},
		{
			title: 'Sep 2023',
			preTextContent: 'Chennai, India',
			textContent:
				'Joined the Development Department of <strong>CYSCOM Student Chapter</strong>, VIT Chennai as a <strong>Web Developer</strong>.',
			textContentCss: '',
			imgContent: ['/about/timeline/cyscomvit.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-full',
			css: 'pt-20 md:pt-40',
		},
		{
			title: 'Aug 2023',
			preTextContent: 'Chennai, India',
			textContent:
				'Started pursuing B.Tech. in <strong>Electronics and Communication Engineering</strong> at <strong>Vellore Institute of Technology</strong>.',
			textContentCss: '',
			imgContent: [
				'/about/timeline/vitc1.webp',
				'/about/timeline/vitc2.webp',
			],
			imgWrapperCss: 'grid grid-cols-2 md:grid-cols-2 gap-2',
			imgContentCss: 'h-40 md:h-80',
			css: 'pt-20 md:pt-40',
		},
		{
			title: 'May 2023',
			preTextContent: 'Lucknow, India',
			textContent:
				'Completed <strong>CBSE Class XII</strong> from <strong>Central Academy</strong> with Physics, Chemistry, Mathematics, Computer Science, and English.',
			textContentCss: '',
			imgContent: ['/about/timeline/centralacademy.webp'],
			imgWrapperCss: 'grid grid-cols-1 md:grid-cols-2 gap-4',
			imgContentCss: 'h-3/4 md:h-full',
			css: 'pt-20 md:pt-40',
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
					{data.map((item, index) => (
						<div
							key={index}
							className={`flex justify-start md:gap-10 ${item.css}`}
						>
							<div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
								<div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#dadada] dark:bg-[#131313]">
									<div className="h-4 w-4 rounded-full border border-[var(--main)] bg-[var(--accent)] p-2" />
								</div>
								<h3 className="hidden text-xl font-bold text-[var(--foreground)] md:block md:pl-20 md:text-5xl">
									{item.title}
								</h3>
							</div>

							<div className="relative w-full pl-20 md:pl-0">
								<div className="mb-4 block text-left text-2xl font-bold text-[var(--foreground)] md:hidden">
									{item.title}
								</div>
								<div className="text-sm md:text-lg">
									{item.preTextContent && (
										<div className="mb-3 flex w-fit items-center rounded-full bg-[var(--main)] px-2 py-1 pr-3 text-xs text-[#f5f5f7] md:text-sm">
											<Image
												src="/emojis/pin.webp"
												width={15}
												height={15}
												alt="pin"
												className="mr-1"
											/>{' '}
											{item.preTextContent}
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
											<div className={item.imgWrapperCss}>
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
					))}
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
