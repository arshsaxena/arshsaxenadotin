// components/Resume/Content.js

'use client';

import Head from 'next/head';
import Link from 'next/link';

import { Download } from 'lucide-react';

const resumeData = {
	personalInfo: {
		name: 'Arsh Saxena',
		linkedin: 'https://linkedin.com/in/arshsaxena',
		github: 'https://github.com/arshsaxena',
	},
	education: [
		{
			institution: 'Vellore Institute of Technology',
			location: 'Chennai, India',
			degree: 'Bachelor of Technology in Electronics and Communication Engineering',
			duration: 'Aug 2023 – Jul 2027 (Expected)',
		},
		{
			institution: 'Central Academy Senior Secondary School',
			location: 'Lucknow, India',
			degree: 'Senior Secondary Education – PCM + CS',
			duration: 'Apr 2021 – May 2023',
		},
	],
	experience: [
		{
			role: 'PRISM Developer',
			company: 'Samsung R&D Institute India',
			location: 'Bengaluru, India',
			duration: 'Aug 2025 – Present',
			responsibilities: [
				'Contribute to the development of an AI-powered intelligent chatbot for telecom network management, with primary responsibility for building and refining the user interface.',
				'Design responsive and user-friendly views using Next.js and Tailwind CSS to support real-time chatbot interactions and insights.',
				'Work closely with team members to present fault, configuration, and performance information from EMS/FCAPS modules in a clear and usable manner.',
				'Support real-time alarm analysis workflows and make minor improvements to the RAG-based retrieval pipeline.',
			],
		},
		{
			role: 'Web Developer',
			company: 'CYSCOM, VIT Chennai',
			location: 'Chennai, India',
			duration: 'Sep 2023 – Present',
			responsibilities: [
				'Developed event websites for Zyper, HackFiesta, and the 2024–25 recruitment portal, enhancing UI/UX and performance.',
				'Contributed to the revamp of the official CYSCOM website and improved code maintainability.',
				'Supported chapter meets, tutorials, and event operations across marketing and technical teams.',
			],
		},
	],
	projects: [
		{
			name: 'arshsaxena.in',
			tech: 'Next.js, Tailwind CSS',
			duration: 'Jun 2020 – Present',
			details: [
				'Developed a personal portfolio website entirely from scratch using Next.js and Tailwind CSS, hosted on Vercel.',
				'Focused on clean design, fast performance, and responsive layout across devices.',
				'Integrated tools like Google Search Console, Vercel Analytics, and Clarity for SEO, analytics, and user insights.',
			],
		},
		{
			name: 'NPTEL Companion',
			tech: 'Next.js, Tailwind CSS',
			duration: 'Jun 2025 – Present',
			details: [
				'Built a platform that aggregates and organizes NPTEL course resources with automated data fetching and structured presentation.',
				'Implemented a fast, responsive UI with advanced search and filtering using Next.js and Tailwind CSS.',
				'<strong>Engaged 15,000+ unique users and enabled 1,20,000+ practice sessions.</strong>',
			],
		},
		{
			name: 'VIT Chennai Faculty Information',
			tech: 'Next.js, Tailwind CSS, Supabase',
			duration: 'Jun 2025 – Present',
			details: [
				'Developed a responsive faculty directory with dynamic filters (alphabet, designation, school, building) and search.',
				'Enhanced usability with reusable UI components, color-coded tags, and optimized multi-select filter logic.',
				'Added anonymous faculty ratings with secure student login and analytics.',
				'<strong>Engages 75–100 daily active student users.</strong>',
			],
		},
		{
			name: 'aEducational',
			tech: 'Next.js, Tailwind CSS, HTML, CSS, JavaScript',
			duration: 'Feb 2021 – Present',
			details: [
				'Built an English composition blog using HTML, CSS, JavaScript, and jQuery.',
				'Currently redesigning the platform using Next.js and Tailwind CSS for a modern, faster, and more responsive UI.',
				'<strong>Engages 500+ daily student users worldwide.</strong>',
			],
		},
	],
	certifications: [
		{
			name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
			issuer: 'Oracle',
			date: 'Sep 2025',
		},
	],
	technicalSkills: {
		languages: [
			'C/C++',
			'Python',
			'HTML/CSS',
			'JavaScript',
			'Java',
			'SQL',
			'R',
			'MATLAB',
		],
		frameworksLibraries: [
			'Next.js',
			'React',
			'Tailwind CSS',
			'Node.js',
			'Flask',
			'jQuery',
			'Bootstrap',
		],
		tools: ['Git', 'VS Code', 'Vercel', 'Supabase'],
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

						<div className="mb-7 text-center text-sm">
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
		<section className="mb-6">
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
											{item.name}
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

						<div
							className={`flex flex-col justify-between ${type !== 'projects' && type !== 'certifications' ? 'text-sm italic md:flex-row' : ''}`}
						>
							{type === 'certifications' && (
								<span className="text-sm italic">
									{item.issuer}
								</span>
							)}
							{type !== 'projects' &&
								type !== 'certifications' && (
									<span>
										{type === 'education'
											? item.degree
											: item.company}
									</span>
								)}
							{type !== 'projects' &&
								type !== 'certifications' && (
									<span>
										{type === 'experience'
											? item.location
											: item.duration}
									</span>
								)}
						</div>

						{item.responsibilities || item.details ? (
							<ul className="ml-5 list-disc">
								{(item.responsibilities || item.details).map(
									(point, i) => (
										<li key={i} className="ml-5" dangerouslySetInnerHTML={{ __html: point }} />
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
