// components/Home/SocialsSection.jsx

import Image from 'next/image';
import Link from 'next/link';

import { socialLinksBase } from '@/data/socialLinksBase';

export default function SocialsSection() {
	return (
		<>
			<div className="mx-auto flex max-w-sm flex-col justify-between md:max-w-4xl md:flex-row">
				<div className="text-md flex items-center font-normal md:text-xl">
					Ping me anywhere!
				</div>
				<div className="mt-5 flex flex-wrap items-center gap-4 md:mt-0">
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
