// components/Resume/Content.js

'use client';

import Head from 'next/head';
import Link from 'next/link';

import { Download } from 'lucide-react';

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
				<section className="text-md mx-5 my-10 rounded-[25px] border border-[var(--border-default)] bg-[var(--surface)] p-5 font-serif text-[var(--foreground)] md:p-10 md:text-[16px]">
					<div className="mx-auto max-w-[850px] leading-relaxed">
						<h1 className="text-center text-3xl font-bold tracking-wide md:text-4xl">
							Arsh Saxena
						</h1>
						<div className="mb-7 text-center text-sm">
							<a
								href="https://linkedin.com/in/arshsaxena"
								className="mx-1 underline"
								target="_blank"
							>
								linkedin.com/in/arshsaxena
							</a>{' '}
							|{' '}
							<a
								href="https://github.com/arshsaxena"
								className="mx-1 underline"
								target="_blank"
							>
								github.com/arshsaxena
							</a>
						</div>

						<section className="mb-6">
							<h2 className="mb-2 border-b-[0.5px] border-[var(--foreground)] text-[1.1em] uppercase">
								E
								<span className="align-baseline text-sm">
									DUCATION
								</span>
							</h2>
							<div className="ml-5">
								<div className="mb-4">
									<div className="flex flex-col justify-between md:flex-row">
										<span className="font-bold">
											Vellore Institute of Technology
										</span>
										<span>Chennai, India</span>
									</div>
									<div className="flex flex-col justify-between text-sm italic md:flex-row">
										<span>
											Bachelor of Technology in
											Electronics and Communication
											Engineering
										</span>
										<span>
											Aug 2023 – Jul 2027 (Expected)
										</span>
									</div>
								</div>

								<div className="mb-4">
									<div className="flex flex-col justify-between md:flex-row">
										<span className="font-bold">
											Central Academy Senior Secondary
											School
										</span>
										<span>Lucknow, India</span>
									</div>
									<div className="flex flex-col justify-between text-sm italic md:flex-row">
										<span>
											Senior Secondary Education – PCM +
											CS
										</span>
										<span>Apr 2021 – May 2023</span>
									</div>
								</div>
							</div>
						</section>

						<section className="mb-6">
							<h2 className="mb-2 border-b-[0.5px] border-[var(--foreground)] text-[1.1em] uppercase">
								E
								<span className="align-baseline text-sm">
									XPERIENCE
								</span>
							</h2>
							<div className="ml-5">
								<div className="mb-4">
									<div className="flex flex-col justify-between md:flex-row">
										<span className="font-bold">
											PRISM Developer
										</span>
										<span>Aug 2025 – Present</span>
									</div>
									<div className="flex flex-col justify-between text-sm italic md:flex-row">
										<span>
											Samsung R&amp;D Institute India
										</span>
										<span>Bengaluru, India</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Contributing to the design and
											development of an AI-powered
											intelligent chatbot for telecom
											network management (LSM/USM
											platforms).
										</li>
										<li className="ml-5">
											Working on integrating chatbot
											capabilities with EMS/FCAPS modules
											to enable contextual fault,
											configuration, and performance
											insights.
										</li>
										<li className="ml-5">
											Collaborating with the team to
											streamline real-time alarm analysis
											and troubleshooting workflows using
											conversational AI.
										</li>
										<li className="ml-5">
											Exploring AI/ML integration in
											large-scale telecom systems to
											enhance accessibility and
											decision-making.
										</li>
									</ul>
								</div>

								<div className="mb-4">
									<div className="flex flex-col justify-between md:flex-row">
										<span className="font-bold">
											Web Developer
										</span>
										<span>Sep 2023 – Present</span>
									</div>
									<div className="flex flex-col justify-between text-sm italic md:flex-row">
										<span>CYSCOM, VIT Chennai</span>
										<span>Chennai, India</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed event websites including
											Zyper, HackFiesta, and the 2024–25
											recruitment portal, improving UI/UX
											and performance.
										</li>
										<li className="ml-5">
											Contributed to the revamp of the
											official CYSCOM website and
											optimized workflows for better
											maintainability.
										</li>
										<li className="ml-5">
											Actively participated in chapter
											meets, tutorials, and organizing
											committees, supporting marketing and
											technical operations for major
											events.
										</li>
									</ul>
								</div>
							</div>
						</section>

						<section className="mb-6">
							<h2 className="mb-2 border-b-[0.5px] border-[var(--foreground)] text-[1.1em] uppercase">
								P
								<span className="align-baseline text-sm">
									ROJECTS
								</span>
							</h2>
							<div className="ml-5 space-y-5">
								<div>
									<div className="flex flex-col justify-between md:flex-row">
										<span>
											<span className="font-bold">
												arshsaxena.in
											</span>{' '}
											|{' '}
											<span className="italic">
												Next.js, Tailwind CSS
											</span>
										</span>
										<span>Jun 2020 – Present</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed a personal portfolio
											website entirely from scratch using
											Next.js and Tailwind CSS, hosted on
											Vercel.
										</li>
										<li className="ml-5">
											Focus on clean design, fast
											performance, and responsive layout
											across devices.
										</li>
										<li className="ml-5">
											Integrated tools like Google Search
											Console, Vercel Analytics, and
											Clarity for SEO, analytics, and user
											insights.
										</li>
									</ul>
								</div>

								<div>
									<div className="flex flex-col justify-between md:flex-row">
										<span>
											<span className="font-bold">
												NPTEL Companion
											</span>{' '}
											|{' '}
											<span className="italic">
												Next.js, Tailwind CSS
											</span>
										</span>
										<span>Jun 2025 – Present</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed a web-based platform that
											organizes and simplifies access to
											NPTEL course resources for students
											across disciplines.
										</li>
										<li className="ml-5">
											Implemented the frontend using
											Next.js and Tailwind CSS for a fast,
											responsive, and modern UI.
										</li>
										<li className="ml-5">
											Automated fetching and structuring
											of NPTEL course data for
											subject-wise content clarity.
										</li>
										<li className="ml-5">
											Integrated advanced search and
											filtering for quick access to
											relevant courses and materials.
										</li>
										<li className="ml-5">
											Designed a mobile-optimized layout
											for better usability across devices.
										</li>
									</ul>
								</div>

								<div>
									<div className="flex flex-col justify-between md:flex-row">
										<span>
											<span className="font-bold">
												VIT Chennai Faculty Information
											</span>{' '}
											|{' '}
											<span className="italic">
												Next.js, Tailwind CSS, Supabase
											</span>
										</span>
										<span>Jun 2025 – Present</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed a responsive faculty
											directory web app with advanced
											search and filter capabilities.
										</li>
										<li className="ml-5">
											Built a dynamic filtering interface
											for alphabet, designation, school,
											and building filters.
										</li>
										<li className="ml-5">
											Designed reusable checkbox groups
											with expand/collapse functionality.
										</li>
										<li className="ml-5">
											Implemented color-coded tags for
											schools with Tailwind CSS.
										</li>
										<li className="ml-5">
											Added anonymous faculty rating
											system with secure student login.
										</li>
									</ul>
								</div>

								<div>
									<div className="flex flex-col justify-between md:flex-row">
										<span>
											<span className="font-bold">
												aEducational
											</span>{' '}
											|{' '}
											<span className="italic">
												HTML, CSS, JavaScript, jQuery
											</span>
										</span>
										<span>Feb 2021 – Present</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed a blog for English
											composition.
										</li>
									</ul>
								</div>

								<div>
									<div className="flex flex-col justify-between md:flex-row">
										<span>
											<span className="font-bold">
												Solar System
											</span>{' '}
											|{' '}
											<span className="italic">
												HTML, CSS, JavaScript
											</span>
										</span>
										<span>Mar 2021 – Apr 2021</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed mainly using CSS
											animations.
										</li>
									</ul>
								</div>

								<div>
									<div className="flex flex-col justify-between md:flex-row">
										<span>
											<span className="font-bold">
												Color-Based Object Detection
												using Python and OpenCV
											</span>{' '}
											|{' '}
											<span className="italic">
												Python, OpenCV
											</span>
										</span>
										<span>Oct 2024 – Nov 2024</span>
									</div>
									<ul className="ml-5 list-disc">
										<li className="ml-5">
											Developed a real-time color
											detection system using Python and
											OpenCV.
										</li>
										<li className="ml-5">
											Implemented HSV color space for
											accurate object tracking.
										</li>
										<li className="ml-5">
											Enabled webcam integration for live
											object tracking.
										</li>
										<li className="ml-5">
											Displayed RGB values upon mouse
											click on detected objects.
										</li>
									</ul>
								</div>
							</div>
						</section>

						<section>
							<h2 className="mb-2 border-b-[0.5px] border-[var(--foreground)] text-[1.1em] uppercase">
								T
								<span className="align-baseline text-sm">
									ECHNICAL
								</span>{' '}
								S
								<span className="align-baseline text-sm">
									KILLS
								</span>
							</h2>
							<div className="ml-5">
								<div>
									<strong>Languages:</strong> C/C++, Python,
									HTML/CSS, JavaScript, Java, SQL, R, MATLAB
									<br />
									<strong>Libraries/Frameworks:</strong>{' '}
									Next.js, Tailwind CSS, ReactJS, Node.js,
									Flask, jQuery, Bootstrap
									<br />
									<strong>Databases & Tools:</strong> Git, VS
									Code, Vercel, Supabase
								</div>
							</div>
						</section>
					</div>
				</section>

				<section>
					<div className="mb-10 flex w-full justify-center">
						<Link
							href="https://drive.google.com/file/d/1POQGO0s2za5EcAAWtuxmIlSjGM54dnuH/view"
							target="_blank"
							className="flex items-center rounded-full border border-[var(--accent)] bg-[var(--main)] px-3 py-1.5 pr-3.5 text-[#f5f5f7] hover:bg-[var(--accent)]"
						>
							<Download className="mr-1 h-4" />
							<span>Download</span>
						</Link>
					</div>
				</section>
			</div>
		</>
	);
}
