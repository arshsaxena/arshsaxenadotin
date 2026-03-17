// components/Layout/Footer/MadebyArshLinks.js

'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function SocialLink({ href, label, target }) {
	const showChevron = label === 'See More';

	return (
		<div>
			<Link
				href={href}
				className="flex w-fit items-center hover:text-[var(--accent)]"
				target={target}
			>
				<span>{label}</span>
				{showChevron && (
					<ChevronRight className="ml-0.5 mt-[1.5px] h-4 w-4" />
				)}
			</Link>
		</div>
	);
}
