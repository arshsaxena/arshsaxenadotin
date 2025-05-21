import Image from 'next/image';
import Link from 'next/link';

import MadeByArshSection from '@/components/Home/MadeByArshSection';

import { AnimatedImgs } from '@/components/Home/AnimatesImgs';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const metadata = {
	title: 'Arsh Saxena',
};

const imgs = [
	{ src: '/images/img1.webp' },
	{ src: '/images/img2.webp' },
	{ src: '/images/img3.webp' },
	{ src: '/images/img4.webp' },
	{ src: '/images/img5.webp' },
	{ src: '/images/img6.webp' },
	{ src: '/images/img7.webp' },
];

export default function Home() {
	return (
		<>
			<div className="m-auto max-w-[980px]">
				<div className="text-md mx-5 mt-10 rounded-t-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 pt-10 md:p-0 md:text-[16px] md:dark:border-[var(--border-default)]">
					<AnimatedImgs imgs={imgs} />
				</div>
				<div className="text-md mx-5 mb-10 rounded-b-[25px] border-[1px] border-t-0 border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
					<div className="mx-auto flex  flex-col justify-between md:max-w-4xl md:flex-row">
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
								{
									alt: 'Apple Music',
									icon: '/social/apple-music.webp',
									href: 'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe',
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
				</div>
				<MadeByArshSection />
			</div>
			{/* <div className="m-5 mb-10">
                <div className="mt-10 justify-between gap-3 grid grid-cols-1 grid-rows-6 xsm:grid-cols-2 xsm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 text-center ">
                    {[
                        { href: '/connect', icon: '/email.webp', alt: 'Connect', label: '/connect' },
                        { href: 'https://linkedin.com/in/arshsaxena', icon: '/linkedin.webp', alt: 'LinkedIn', label: '@in/arshsaxena' },
                        { href: 'https://github.com/arshsaxena', icon: '/github.webp', alt: 'GitHub', label: '@arshsaxena' },
                        { href: 'ttps://instagram.com/arsh.saxena02', icon: '/instagram.webp', alt: 'Instagram', label: '@arsh.saxena02' },
                        { href: 'https://x.com/arshsaxena02', icon: '/x.webp', alt: 'X', label: '@arshsaxena02' },
                        { href: 'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe', icon: '/apple-music.webp', alt: 'Apple Music', label: "Arsh's Favorites" },
                    ].map((item, i) => (
                        <Link key={i} href={item.href} className="" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center bg-[var(--surface)] rounded-full md:p-7 md:px-0 md:py-0 text-[13px] md:text-[14px] border-[1px] border-[var(--border-default)] md:dark:border-[var(--border-default)] hover:bg-[var(--border-default)]">
                                <Image src={item.icon} width={35} height={35} alt={item.alt} className="rounded-full bg-[#0a0a0a] mr-2 md:mr-4" />
                                <span>{item.label}</span>
                            </div>

                        </Link>
                    ))}
                </div>
            </div> */}
		</>
	);
}
