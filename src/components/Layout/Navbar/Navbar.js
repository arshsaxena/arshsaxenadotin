// components/Layout/Navbar/Navbar.js

'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import {
	ChevronDown,
	ChevronUp,
	UserRound,
	Code,
	Mail,
	FileText,
} from 'lucide-react';

import NavbarLink from './NavbarLinks';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sticky top-0 z-50 m-auto max-w-[980px] md:top-5">
			<nav className="text-md border-b-[1px] border-b-[var(--border-default)] bg-[var(--surface)] px-5 py-3 backdrop-blur-sm dark:bg-[var(--surface)] md:mx-5 md:mt-5 md:rounded-full md:border-[1px] md:border-[var(--border-default)] md:p-0 md:text-[16px] md:dark:border-[var(--border-default)]">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-lg font-semibold">
						<img
							src="/arsh-favicon.png"
							className="w-[35px] md:w-[50px]"
						/>
					</Link>

					{/* Mobile toggle */}
					<button
						className="rounded-full border border-[var(--accent)] bg-[var(--main)] p-[0.5px] text-[#f5f5f7] md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<ChevronUp className="h-5 w-5" />
						) : (
							<ChevronDown className="h-5 w-5" />
						)}
					</button>

					{/* Desktop links */}
					<div className="hidden md:flex md:pr-3">
						<NavbarLink
							href="/about"
							icon={UserRound}
							label="About"
						/>
						<NavbarLink
							href="/resume"
							icon={FileText}
							label="Resume"
						/>
						<NavbarLink
							href="/made-by-arsh"
							icon={Code}
							label="Made by Arsh"
						/>
						<NavbarLink
							href="/connect"
							icon={Mail}
							label="Connect"
						/>
					</div>
				</div>

				{/* Mobile links dropdown */}
				<div
					className={`overflow-hidden transition-all duration-500 md:hidden ${
						isOpen
							? 'max-h-50 mt-4 border-t border-[var(--border-default)] dark:border-[var(--border-default)]'
							: 'max-h-0'
					}`}
				>
					<div className="flex flex-col space-y-4 py-5 pb-2">
						<NavbarLink
							href="/about"
							icon={UserRound}
							label="About"
							onClick={() => setIsOpen(false)}
						/>
						<NavbarLink
							href="/resume"
							icon={FileText}
							label="Resume"
							onClick={() => setIsOpen(false)}
						/>
						<NavbarLink
							href="/made-by-arsh"
							icon={Code}
							label="Made by Arsh"
							onClick={() => setIsOpen(false)}
						/>
						<NavbarLink
							href="/connect"
							icon={Mail}
							label="Connect"
							onClick={() => setIsOpen(false)}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
}
