import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Text from '@/components/About/TextSection';
import SkillsTable from '@/components/About/SkillsTableSection';
import Timeline from '@/components/About/TimelineSection';

export const metadata = {
	title: 'About | Arsh Saxena',
};

export default function TextSection() {
	return (
		<>
			<div className="space-y-5">
				<div>Hi.</div>
				<div>
					I’m Arsh Saxena, a developer currently pursuing a B.Tech. in
					Electronics and Communication Engineering. I have a strong
					interest in programming and web development, and I’m
					proficient in Python and C++. I love exploring new
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
						{ alt: 'books', icon: '/emojis/books.webp' },
						{
							alt: 'boy-using-laptop',
							icon: '/emojis/boy-using-laptop.webp',
						},
						{ alt: 'camera', icon: '/emojis/camera.webp' },
						{ alt: 'laptop', icon: '/emojis/laptop.webp' },
						{
							alt: 'movie-camera',
							icon: '/emojis/movie-camera.webp',
						},
						{ alt: 'pen', icon: '/emojis/writing.webp' },
						{ alt: 'shoes', icon: '/emojis/shoes.webp' },
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
					, ping my anywhere.
				</div>
				<div className="flex flex-wrap items-center gap-4">
					{[
						{
							alt: 'LinkedIn',
							icon: '/social/linkedin.webp',
							href: 'https://linkedin.com/in/arshsaxena',
						},
						{
							alt: 'GitHub',
							icon: '/social/github.webp',
							href: 'https://github.com/arshsaxena',
						},
						{
							alt: 'Instagram',
							icon: '/social/instagram.webp',
							href: 'https://instagram.com/arsh.saxena02',
						},
						{
							alt: 'X',
							icon: '/social/x.webp',
							href: 'https://x.com/arshsaxena02',
						},
					].map((item, i) => (
						<Link key={i} href={item.href}>
							<Image
								src={item.icon}
								width={40}
								height={40}
								alt={item.alt}
								className="rounded-[9px]"
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
