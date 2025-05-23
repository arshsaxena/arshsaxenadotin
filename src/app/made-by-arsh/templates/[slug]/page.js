import { templateData } from '@/components/data/webTemplatesBase';
import TemplateContent from './TemplateContent';

export function generateMetadata({ params }) {
	const template = templateData.find((t) => t.slug === params.slug);
	return {
		title: `${template.name} | Made by Arsh | Arsh Saxena`
	};
}

export default function TemplatePage({ params }) {
	const template = templateData.find((t) => t.slug === params.slug);
	if (!template) return notFound();

	return <TemplateContent template={template} />;
}
