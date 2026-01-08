import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
    // Validate that the incoming `locale` parameter is valid
    let locale = await requestLocale;
    if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        // You can load messages from JSON files here if you want to use local translations
        // For now, most content comes from Builder.io
        messages: {}
    };
});
