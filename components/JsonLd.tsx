import React from 'react';

export interface JsonLdProps {
    type?: string;
    data: Record<string, unknown>;
}

export const JsonLd = ({ type, data }: JsonLdProps) => {
    // Ensure we have context and type
    const json = {
        '@context': 'https://schema.org',
        '@type': type || (data['@type'] as string) || 'Thing',
        ...data,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
    );
};
