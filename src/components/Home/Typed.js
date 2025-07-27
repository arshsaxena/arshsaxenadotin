// components/Home/Typed.js

'use client';

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

export default function TypedName({ strings = ['Default Text'] }) {
	const el = useRef(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;

		const typed = new Typed(el.current, {
			strings,
			typeSpeed: 50,
			showCursor: false,
		});

		return () => typed.destroy();
	}, [strings, mounted]);

	if (!mounted) return null;

	return <span ref={el}></span>;
}
