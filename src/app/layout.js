import '@/styles/global.css';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { SpeedInsights } from '@vercel/speed-insights/next';

import AnimatedBackground from '@/components/Common/AnimateBackground';
import Navbar from '@/components/Layout/Navbar/Navbar';
import Footer from '@/components/Layout/Footer/Footer';
import SetMetaThemeColor from '@/components/Theme/SetMetaThemeColor';

export const metadata = {
	icons: {
		icon: '/arsh-favicon.png',
		shortcut: '/arsh-favicon.png',
		apple: '/arsh-favicon-apple.png',
	},
	alternates: {
		canonical: '/',
		types: {
			'application/xml': [
				{
					url: '/sitemap.xml',
					title: 'Sitemap',
				},
			],
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={GeistSans.className}
			suppressHydrationWarning
		>
			<head>
				<meta
					name="msvalidate.01"
					content="DC6B1176FF0074A02A9E0710AC91421D"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "6dmz3grbop");`,
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Arsh Saxena',
							url: 'https://www.arshsaxena.in',
							sameAs: [
								'https://www.facebook.com/arsh.saxena02',
								'https://www.twitter.com/arshsaxena02',
								'https://www.instagram.com/arsh.saxena02',
								'https://www.linkedin.com/in/arshsaxena',
								'https://www.github.com/arshsaxena',
								'https://www.arshsaxena.in',
							],
							jobTitle:
								'Student, developer, photographer, tech enthusiast, video editor, writer, and sneakerhead',
							image: 'https://www.arshsaxena.in/arsh-favicon.png',
						}),
					}}
				/>
			</head>
			<body className="overflow-x-hidden font-sans antialiased">
				<AnimatedBackground />
				<div className="container m-auto max-w-[980px]">
					<SetMetaThemeColor />
					<Navbar />
					{children}
					<SpeedInsights />
					<Footer />
				</div>
			</body>
		</html>
	);
}
