import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SkillsTable from "@/components/About/SkillsTable";

export const metadata = {
    title: 'About | Arsh Saxena',
};

export default function page() {

    return (
        <>
            <div className="m-auto max-w-[980px]">
                <div className="text-md mx-5 mt-10 rounded-t-[25px] border-[1px] border-[var(--border-default)] border-b-0 bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)] space-y-5 font-normal">
                    <div>
                        Hi.
                    </div>
                    <div>
                        I’m Arsh Saxena, a developer currently pursuing a B.Tech. in Electronics and Communication Engineering. I have a strong interest in programming and web development, and I’m proficient in Python and C++. I love exploring new technologies and constantly improving my skills.
                    </div>
                    <div>
                        Beyond coding, I’m into photography, video editing, and photo editing. I also enjoy writing engaging content, especially in English composition. In my free time, I watch movies and TV shows, and I collect sneakers as a hobby.
                    </div>
                    <div className="flex w-fit flex-wrap justify-start gap-2">
                        {[
                            { alt: 'books', icon: '/emojis/books.webp' },
                            { alt: 'boy-using-laptop', icon: '/emojis/boy-using-laptop.webp' },
                            { alt: 'camera', icon: '/emojis/camera.webp' },
                            { alt: 'laptop', icon: '/emojis/laptop.webp' },
                            { alt: 'movie-camera', icon: '/emojis/movie-camera.webp' },
                            { alt: 'pen', icon: '/emojis/writing.webp' },
                            { alt: 'shoes', icon: '/emojis/shoes.webp' },
                        ].map((item, i) => (
                            <Image
                                key={i}
                                src={item.icon}
                                width={21}
                                height={21}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                    <div>
                        Take a look at my work on <Link href="/made-by-arsh" className='text-[var(--accent)] hover:underline'>Made by Arsh</Link>.
                    </div>
                    <div>
                        Let's <Link href="/connect" className='text-[var(--accent)] hover:underline'>connect</Link>, ping my anywhere.
                    </div>
                </div>
                <div className="text-md mx-5 bg-[var(--surface)] md:text-[16px] overflow-hidden">
                    <div>
                        <SkillsTable className="mr-[1px]" />
                    </div>
                </div>
            </div>
            <div className="text-md mx-5 mb-10 rounded-b-[25px] border-[1px] border-t-0 border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]"></div>
        </>
    );
}
