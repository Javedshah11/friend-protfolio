import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hisham Khan | Electrical & Electronic Engineer',
  description: 'Portfolio of Hisham Khan, an Electrical & Electronic Engineering graduate focused on renewable energy, photovoltaic systems, power electronics and inverter technologies.',
  keywords: ['Electrical Engineer', 'Renewable Energy', 'Power Electronics', 'Solar PV', 'Photovoltaic Inverter'],
  authors: [{ name: 'Hisham Khan' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Hisham Khan | Electrical & Electronic Engineer',
    description: 'Renewable Energy • Power Electronics • Solar / PV Systems',
    type: 'profile',
    images: [{ url: '/og.png', width: 1734, height: 908, alt: 'Hisham Khan electrical engineering portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hisham Khan | Electrical & Electronic Engineer', description: 'Renewable Energy • Power Electronics • Solar / PV Systems', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Hisham Khan', jobTitle: 'Electrical & Electronic Engineering Graduate', email: 'mailto:hishamsarkarkhan@gmail.com', telephone: '+92 344 5373988', address: { '@type': 'PostalAddress', addressLocality: 'Khar Batkhela', addressRegion: 'District Malakand', addressCountry: 'PK' }, alumniOf: { '@type': 'CollegeOrUniversity', name: 'COMSATS University Islamabad', department: 'Abbottabad Campus' }, knowsAbout: ['Renewable Energy', 'Solar / PV Systems', 'Power Electronics', 'Inverter Systems'] }) }} />
      </body>
    </html>
  );
}
