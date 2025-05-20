import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';

const iconMap = { ChevronRight, ExternalLink };

export default function AppsSection() {
	const items = [
		{
			href: '/app',
			label: 'Arsh Saxena',
			desc: 'Official app.',
			icon: '/made-by-arsh/icons/arshsaxena-app-icon.webp',
			alt: 'Arsh Saxena',
			buttonLabel: 'Get App',
			buttonIcon: 'ChevronRight',
			containerCss:
				'pb-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			href: 'https://education.arshsaxena.in/',
			label: 'aEducational',
			desc: 'Destination to education.',
			icon: '/made-by-arsh/icons/aeducational-app-icon.webp',
			alt: 'aEducational',
			buttonLabel: 'Check Out',
			buttonIcon: 'ExternalLink',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			href: 'https://converter.arshsaxena.in/',
			label: 'aConverter',
			desc: 'Seamless unit conversion.',
			icon: '/made-by-arsh/icons/aconverter-app-icon.webp',
			alt: 'aConverter',
			buttonLabel: 'Check Out',
			buttonIcon: 'ExternalLink',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			href: 'https://solarsystem.arshsaxena.in/',
			label: 'Solar System',
			desc: 'HTML, CSS, and JS.',
			icon: '/made-by-arsh/icons/solarsystem-icon.webp',
			alt: 'Solar System',
			css: 'p-[2px]',
			buttonLabel: 'Check Out',
			buttonIcon: 'ExternalLink',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			href: 'https://colors.arshsaxena.in/',
			label: 'Colors',
			desc: 'Hex. RGB. RGBA.',
			icon: '/made-by-arsh/icons/colors-icon.webp',
			alt: 'Colors',
			css: 'p-[2px]',
			buttonLabel: 'Check Out',
			buttonIcon: 'ExternalLink',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			href: 'https://qr.arshsaxena.in/',
			label: 'QR Code Generator',
			desc: 'Type. Generate. QR.',
			icon: '/made-by-arsh/icons/qr-icon.webp',
			alt: 'QR Code Generator',
			buttonLabel: 'Check Out',
			buttonIcon: 'ExternalLink',
			containerCss:
				'py-5 border-b-[1px] border-b-[var(--border-default)]',
		},
		{
			href: 'https://weather.arshsaxena.in/',
			label: 'Weather',
			desc: 'Conditions around the world.',
			icon: '/made-by-arsh/icons/weather-icon.webp',
			alt: 'Weather',
			css: 'p-[0.5px]',
			buttonLabel: 'Check Out',
			buttonIcon: 'ExternalLink',
			containerCss: 'pt-5',
		},
	];

	return (
		<div className="text-md mx-5 mb-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
			<div className="mx-auto flex flex-col justify-between">
				{items.map((item, i) => {
					const ButtonIcon = iconMap[item.buttonIcon];

					return (
						<div
							key={i}
							className={`flex flex-row justify-between md:items-end ${item.containerCss}`}
						>
							<Image
								src={item.icon}
								width={0}
								height={0}
								alt={item.alt}
								className={`h-[70px] w-[70px] rounded-[15px] border-[1px] border-[var(--border-default)] bg-[#f5f5f7] md:h-[80px] md:w-[80px] ${item.css}`}
							/>
							<div className="w-full">
								<div className="ml-3 md:ml-5">
									<div className="text-[17px] font-bold md:text-[23px]">
										{item.label}
									</div>
									<div className="text-sm">{item.desc}</div>
								</div>
								<div className="mt-5 flex w-full justify-end sm:mt-0">
									<Link
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center rounded-full bg-[var(--main)] px-3 text-center text-[#f5f5f7] hover:bg-[var(--accent)]"
									>
										<span className="text-sm md:text-[15px]">
											{item.buttonLabel}
										</span>
										{ButtonIcon && (
											<ButtonIcon
												className={`ml-2 w-[13px] ${item.buttonCss}`}
											/>
										)}
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
