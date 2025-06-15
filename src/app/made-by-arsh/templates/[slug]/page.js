import { templateData } from '@/data/webTemplatesBase';
import TemplateContent from './TemplateContent';

export function generateMetadata({ params }) {
	const template = templateData.find((t) => t.slug === params.slug);
	return {
		title: `${template.name} | Made by Arsh | Arsh Saxena`,
		description: `${template.name} | Made by Arsh | Hi, I’m Arsh — a web developer with a passion for programming and creating engaging digital experiences. This is my personal portfolio where I showcase my projects. Feel free to explore and get to know me better!`,
	};
}

export default function TemplatePage({ params }) {
	const template = templateData.find((t) => t.slug === params.slug);
	if (!template) return notFound();

	return <TemplateContent template={template} />;
}
