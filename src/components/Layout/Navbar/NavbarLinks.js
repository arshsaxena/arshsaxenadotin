'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NavbarLink({ href, icon: Icon, label, onClick }) {
	return (
		<Link href={href} onClick={onClick}>
			<div className="flex w-fit items-center rounded-[25px] align-middle hover:text-[var(--accent)] md:px-3 md:py-1 md:hover:bg-[var(--main)] md:hover:text-[#f5f5f7]">
				<Icon className="mr-4 w-[15px] pb-[2px] md:mr-1" />
				{label}
			</div>
		</Link>
	);
}
