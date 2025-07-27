// components/Connect/FormLabels.jsx

'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

const Label = React.forwardRef(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(
			'text-sm font-normal leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white',
			className,
		)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
