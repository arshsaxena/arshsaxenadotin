// components/Connect/FormInputs.jsx

'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				`flex h-10 w-full rounded-[10px] border-[1px] border-[var(--border-default)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--accent)]`,
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});

Input.displayName = 'Input';

export { Input };
