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
					I’m Arsh Saxena, a developer currently pursuing a B.Tech. in
					Electronics and Communication Engineering. I have a strong
					interest in programming and web development, and I’m
					proficient in C/C++ and Python. I love exploring new
					technologies and constantly improving my skills.
				</div>
				<div>
					Beyond coding, I’m into photography, video editing, and
					photo editing. I also enjoy writing engaging content,
					especially in English composition. In my free time, I watch
					movies and TV shows, and I collect sneakers as a hobby.
				</div>
				<div className="flex w-fit flex-wrap justify-start gap-2">
					{[
						{
							alt: 'books',
							icon: '/emojis/books.webp',
						},
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
						<Link key={i} href={item.href}>
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
