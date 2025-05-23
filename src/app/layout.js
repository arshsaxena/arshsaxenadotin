import { Inter } from 'next/font/google';
import '@/styles/global.css';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import AnimatedBackground from '@/components/Common/AnimateBackground';
import Navbar from '@/components/Layout/Navbar/Navbar';
import Footer from '@/components/Layout/Footer/Footer';
import SetMetaThemeColor from '@/components/Theme/SetMetaThemeColor';
import PageWrapper from '@/components/Common/PageTransitionWrapper';

export const metadata = {
	icons: {
		icon: '/arsh-favicon.png',
		shortcut: '/arsh-favicon.png',
		apple: '/arsh-favicon-apple.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={GeistSans.classname}
			suppressHydrationWarning
		>
			<body className={`overflow-x-hidden font-sans antialiased`}>
				<AnimatedBackground />
				<div className="container m-auto max-w-[980px]">
					<SetMetaThemeColor />
					<Navbar />

					{/* Page Transition Wrapper */}
					{/* <PageWrapper> */}
					{children}
					{/* </PageWrapper> */}

					<Footer />
				</div>
			</body>
		</html>
	);
}
