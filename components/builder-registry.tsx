import React from 'react';
import { CtaButton } from './CtaButton';
import { JsonLd } from './JsonLd';

export const customComponents = [
    {
        name: 'CtaButton',
        component: CtaButton,
        inputs: [
            {
                name: 'label',
                type: 'string',
                defaultValue: 'Записаться на демо',
                required: true,
            },
            {
                name: 'href',
                type: 'url',
                defaultValue: '#',
                required: true,
            },
            {
                name: 'variant',
                type: 'string',
                enum: ['primary', 'secondary'],
                defaultValue: 'primary'
            },
        ],
    },
    {
        name: 'JsonLd',
        component: JsonLd,
        image: 'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUzsJ%2Ff8c5eb38d82245b6999cb5a525f0a071',
        inputs: [
            {
                name: 'type',
                type: 'string',
                defaultValue: 'FAQPage',
                helperText: 'Schema.org type (e.g. FAQPage, Article)'
            },
            {
                name: 'data',
                type: 'object',
                defaultValue: {},
                helperText: 'JSON object with schema data'
            },
        ],
        noWrap: true,
    },
    {
        name: 'PricingPreview',
        component: () => <div className="p-10 border border-dashed text-center bg-gray-50"> Pricing Preview Placeholder</ div >,
    inputs: [],
  },
{
    name: 'CaseCard',
        component: () => <div className="p-6 shadow-md rounded-lg border bg-white" > Case Card Placeholder </div>,
    inputs: [],
  }
];
