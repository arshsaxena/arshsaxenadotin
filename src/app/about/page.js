// app/about/page.js

import React from 'react';

import Text from '@/components/About/TextSection';
import SkillsTable from '@/components/About/SkillsTableSection';
import Timeline from '@/components/About/TimelineSection';

export const metadata = {
	title: 'About | Arsh Saxena',
	description:
		'Hey, I’m Arsh, a web developer with a passion for programming and creating engaging digital experiences. This is my personal portfolio where I showcase my projects. Feel free to explore and get to know me better!',
};

export default function About() {
	return (
		<>
			<div className="m-auto max-w-[980px]">
				<section className="text-md mx-5 mt-10 space-y-5 rounded-t-[25px] border-[1px] border-b-0 border-[var(--border-default)] bg-[var(--surface)] p-5 font-normal md:dark:border-[var(--border-default)]">
					<Text />
				</section>
				<section className="text-md mx-5 overflow-hidden bg-[var(--surface)] md:text-[16px]">
					<SkillsTable />
				</section>
				<section className="text-md mx-5 mb-10 rounded-b-[25px] border-[1px] border-t-0 border-[var(--border-default)] bg-[var(--surface)] p-5 md:p-10 md:text-[16px] md:dark:border-[var(--border-default)]">
					<Timeline />
				</section>
			</div>
		</>
	);
}
