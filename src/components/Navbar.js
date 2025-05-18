'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 md:top-5 z-50 max-w-[980px] m-auto'>
            <nav className="md:mt-5 md:mx-5 bg-[var(--surface)] dark:bg-[var(--surface)] md:rounded-full md:p-0 px-5 py-3 md:text-[16px] text-md border-b-[1px] border-b-[var(--border-default)] md:border-[1px] md:border-[var(--border-default)] md:dark:border-[var(--border-default)] backdrop-blur-sm">
                <div className="flex justify-between items-center">
                    <Link href="/" className="font-semibold text-lg">
                        <img src="/arsh-favicon.png" className='w-[35px] md:w-[50px]' />
                    </Link>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden bg-[var(--main)] rounded-full p-[0.5px] text-[#f5f5f7]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>

                    {/* Desktop links */}
                    <div className="hidden md:flex space-x-10 md:pr-[25px]">
                        <Link href="/about" className='md:hover:text-[var(--accent)]'>About</Link>
                        <Link href="/made-by-arsh" className='md:hover:text-[var(--accent)]'>Made by Arsh</Link>
                        <Link href="/connect" className='md:hover:text-[var(--accent)]'>Connect</Link>
                    </div>
                </div>

                {/* Mobile links dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-500 md:hidden ${
                        isOpen
                            ? 'max-h-40 mt-4 border-t border-[var(--border-default)] dark:border-[var(--border-default)]'
                            : 'max-h-0'
                    }`}
                >
                    <div className="flex flex-col space-y-4 py-5 pb-2">
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/made-by-arsh" onClick={() => setIsOpen(false)}>Made by Arsh</Link>
                        <Link href="/connect" onClick={() => setIsOpen(false)}>Connect</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}