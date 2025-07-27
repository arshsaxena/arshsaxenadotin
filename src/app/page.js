// app/page.js

import AnimatedImgs from '@/components/Home/AnimatesImgsSection';
import SocialsSection from '@/components/Home/SocialsSection';
import MadeByArshSection from '@/components/Home/MadeByArshSection';

export const metadata = {
	title: 'Arsh Saxena',
	description:
		'Hey, I’m Arsh, a web developer with a passion for programming and creating engaging digital experiences. This is my personal portfolio where I showcase my projects. Feel free to explore and get to know me better!',
	authors: [{ name: 'Arsh Saxena', url: 'https://www.arshsaxena.in' }],
	creator: 'Arsh Saxena',
};

export default function Home() {
	return (
		<>
			<div className="m-auto max-w-[980px]">
				<section className="text-md mx-5 mt-10 rounded-t-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 pt-10 md:p-0 md:text-[16px] md:dark:border-[var(--border-default)]">
					<AnimatedImgs />
				</section>
				<section className="text-md mx-5 mb-10 rounded-b-[25px] border-[1px] border-t-0 border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
					<SocialsSection />
				</section>
				<section className="text-md mx-5 mb-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
					<MadeByArshSection />
				</section>
			</div>
		</>
	);
}
