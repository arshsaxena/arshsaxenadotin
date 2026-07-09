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
					I'm Arsh Saxena, a B.Tech. student in Electronics and
					Communication Engineering with a strong passion for software
					development, problem solving, and building impactful
					applications. I enjoy turning ideas into practical solutions
					and continuously expanding my technical expertise.
				</div>
				<div>
					My primary programming language is C++, and I also work with
					Python and JavaScript. I'm currently focused on mastering
					Data Structures & Algorithms, strengthening my
					problem-solving skills, and building full-stack web
					applications while preparing for software engineering roles.
				</div>
				<div>
					I enjoy learning new technologies, writing clean and
					efficient code, and working on projects that challenge me to
					grow as a developer. I'm always looking for opportunities to
					improve, whether through personal projects, competitive
					programming, or exploring modern development tools and
					frameworks.
				</div>
				<div>
					Outside of coding, I enjoy photography, photo and video
					editing, watching movies and TV shows, and collecting
					sneakers.
				</div>
				<div className="flex w-fit flex-wrap justify-start gap-2">
					{[
						{
							alt: 'boy-using-laptop',
							icon: '/emojis/boy-using-laptop.webp',
						},
						{
							alt: 'camera',
							icon: '/emojis/camera.webp',
						},
						{
							alt: 'laptop',
							icon: '/emojis/laptop.webp',
						},
						{
							alt: 'movie-camera',
							icon: '/emojis/movie-camera.webp',
						},
						{
							alt: 'pen',
							icon: '/emojis/writing.webp',
						},
						{
							alt: 'shoes',
							icon: '/emojis/shoes.webp',
						},
					].map((item, i) => (
						<Image
							key={i}
							src={item.icon}
							width={21}
							height={21}
							alt={item.alt}
						/>
					))}
				</div>
				<div>
					Take a look at my work on{' '}
					<Link
						href="/made-by-arsh"
						className="text-[var(--accent)] hover:underline"
					>
						Made by Arsh
					</Link>
					.
				</div>
				<div>
					Let's{' '}
					<Link
						href="/connect"
						className="text-[var(--accent)] hover:underline"
					>
						connect
					</Link>
					, ping me anywhere.
				</div>
				<div className="flex flex-wrap items-center gap-4">
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
