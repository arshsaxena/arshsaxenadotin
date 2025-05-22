import Image from 'next/image';
import Link from 'next/link';

export default function SocialsSection() {
	return (
		<>
			<div className="mx-auto flex max-w-sm flex-col justify-between md:max-w-4xl md:flex-row">
				<div className="text-md flex items-center font-normal md:text-xl">
					Ping me anywhere!
				</div>
				<div className="mt-5 flex flex-wrap items-center gap-4 md:mt-0">
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
