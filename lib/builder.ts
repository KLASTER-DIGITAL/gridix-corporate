import { builder } from '@builder.io/sdk';

// Initialize Builder with the API key from environment variables.
// Note: passing an empty string to `builder.init()` results in a null apiKey internally,
// which then throws during fetch. So we only init if we have a real key.
const builderApiKey =
  process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? process.env.BUILDER_API_KEY ?? '';

if (builderApiKey) {
  builder.init(builderApiKey);
} else {
  // Keep a helpful warning from upstream without spamming production logs.
  if (process.env.NODE_ENV !== 'production') {
    if (typeof window === 'undefined') {
      console.warn(
        '[Builder] Server-side: NEXT_PUBLIC_BUILDER_API_KEY is missing. Builder content will not load.',
      );
    } else {
      console.warn(
        '[Builder] Client-side: NEXT_PUBLIC_BUILDER_API_KEY is missing. Builder content will not load.',
      );
    }
  }
}

export { builder, builderApiKey };
