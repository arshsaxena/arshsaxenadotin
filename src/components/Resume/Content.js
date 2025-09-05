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
				'Contributing to the design and development of an AI-powered intelligent chatbot for telecom network management (LSM/USM platforms).',
				'Working on integrating chatbot capabilities with EMS/FCAPS modules to enable contextual fault, configuration, and performance insights.',
				'Collaborating with the team to streamline real-time alarm analysis and troubleshooting workflows using conversational AI.',
				'Exploring AI/ML integration in large-scale telecom systems to enhance accessibility and decision-making.',
			],
		},
		{
			role: 'Web Developer',
			company: 'CYSCOM, VIT Chennai',
			location: 'Chennai, India',
			duration: 'Sep 2023 – Present',
			responsibilities: [
				'Developed event websites including Zyper, HackFiesta, and the 2024–25 recruitment portal, improving UI/UX and performance.',
				'Contributed to the revamp of the official CYSCOM website and optimized workflows for better maintainability.',
				'Actively participated in chapter meets, tutorials, and organizing committees, supporting marketing and technical operations for major events.',
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
				'Focus on clean design, fast performance, and responsive layout across devices.',
				'Integrated tools like Google Search Console, Vercel Analytics, and Clarity for SEO, analytics, and user insights.',
			],
		},
		{
			name: 'NPTEL Companion',
			tech: 'Next.js, Tailwind CSS',
			duration: 'Jun 2025 – Present',
			details: [
				'Developed a web-based platform that organizes and simplifies access to NPTEL course resources for students across disciplines.',
				'Implemented the frontend using Next.js and Tailwind CSS for a fast, responsive, and modern UI.',
				'Automated fetching and structuring of NPTEL course data for subject-wise content clarity.',
				'Integrated advanced search and filtering for quick access to relevant courses and materials.',
				'Designed a mobile-optimized layout for better usability across devices.',
			],
		},
		{
			name: 'VIT Chennai Faculty Information',
			tech: 'Next.js, Tailwind CSS, Supabase',
			duration: 'Jun 2025 – Present',
			details: [
				'Developed a responsive faculty directory web app with advanced search and filter capabilities.',
				'Built a dynamic filtering interface for alphabet, designation, school, and building filters.',
				'Designed reusable checkbox groups with expand/collapse functionality.',
				'Implemented color-coded tags for schools with Tailwind CSS.',
				'Added anonymous faculty rating system with secure student login.',
			],
		},
		{
			name: 'aEducational',
			tech: 'HTML, CSS, JavaScript, jQuery',
			duration: 'Feb 2021 – Present',
			details: ['Developed a blog for English composition.'],
		},
		{
			name: 'Solar System',
			tech: 'HTML, CSS, JavaScript',
			duration: 'Mar 2021 – Apr 2021',
			details: ['Developed mainly using CSS animations.'],
		},
		{
			name: 'Color-Based Object Detection using Python and OpenCV',
			tech: 'Python, OpenCV',
			duration: 'Oct 2024 – Nov 2024',
			details: [
				'Developed a real-time color detection system using Python and OpenCV.',
				'Implemented HSV color space for accurate object tracking.',
				'Enabled webcam integration for live object tracking.',
				'Displayed RGB values upon mouse click on detected objects.',
			],
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
			'Tailwind CSS',
			'ReactJS',
			'Node.js',
			'Flask',
			'jQuery',
			'Bootstrap',
		],
		databasesTools: ['Git', 'VS Code', 'Vercel', 'Supabase'],
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
				<section className="text-md relative mx-5 mb-10 mt-10 rounded-[25px] border border-[var(--border-default)] bg-[var(--surface)] p-5 font-serif text-[var(--foreground)] md:p-10 md:text-[16px]">
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
					<div className="mx-auto max-w-[850px] leading-relaxed">
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
									<strong>Libraries/Frameworks</strong>:{' '}
									{resumeData.technicalSkills.frameworksLibraries.join(
										', ',
									)}
									<br />
									<strong>Databases & Tools</strong>:{' '}
									{resumeData.technicalSkills.databasesTools.join(
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
									type === 'projects' ? '' : 'font-bold'
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
								) : type === 'education' ? (
									item.institution
								) : (
									item.role
								)}
							</span>
							<span>
								{type === 'projects'
									? item.duration
									: type === 'experience'
										? item.duration
										: item.location}
							</span>
						</div>

						<div
							className={`flex flex-col justify-between ${type !== 'projects' ? 'text-sm italic md:flex-row' : ''}`}
						>
							{type !== 'projects' && (
								<span>
									{type === 'education'
										? item.degree
										: item.company}
								</span>
							)}
							{type !== 'projects' && (
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
										<li key={i} className="ml-5">
											{point}
										</li>
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
