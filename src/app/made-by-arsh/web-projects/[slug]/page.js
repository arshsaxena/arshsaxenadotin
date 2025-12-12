// app/made-by-arsh/web-projects/[slug]/page.js

import { redirect, notFound } from 'next/navigation';

const allowedSlugs = [
	'tic-tac-toe',
	'snake',
	'ping-pong',
	'rock-paper-scissors',
	'stopwatch',
];

export default function WebProjectPage({ params }) {
	const { slug } = params;

	if (!allowedSlugs.includes(slug)) return notFound();

	redirect(`/made-by-arsh/web-projects/${slug}/index.html`);
}
