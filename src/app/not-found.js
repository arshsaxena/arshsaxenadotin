// app/not-found.js

import Link from 'next/link';

export const metadata = {
	title: '404: Page Not Found | Arsh Saxena',
};

export default function NotFound() {
	return (
		<>
			<div className="footer-fill-space m-auto flex w-full max-w-[980px] items-center justify-center text-[var(--foreground)]">
				<div className="m-5 flex flex-row items-center py-16 text-center">
					<div className="border-r-[1px] border-r-[var(--border-default)] py-7 pr-8 text-4xl font-black">
						404
					</div>
					<div className="pl-8 text-left text-sm">
						Page Not Found
						<br />
						Go{' '}
						<Link href="/" className="hover:underline">
							Home
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
