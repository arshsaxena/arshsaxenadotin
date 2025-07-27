// components/Layout/Footer/SocialLinks.js

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SocialLink({ href, src, alt, label }) {
	return (
		<Link
			href={href}
			className="flex items-center hover:text-[var(--accent)]"
			target="_blank"
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
