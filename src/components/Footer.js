'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ChevronDown, ChevronUp } from 'lucide-react';

import SocialLink from './FooterComponents/SocialLinks';
import MadebyArshLink from './FooterComponents/MadebyArshLinks';

import ThemeToggle from '@/components/ThemeToggle';
import TopButton from '@/components/TopButton';

export default function Footer() {
    const [timeString, setTimeString] = useState('');
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const showTime = () => {
            const time = new Date();
            const month = time.toLocaleString('default', { month: 'long' });
            const date = time.getDate();
            const year = time.getFullYear();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let am_pm = "AM";

            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            } else if (hour === 0) {
                hour = 12;
            }

            const formattedTime = `${month} ${date}, ${year} • ${hour < 10 ? "0" + hour : hour
                }:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec} ${am_pm}`;

            setTimeString(formattedTime);
            setYear(year);
        };

        showTime(); // Initial call
        const interval = setInterval(showTime, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <>
            <div className='max-w-[980px] m-auto'>
                <div className='md:m-5 text-sm p-5 bg-[var(--surface)] dark:bg-[var(--surface)] md:mb-0 mb-0 border-t-[1px] md:border-[1px] md:border-b-0 border-[var(--border-default)] dark:border-[var(--border-default)] md:rounded-t-[25px]'>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Column 1 - Discover */}
                        <div>
                            <h3 className="font-semibold text-md mb-3">Discover</h3>
                            <div className="flex flex-col space-y-2 text-[var(--muted)]">
                                <Link href="/about" className="hover:text-[var(--accent)]">About</Link>
                                <Link href="/connect" className="hover:text-[var(--accent)]">Connect</Link>
                            </div>
                        </div>

                        {/* Column 2 - Made By Arsh */}
                        <div>
                            <h3 className="font-semibold text-md mb-3">Made By Arsh</h3>
                            <div className="flex flex-col space-y-2 text-[var(--muted)]">
                                <MadebyArshLink href="https://education.arshsaxena.in/" label="aEducational" />
                                <MadebyArshLink href="https://converter.arshsaxena.in/" label="aConverter" />
                                <MadebyArshLink href="https://solarsystem.arshsaxena.in/" label="Solar System" />
                                <MadebyArshLink href="https://colors.arshsaxena.in/" label="Colors" />
                                <MadebyArshLink href="https://qr.arshsaxena.in/" label="QR Code Generator" />
                                <MadebyArshLink href="https://weather.arshsaxena.in/" label="Weather" />
                                <MadebyArshLink href="/made-by-arsh/#templates" label="Templates" />
                            </div>
                        </div>

                        {/* Column 3 - Social */}
                        <div>
                            <h3 className="font-semibold text-md mb-3">Social</h3>
                            <div className="flex flex-col space-y-2 text-[var(--muted)]">
                                <SocialLink href="https://linkedin.com/in/arshsaxena" src="/linkedin.png" alt="LinkedIn" label="LinkedIn" />
                                <SocialLink href="https://github.com/arshsaxena" src="/github.png" alt="GitHub" label="GitHub" />
                                <SocialLink href="https://instagram.com/arsh.saxena02" src="/instagram.png" alt="Instagram" label="Instagram" />
                                <SocialLink href="https://x.com/arshsaxena02" src="/x.png" alt="X" label="X" />
                                <SocialLink href="https://music.apple.com" src="/apple-music.png" alt="Apple Music" label="Apple Music" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='space-y-5 mt-10'>
                        <ThemeToggle />
                        <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 pb-3 md:pb-5 border-b-[1px] border-b-[var(--border-default)]'>
                            <div>{timeString}</div>
                            <div>Copyright © {year} Arsh Saxena.</div>
                        </div>
                    </div> */}
                    <div className='space-y-5 mt-10'>
                        <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 pb-3 md:pb-5 border-b-[1px] border-b-[var(--border-default)]'>
                            <div>{timeString}</div>
                            <div>Copyright © {year} Arsh Saxena.</div>
                        </div>
                    </div>
                    <div className='space-y-5 mt-5'>
                        <div className='flex flex-col sm:flex-row justify-between space-y-5 sm:space-y-0 pb-3 sm:pb-5'>
                            <div className='font-black flex items-center align-middle'>
                                Made with &nbsp;
                                <Image src="/emojis/heart.png" width={17} height={17} alt='heart' />
                                &nbsp; in India.
                            </div>
                            <div className='flex justify-between align-middle'>
                                <ThemeToggle />
                                <TopButton />
                            </div>
                        </div>
                    </div>
                    {/* <div className='pt-5 md:flex align-middle justify-center'>
                        <span className='font-black'>Made with ❤️ in India</span>
                    </div> */}
                </div>
            </div>
        </>
    );
}