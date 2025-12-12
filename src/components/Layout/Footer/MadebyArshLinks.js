// components/Layout/Footer/MadebyArshLinks.js

'use client';

import Link from 'next/link';

export default function SocialLink({ href, label, target }) {
	return (
		<div>
			<Link
				href={href}
				className="flex w-fit items-center hover:text-[var(--accent)]"
				target={target}
			>
				<span>{label}</span>
			</Link>
		</div>
	);
}
