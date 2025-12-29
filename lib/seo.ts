export const generateOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gridix',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-555-5555',
        contactType: 'Sales',
    },
    sameAs: [
        'https://twitter.com/gridix',
        'https://linkedin.com/company/gridix'
    ]
});

export const generateSoftwareApplicationSchema = (name: string, description: string, price?: string) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
        '@type': 'Offer',
        price: price || '0',
        priceCurrency: 'USD',
    }
});
