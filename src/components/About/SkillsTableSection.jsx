// components/About/SkillsTableSection.jsx

'use client';

import { useEffect, useState } from 'react';

import CppIcon from '@/assets/about/skills/cpp.svg';
import PythonIcon from '@/assets/about/skills/python.svg';
import NextjsIcon from '@/assets/about/skills/nextjs.svg';
import TailwindcssIcon from '@/assets/about/skills/tailwindcss.svg';
import JavascriptIcon from '@/assets/about/skills/javascript.svg';
import JavaIcon from '@/assets/about/skills/java.svg';
import ReactIcon from '@/assets/about/skills/react.svg';
import VercelIcon from '@/assets/about/skills/vercel.svg';
import HtmlIcon from '@/assets/about/skills/html.svg';
import CssIcon from '@/assets/about/skills/css.svg';
import FlaskIcon from '@/assets/about/skills/flask.svg';
import JqueryIcon from '@/assets/about/skills/jquery.svg';
import BootstrapIcon from '@/assets/about/skills/bootstrap.svg';
import PhpIcon from '@/assets/about/skills/php.svg';
import MysqlIcon from '@/assets/about/skills/mysql.svg';
import MarkdownIcon from '@/assets/about/skills/markdown.svg';
import GitIcon from '@/assets/about/skills/git.svg';

function chunkArray(array, size) {
	if (!Array.isArray(array)) return [];
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}

const skills = [
	{
		label: 'C++',
		icon: CppIcon,
		css: 'hover:bg-[#00599c] hover:text-[#f5f5f7]',
	},
	{
		label: 'Python',
		icon: PythonIcon,
		css: 'hover:bg-[#3670a0] hover:text-[#f5f5f7]',
	},
	{
		label: 'Next.js',
		icon: NextjsIcon,
		css: 'hover:bg-[#000000] hover:text-[#f5f5f7]',
	},
	{
		label: 'Tailwind CSS',
		icon: TailwindcssIcon,
		css: 'hover:bg-[#38b2ac] hover:text-[#f5f5f7]',
	},
	{
		label: 'JavaScript',
		icon: JavascriptIcon,
		css: 'hover:bg-[#f0db4f] hover:text-[#0a0a0a]',
	},
	{
		label: 'Java',
		icon: JavaIcon,
		css: 'hover:bg-[#ed8b00] hover:text-[#f5f5f7]',
	},
	{
		label: 'React',
		icon: ReactIcon,
		css: 'hover:bg-[#00d8ff] hover:text-[#0a0a0a]',
	},
	{
		label: 'Vercel',
		icon: VercelIcon,
		css: 'hover:bg-[#000000] hover:text-[#f5f5f7]',
	},
	{
		label: 'HTML',
		icon: HtmlIcon,
		css: 'hover:bg-[#e34f26] hover:text-[#f5f5f7]',
	},
	{
		label: 'CSS',
		icon: CssIcon,
		css: 'hover:bg-[#3670a0] hover:text-[#f5f5f7]',
	},
	{
		label: 'Flask',
		icon: FlaskIcon,
		css: 'hover:bg-[#000000] hover:text-[#f5f5f7]',
	},
	{
		label: 'jQuery',
		icon: JqueryIcon,
		css: 'hover:bg-[#0769ad] hover:text-[#f5f5f7]',
	},
	{
		label: 'Bootstrap',
		icon: BootstrapIcon,
		css: 'hover:bg-[#8511fa] hover:text-[#f5f5f7]',
	},
	{
		label: 'Pygame',
		icon: PythonIcon,
		css: 'hover:bg-[#4ea94b] hover:text-[#f5f5f7]',
	},
	{
		label: 'PHP',
		icon: PhpIcon,
		css: 'hover:bg-[#777bb4] hover:text-[#f5f5f7]',
	},
	{
		label: 'MySQL',
		icon: MysqlIcon,
		css: 'hover:bg-[#4479a1] hover:text-[#f5f5f7]',
	},
	{
		label: 'Markdown',
		icon: MarkdownIcon,
		css: 'hover:bg-[#000000] hover:text-[#f5f5f7]',
	},
	{
		label: 'Git',
		icon: GitIcon,
		css: 'hover:bg-[#fc6d26] hover:text-[#f5f5f7]',
	},
];

export default function SkillsTable() {
	const [chunkedSkills, setChunkedSkills] = useState([]);

	useEffect(() => {
		const updateCols = () => {
			const width = window.innerWidth;
			const cols = width >= 1024 ? 6 : width >= 768 ? 4 : 2;
			setChunkedSkills(chunkArray(skills, cols));
		};

		updateCols();
		window.addEventListener('resize', updateCols);
		return () => window.removeEventListener('resize', updateCols);
	}, []);

	return (
		<>
			<div className="mr-[1px]">
				<table className="w-full table-fixed border-collapse border-[1px] border-[var(--border-default)] text-center">
					<tbody>
						{chunkedSkills.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{row.map((skill, cellIndex) => (
									<td
										key={cellIndex}
										className={`border-[1px] border-[var(--border-default)] p-2 py-5 transition-all duration-300 ${skill.css} cursor-pointer`}
									>
										<div className="flex items-center justify-center text-[15px]">
											<skill.icon className="mr-2 h-6 w-6" />
											<div className="font-medium">
												{skill.label}
											</div>
										</div>
									</td>
								))}
								{row.length < chunkedSkills[0]?.length &&
									Array.from({
										length:
											chunkedSkills[0].length -
											row.length,
									}).map((_, i) => (
										<td
											key={`empty-${i}`}
											className="p-2"
										/>
									))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
