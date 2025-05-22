import React from 'react';

import ConnectForm from '@/components/Connect/Form';

export const metadata = {
	title: 'Connect | Arsh Saxena',
};

export default function Connect() {
	return (
		<>
			<div className="m-auto max-w-[980px]">
				<section className="text-md mx-5 my-10 rounded-[25px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] p-5 md:text-[16px] md:dark:border-[var(--border-default)]">
					<ConnectForm />
				</section>
			</div>
		</>
	);
}
