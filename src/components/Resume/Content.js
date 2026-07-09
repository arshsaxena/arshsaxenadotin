// components/Resume/Content.js

'use client';

import Head from 'next/head';
import Link from 'next/link';

import { Download } from 'lucide-react';

const resumeData = {
	personalInfo: {
		name: 'Arsh Saxena',
		website: 'https://arshsaxena.in',
		linkedin: 'https://linkedin.com/in/arshsaxena',
		github: 'https://github.com/arshsaxena',
		leetcode: 'https://leetcode.com/u/arshsaxena',
	},
	education: [
		{
			institution: 'Vellore Institute of Technology',
			location: 'Chennai, India',
			degree: 'Bachelor of Technology (BTech) in Electronics and Communication Engineering',
			duration: 'Aug 2023 – Jul 2027',
		},
	],
	experience: [
		{
			role: 'PRISM Developer',
			company: 'Samsung R&D Institute India',
			location: 'Bengaluru, India',
			duration: 'Aug 2025 – Nov 2025',
			responsibilities: [
				'Contributed to the development of an AI-powered chatbot for telecom network management, with primary responsibility for building and refining the UI.',
				'Presented fault, configuration, and performance data from EMS/FCAPS modules in a clear, usable interface.',
				'Supported real-time alarm analysis workflows and made improvements to the RAG-based retrieval pipeline.',
			],
		},
	],
	projects: [
		{
			name: 'PeerRoom',
			link: 'https://peerroom.arshsaxena.in',
			tech: 'Next.js, Tailwind CSS, WebRTC, Cloudflare Workers',
			duration: 'Jul 2026',
			details: [
				'Built an open source private file sharing and collaboration web app with direct P2P transfers using WebRTC, no sign-up.',
				'Implemented local network discovery for nearby devices and secure pairing using room codes across different networks.',
				'Developed temporary collaboration rooms featuring a real-time collaborative text editor, encrypted Cloudflare R2 file storage, and automatic data deletion after 7 days.',
				'Designed the backend on Cloudflare Workers with Durable Objects for signaling, room management, and synchronization.',
			],
		},
		{
			name: 'AirRoom TV',
			link: 'https://github.com/arshsaxena/AirRoomTV',
			tech: 'Kotlin, Jetpack Compose, C++, Android TV',
			duration: 'Jun 2026',
			details: [
				'Developed an open source Android TV AirPlay receiver for screen mirroring and audio streaming from Apple devices.',
				'Implemented AirPlay and RAOP protocol handling through a native C++ layer integrated with Kotlin using JNI.',
				"Built a TV-friendly UI with Jetpack Compose and enabled automatic device discovery using Android's NsdManager.",
			],
		},
		{
			name: 'StackShot',
			link: 'https://github.com/arshsaxena/StackShot',
			tech: 'Swift, SwiftUI, ScreenCaptureKit, macOS',
			duration: 'May 2026',
			details: [
				'Built an open source macOS application that stores screenshots in a floating visual stack instead of cluttering the desktop.',
				'Implemented a clipboard queue, enabling sequential pasting of multiple screenshots across applications.',
				'Supported region, window, and full-screen capture modes with drag-and-drop organization and batch export functionality.',
			],
		},
		{
			name: 'VInhance',
			link: 'https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf',
			tech: 'JavaScript, HTML/CSS',
			duration: 'Oct 2025',
			details: [
				'Developed a Chromium extension enhancing the VTOP portal experience for students across VIT campuses.',
				'Implemented attendance analytics, grade visualization, exam planning tools, timetable dashboards, and academic utilities.',
				'Added productivity features including dark mode, automatic CAPTCHA solving, and one-click academic data export.',
				'<strong>Published for Chromium-based browsers via the Chrome Web Store, 300+ daily active users.</strong>',
			],
		},
		{
			name: 'NPTEL Companion',
			link: 'https://nptelcompanion.arshsaxena.in',
			tech: 'Next.js, Tailwind CSS, Cloudflare, Vercel',
			duration: 'Jun 2025',
			details: [
				'Built a platform for NPTEL exam practice with quizzes, multiple modes, solutions, and study materials.',
				'Built a responsive interface with optimized search and filtering for quick access to course material.',
				'<strong>Served 1,00,000+ learners across India in just two NPTEL exam cycles, with 5,00,000+ practice sessions across multiple high-demand courses.</strong>',
			],
		},
		{
			name: 'aEducational',
			link: 'https://education.arshsaxena.in',
			tech: 'Next.js, Tailwind CSS, Vercel',
			duration: 'Feb 2021',
			details: [
				'Built an educational platform for academic writing resources, including essays, letters, articles, speeches, and reports.',
				'Migrated the platform from static HTML/CSS to Next.js and Tailwind CSS, improving maintainability and performance.',
				'<strong>Supports more than 5,000 students worldwide with freely accessible academic resources.</strong>',
			],
		},
	],
	certifications: [
		{
			name: 'Oracle Java Certified Foundations Associate',
			issuer: 'Oracle',
			date: 'Jun 2026',
		},
		{
			name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
			issuer: 'Oracle',
			date: 'Sep 2025',
		},
	],
	technicalSkills: {
		languages: [
			'C++',
			'C',
			'Java',
			'Python',
			'JavaScript',
			'SQL',
			'HTML/CSS',
			'R',
			'MATLAB',
		],
		frameworksLibraries: [
			'React',
			'Next.js',
			'Node.js',
			'Flask',
			'Tailwind CSS',
			'Bootstrap',
			'jQuery',
		],
		tools: [
			'Git',
			'GitHub',
			'VS Code',
			'Vercel',
			'Cloudflare',
			'Supabase',
			'LaTeX',
			'Markdown',
		],
	},
	downloadLink: '/resume/pdf',
};

export default function Content() {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex, nofollow" />
				<link
					href="https://fonts.googleapis.com/css2?family=Charter:ital,wght@0,400;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="mx-auto max-w-[980px]">
				<section className="text-md relative mx-5 mb-10 mt-10 rounded-[25px] border border-[var(--border-default)] bg-[var(--surface)] p-5 font-serif text-[var(--foreground)] md:p-10 md:px-9 md:text-[16px]">
					<div className="absolute right-2 top-2 font-sans md:right-4 md:top-4">
						<Link
							href={resumeData.downloadLink}
							target="_blank"
							className="flex items-center rounded-full border border-[var(--accent)] bg-[var(--main)] py-1 text-xs text-[#f5f5f7] hover:bg-[var(--accent)] sm:px-0.5 sm:py-0.5 sm:pr-2"
						>
							<Download className="mb-[0.9px] h-3 sm:-mr-1" />
							<span className="hidden sm:block">PDF</span>
						</Link>
					</div>
					<div className="mx-auto max-w-[900px] leading-relaxed">
						<h1 className="text-center text-3xl font-bold tracking-wide md:text-4xl">
							{resumeData.personalInfo.name}
						</h1>

						<div className="text-center text-sm">
							<a
								href={resumeData.personalInfo.website}
								className="mx-1 underline"
								target="_blank"
							>
								{resumeData.personalInfo.website.replace(
									'https://',
									'',
								)}
							</a>{' '}
							|{' '}
							<a
								href={resumeData.personalInfo.linkedin}
								className="mx-1 underline"
								target="_blank"
							>
								{resumeData.personalInfo.linkedin.replace(
									'https://',
									'',
								)}
							</a>{' '}
							|{' '}
							<a
								href={resumeData.personalInfo.github}
								className="mx-1 underline"
								target="_blank"
							>
								{resumeData.personalInfo.github.replace(
									'https://',
									'',
								)}
							</a>{' '}
							|{' '}
							<a
								href={resumeData.personalInfo.leetcode}
								className="mx-1 underline"
								target="_blank"
							>
								{resumeData.personalInfo.leetcode.replace(
									'https://',
									'',
								)}
							</a>
						</div>

						<Section
							title="Education"
							items={resumeData.education}
							type="education"
						/>

						<Section
							title="Experience"
							items={resumeData.experience}
							type="experience"
						/>

						<Section
							title="Projects"
							items={resumeData.projects}
							type="projects"
						/>

						<Section
							title="Certifications"
							items={resumeData.certifications}
							type="certifications"
						/>

						<section>
							<h2 className="mb-2 border-b-[0.5px] border-[var(--foreground)] text-[1.1em] uppercase">
								T
								<span className="align-baseline text-sm">
									echnical
								</span>{' '}
								S
								<span className="align-baseline text-sm">
									kills
								</span>
							</h2>
							<div className="ml-5">
								<div>
									<strong>Languages</strong>:{' '}
									{resumeData.technicalSkills.languages.join(
										', ',
									)}
									<br />
									<strong>
										Frameworks & Libraries
									</strong>:{' '}
									{resumeData.technicalSkills.frameworksLibraries.join(
										', ',
									)}
									<br />
									<strong>Tools</strong>:{' '}
									{resumeData.technicalSkills.tools.join(
										', ',
									)}
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</>
	);
}

function Section({ title, items, type }) {
	return (
		<section className="mb-6 mt-6">
			<h2 className="mb-2 border-b-[0.5px] border-[var(--foreground)] text-[1.1em] uppercase">
				{title[0]}
				<span className="align-baseline text-sm">{title.slice(1)}</span>
			</h2>

			<div className="ml-5 space-y-4">
				{items.map((item, idx) => (
					<div key={idx} className="mb-4">
						<div className="flex flex-col justify-between md:flex-row">
							<span
								className={
									type === 'projects' ||
									type === 'certifications'
										? ''
										: 'font-bold'
								}
							>
								{type === 'projects' ? (
									<>
										<span className="font-bold">
											{item.link ? (
												<a
													href={item.link}
													target="_blank"
													className="underline decoration-[0.5px] underline-offset-2 hover:no-underline"
												>
													{item.name}
												</a>
											) : (
												item.name
											)}
										</span>{' '}
										|{' '}
										<span className="italic">
											{item.tech}
										</span>
									</>
								) : type === 'certifications' ? (
									<span className="font-bold">
										{item.name}
									</span>
								) : type === 'education' ? (
									item.institution
								) : (
									item.role
								)}
							</span>
							<span>
								{type === 'projects'
									? item.duration
									: type === 'certifications'
										? item.date
										: type === 'experience'
											? item.duration
											: item.location}
							</span>
						</div>

						{type !== 'projects' && type !== 'certifications' && (
							<div className="flex flex-col justify-between text-sm italic md:flex-row">
								<span>
									{type === 'education'
										? item.degree
										: item.company}
								</span>
								<span>
									{type === 'experience'
										? item.location
										: item.duration}
								</span>
							</div>
						)}

						{item.responsibilities || item.details ? (
							<ul className="ml-5 list-disc">
								{(item.responsibilities || item.details).map(
									(point, i) => (
										<li
											key={i}
											className="ml-5"
											dangerouslySetInnerHTML={{
												__html: point,
											}}
										/>
									),
								)}
							</ul>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
