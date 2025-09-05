// components/Connect/Form.jsx

'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Label } from '@/components/Connect/FormLabels';
import { Input } from '@/components/Connect/FormInputs';
import { cn } from '@/lib/utils';

import { socialLinksBase } from '@/data/socialLinksBase';

import { SendHorizontal } from 'lucide-react';

export default function SignupFormDemo() {
	const formRef = useRef(null);
	const iframeRef = useRef(null);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		formRef.current.submit();
	};

	const formFields = [
		{
			id: 'entry.171573973',
			name: 'entry.171573973',
			label: 'First name',
			placeholder: 'Tyler',
			type: 'text',
			required: true,
		},
		{
			id: 'entry.1928461864',
			name: 'entry.1928461864',
			label: 'Last name',
			placeholder: 'Durden',
			type: 'text',
			required: true,
		},
		{
			id: 'entry.1467515279',
			name: 'entry.1467515279',
			label: 'Email Address',
			placeholder: 'tyler.durden@td.com',
			type: 'email',
			required: true,
		},
		{
			id: 'entry.1683761149',
			name: 'entry.1683761149',
			label: 'Subject',
			placeholder: 'Greetings',
			type: 'text',
			required: true,
		},
		{
			id: 'entry.1741632373',
			name: 'entry.1741632373',
			label: 'Message',
			placeholder: 'Hey there!',
			type: 'text',
			required: true,
		},
	];

	return (
		<div>
			<div className="text-3xl font-bold text-[var(--foreground)]">
				Connect with me.
			</div>

			{!submitted ? (
				<form
					ref={formRef}
					className="my-5 mb-0"
					method="POST"
					action="https://docs.google.com/forms/d/e/1FAIpQLSdHqFD7rA1z9T3A9McCq8UnIrK7142JfFf0cenD4rEwCdk7YQ/formResponse"
					target="hidden_iframe"
					onSubmit={handleSubmit}
				>
					<input
						type="hidden"
						name="entry.2054206786"
						id="entry.2054206786"
						value="Arsh Saxena"
					/>

					<div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
						{formFields.slice(0, 2).map((field) => (
							<LabelInputContainer key={field.id}>
								<Label htmlFor={field.id}>{field.label}</Label>
								<Input
									id={field.id}
									name={field.name}
									placeholder={field.placeholder}
									type={field.type}
									required={field.required}
								/>
							</LabelInputContainer>
						))}
					</div>

					{formFields.slice(2).map((field) => (
						<LabelInputContainer className="mb-4" key={field.id}>
							<Label htmlFor={field.id}>{field.label}</Label>
							<Input
								id={field.id}
								name={field.name}
								placeholder={field.placeholder}
								type={field.type}
								required={field.required}
							/>
						</LabelInputContainer>
					))}

					<div className="mt-5 flex flex-col gap-4 space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
						<button
							type="submit"
							className="group/btn relative h-[40px] w-full rounded-full border-[1px] border-[var(--accent)] bg-[var(--main)] px-5 py-1 pr-4 font-medium text-white hover:cursor-pointer hover:bg-[var(--accent)] sm:w-fit"
						>
							<div className="flex items-center justify-center">
								<div>Send</div>
								<SendHorizontal className="mb-[1.5px] ml-[1.5px] h-[14px]" />
							</div>
						</button>
						<div className="flex w-fit flex-wrap justify-between gap-4">
							{[
								socialLinksBase.linkedin,
								socialLinksBase.instagram,
								socialLinksBase.x,
							].map((item, i) => (
								<Link key={i} href={item.href}>
									<Image
										src={item.icon}
										width={0}
										height={0}
										alt={item.label}
										className="h-[40px] w-[40px] rounded-[9px]"
									/>
								</Link>
							))}
						</div>
					</div>
				</form>
			) : (
				<p className="mt-8">Received, thank you!</p>
			)}

			<iframe
				name="hidden_iframe"
				ref={iframeRef}
				style={{ display: 'none' }}
				onLoad={() => {
					if (submitted) setSubmitted(true);
				}}
			/>
		</div>
	);
}

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn('flex w-full flex-col space-y-2', className)}>
			{children}
		</div>
	);
};
