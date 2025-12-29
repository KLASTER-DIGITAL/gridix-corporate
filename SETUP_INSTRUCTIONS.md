# GRIDIX: SEO-First Next.js Skeleton Setup

## 1. Environment Setup

1. Copy `.env.local` example (already created).
2. Get your **Public API Key** from [Builder.io Account Settings](https://builder.io/account/space).
3. Update `.env.local`:
   ```bash
   NEXT_PUBLIC_BUILDER_API_KEY=your_key_here
   ```

## 2. Builder.io Models Configuration

You must create the following models in Builder.io to match the code.

### Model 1: `page` (Page Model)
*   **Type**: Page
*   **Name**: `page`
*   **URL Prefix**: `/`
*   **Fields** (Add these custom fields):
    *   `title` (Text) - SEO Title
    *   `description` (Long Text) - Meta Description
    *   `url` (Text, required) - Path (e.g. `/about`)
    *   `ogImage` (File) - Open Graph Image
    *   `canonical` (Text) - Canonical URL override
    *   `noindex` (Boolean) - Hide from search engines

### Model 2: `siteSettings` (Data Model)
*   **Type**: Data
*   **Name**: `siteSettings`
*   **Kind**: Singleton (One record only)
*   **Fields**:
    *   `siteName` (Text)
    *   `defaultTitle` (Text)
    *   `defaultDescription` (Long Text)
    *   `defaultOgImage` (File)

### Model 3: `navigation` (Data Model)
*   **Type**: Data
*   **Name**: `navigation`
*   **Kind**: Singleton
*   **Fields**:
    *   `menuItems` (List)
        *   `label` (Text)
        *   `href` (Text)

## 3. Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## 4. Connecting Visual Editor

1. Go to Builder.io > Content.
2. New Entry > **page**.
3. Set Preview URL to `http://localhost:3000`.
4. You should see the site skeleton. Drag and drop **Custom Components** (CtaButton, JsonLd) from the Insert menu (register them in Builder if needed, or they appear automatically in dev mode if using the SDK correctly).

## 5. SEO Verification
*   **Sitemap**: `/sitemap.xml` (Generated automatically based on published pages).
*   **Robots**: `/robots.txt`.
*   **Metadata**: View Page Source to see `<title>`, `<meta name="description">`, etc. generated on the server.
