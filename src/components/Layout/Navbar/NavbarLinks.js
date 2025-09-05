// components/Layout/Navbar/NavbarLinks.js

'use client';

import Link from 'next/link';

export default function NavbarLink({ href, icon: Icon, label, onClick }) {
	return (
		<Link href={href} onClick={onClick} className="group/link">
			<div className="group flex w-fit items-center rounded-[25px] align-middle hover:text-[var(--accent)] md:px-3 md:py-1 md:hover:bg-[var(--main)] md:hover:text-[#f5f5f7]">
				<Icon className="mr-4 w-[15px] pb-[1px] md:mr-1.5" />
				{label}
			</div>
		</Link>
	);
}
