import { builder } from '@builder.io/sdk';

// Initialize Builder with the API key from environment variables
// Using empty string fallback to prevent crash during build if key is missing,
// but it should be provided in .env.local
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

export { builder };
