import React from 'react';
import { Carousel, Card } from '@/components/MadeByArsh/PythonProjectsSection';

export const metadata = {
	title: 'Made by Arsh | Arsh Saxena',
};

export default function MadeByArsh() {
	return (
		<div className="m-auto max-w-[980px]">
			<section className="text-md mx-5 my-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] md:text-[16px] md:dark:border-[var(--border-default)]">
				<Carousel />
			</section>
		</div>
	);
}
