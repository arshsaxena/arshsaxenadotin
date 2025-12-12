// data/webTemplatesBase.js

export const rawTemplateData = [
	{
		slug: 'simple-old-school',
		name: 'Simple Old School',
		screenshots: [
			{
				src: '/made-by-arsh/web-templates/simple-old-school/template-screenshot-1.webp',
				caption: 'Home',
			},
			{
				src: '/made-by-arsh/web-templates/simple-old-school/template-screenshot-2.webp',
				caption: 'Gallery',
			},
			{
				src: '/made-by-arsh/web-templates/simple-old-school/template-screenshot-3.webp',
				caption: 'GitHub',
			},
			{
				src: '/made-by-arsh/web-templates/simple-old-school/template-screenshot-4.webp',
				caption: 'Error 404',
			},
		],
		desc: 'A classic, easy-to-read HTML/CSS website with retro styling, basic navigation, and a custom 404 page.',
		features: [
			'Built with HTML and CSS',
			'2-items navigation bar',
			'Good readability',
			'Back button on pages',
			'Social media links',
			'Custom Error 404 page',
			'Custom scrollbar',
		],
		fileName: 'Simple-Old-School-by-Arsh.zip',
		size: '2.12MB',
		downloadLink: '/download/Simple-Old-School-by-Arsh.zip',
		css: 'border-b-[1px] md:border-r-[1px] border-[var(--border-default)]',
	},
	{
		slug: 'apple-style-navigation-bar',
		name: 'Apple Style Navigation Bar',
		screenshots: [
			{
				src: '/made-by-arsh/web-templates/apple-style-navigation-bar/template-screenshot.webp',
				caption: 'Apple Style Navigation Bar',
			},
		],
		desc: 'A sleek, responsive navigation bar inspired by Apple’s design, built with HTML, CSS, and JavaScript.',
		features: [
			'Built with HTML, CSS, and JavaScript',
			'Responsive, mobile-friendly',
			'Dark, eyes-friendly',
			'Modern look',
		],
		fileName: 'Apple-Style-Navigation-Bar-by-Arsh.zip',
		size: '1.83KB',
		downloadLink: '/download/Apple-Style-Navigation-Bar-by-Arsh.zip',
		css: 'border-b-[1px] border-[var(--border-default)]',
	},
	{
		slug: 'modern-footer',
		name: 'Modern Footer',
		screenshots: [
			{
				src: '/made-by-arsh/web-templates/modern-footer/template-screenshot.webp',
				caption: 'Modern Footer',
			},
		],
		desc: 'A minimal HTML/CSS footer with a live clock and responsive layout.',
		features: [
			'Built with HTML and CSS',
			'Responsive, mobile-friendly',
			'Dark, eyes-friendly',
			'Shows date and clock',
		],
		fileName: 'Modern-Footer.zip',
		size: '2.27KB',
		downloadLink: '/download/Modern-Footer.zip',
		css: 'md:border-r-[1px] border-[var(--border-default)]',
	},
];

export const templateData = rawTemplateData.map((item) => ({
	...item,
	href: `/made-by-arsh/templates/${item.slug}`,
}));
