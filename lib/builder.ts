import { builder } from '@builder.io/sdk';

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (apiKey) {
    builder.init(apiKey);
} else {
    if (typeof window === 'undefined') {
        console.warn('[Builder] Server-side: NEXT_PUBLIC_BUILDER_API_KEY is missing!');
    } else {
        console.warn('[Builder] Client-side: NEXT_PUBLIC_BUILDER_API_KEY is missing!');
    }
}

export { builder };
