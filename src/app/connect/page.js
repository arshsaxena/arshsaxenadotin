// app/connect/page.js

import React from 'react';

import ConnectForm from '@/components/Connect/Form';

export const metadata = {
	title: 'Connect | Arsh Saxena',
	description:
		'Fill this form to connect with me. Hey, I’m Arsh, a web developer with a passion for programming and creating engaging digital experiences. This is my personal portfolio where I showcase my projects. Feel free to explore and get to know me better!',
};

export default function Connect() {
	return (
		<>
			<div className="m-auto max-w-[980px]">
				<section className="text-md mx-5 my-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
					<ConnectForm />
				</section>
			</div>
		</>
	);
}
