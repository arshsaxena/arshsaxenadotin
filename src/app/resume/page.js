// app/resume/page.js

import Content from '@/components/Resume/Content';

export const metadata = {
	title: 'Resume | Arsh Saxena',
	description: 'This is Arsh Saxena’s resume.',
};

export default function Resume() {
	return (
		<>
			<Content />
		</>
	);
}
