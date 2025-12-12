// app/made-by-arsh/page.js

import React from 'react';

import { WebProjects } from '@/components/MadeByArsh/WebProjectsSection';
import { WebMiniProjects } from '@/components/MadeByArsh/WebMiniProjectsSection';
import { PythonProjects } from '@/components/MadeByArsh/PythonProjectsSection';
import { WebTemplates } from '@/components/MadeByArsh/WebTemplatesSection';

export const metadata = {
	title: 'Made by Arsh | Arsh Saxena',
	description:
		'Explore the project made by Arsh. Hey, I’m Arsh, a web developer with a passion for programming and creating engaging digital experiences. This is my personal portfolio where I showcase my projects. Feel free to explore and get to know me better!',
};

export default function MadeByArsh() {
	return (
		<div className="m-auto max-w-[980px]">
			<section className="text-md mx-5 my-10 rounded-[25px] bg-[var(--surface)] md:text-[16px]">
				<WebProjects />
				<WebMiniProjects />
			</section>
			<section className="text-md mx-5 my-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] md:text-[16px]">
				<PythonProjects />
			</section>
			<section
				id="templates"
				className="text-md mx-5 my-10 scroll-mt-24 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] md:text-[16px]"
			>
				<WebTemplates />
			</section>
		</div>
	);
}
