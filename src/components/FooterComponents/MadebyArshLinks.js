'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SocialLink({ href, src, alt, label }) {
    return (
        <Link href={href} className="flex items-center hover:text-[var(--accent)]" target="_blank" rel="noopener noreferrer">
            <span>{label}</span>
        </Link>
    );
}