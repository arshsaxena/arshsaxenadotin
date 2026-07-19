// components/About/TextSection.jsx

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { socialLinksBase } from '@/data/socialLinksBase';

export default function TextSection() {
	return (
		<>
			<div className="space-y-5">
				<div>Hey.</div>
				<div>
					I'm Arsh Saxena, a final-year Electronics and Communication
					Engineering student interested in software engineering. I
					enjoy building software for the{' '}
					<span className="inline-flex items-center gap-1 whitespace-nowrap align-middle">
						<Image
							src="/emojis/web.webp"
							width={20}
							height={20}
							alt="web"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							web
						</span>
					</span>
					,{' '}
					<span className="ml-1 inline-flex items-center gap-1 whitespace-nowrap align-middle">
						<Image
							src="/emojis/desktop.webp"
							width={20}
							height={20}
							alt="desktop"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							desktop
						</span>
					</span>
					, and{' '}
					<span className="ml-1 inline-flex items-center gap-1 whitespace-nowrap align-middle">
						<Image
							src="/emojis/rocket.webp"
							width={20}
							height={20}
							alt="beyond"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							beyond
						</span>
					</span>
					, while capturing moments through{' '}
					<span className="ml-1 inline-flex items-center gap-1 whitespace-nowrap align-middle">
						<Image
							src="/emojis/camera.webp"
							width={20}
							height={20}
							alt="photography"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							photography
						</span>
					</span>{' '}
					and turning ideas into practical applications.
				</div>
				<div>
					I enjoy learning new technologies, experimenting with ideas,
					and building projects that challenge me to grow. Whether
					it's contributing to{' '}
					<span className="font-bold">open source</span>, building{' '}
					<span className="font-bold">personal projects</span>, or
					putting together something creative through{' '}
					<span className="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
						<Image
							src="/emojis/pen.webp"
							width={20}
							height={20}
							alt="writing"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							writing
						</span>
					</span>{' '}
					and{' '}
					<span className="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
						<Image
							src="/emojis/movie-camera.webp"
							width={20}
							height={20}
							alt="editing"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							photo
						</span>
					</span>{' '}
					<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
						& video editing
					</span>
					, I enjoy creating things and learning along the way.
				</div>
				<div>
					When I'm not coding, you'll usually find me{' '}
					<span className="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
						<Image
							src="/emojis/popcorn.webp"
							width={20}
							height={20}
							alt="movies"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							watching
						</span>
					</span>{' '}
					<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
						movies and TV shows
					</span>{' '}
					or{' '}
					<span className="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
						<Image
							src="/emojis/shoes.webp"
							width={20}
							height={20}
							alt="sneakers"
							className="h-[20px] w-[20px] select-none"
						/>
						<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
							collecting
						</span>
					</span>{' '}
					<span className="font-bold text-[var(--main)] dark:text-[var(--accent)]">
						sneakers
					</span>
					.
				</div>
				<div>
					Check out my work on{' '}
					<Link
						href="/made-by-arsh"
						className="font-bold text-[var(--main)] hover:underline dark:text-[var(--accent)]"
					>
						Made by Arsh
					</Link>
					.
				</div>
				<div>
					Let's{' '}
					<Link
						href="/connect"
						className="font-bold text-[var(--main)] hover:underline dark:text-[var(--accent)]"
					>
						connect
					</Link>
					. I'd love to hear from you.
				</div>
				<div className="flex flex-wrap items-center gap-2.5">
					{[
						socialLinksBase.linkedin,
						socialLinksBase.github,
						socialLinksBase.instagram,
						socialLinksBase.x,
					].map((item, i) => (
						<Link key={i} href={item.href} target="_blank">
							<Image
								src={item.icon}
								width={40}
								height={40}
								alt={item.label}
								className="rounded-[9px]"
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
