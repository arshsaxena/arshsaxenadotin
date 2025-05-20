'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SocialLink({ href, src, alt, label }) {
	return (
		<Link
			href={href}
			className="flex items-center hover:text-[var(--accent)]"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={src}
				alt={alt}
				className="rounded-[3px]"
				width={15}
				height={15}
			/>
			<span className="ml-2">{label}</span>
		</Link>
	);
}
