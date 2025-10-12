// app/made-by-arsh/templates/[slug]/page.js

import { templateData } from '@/data/webTemplatesBase';
import TemplateContent from './TemplateContent';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
	const template = templateData.find((t) => t.slug === params.slug);
	return {
		title: `${template.name} | Made by Arsh | Arsh Saxena`,
		description: `${template.name} template made by Arsh. ${template.desc}`,
	};
}

export default function TemplatePage({ params }) {
	const template = templateData.find((t) => t.slug === params.slug);
	if (!template) return notFound();

	return <TemplateContent template={template} />;
}
