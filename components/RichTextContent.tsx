interface RichTextContentProps {
    html: string;
    className?: string;
}

export function RichTextContent({ html, className = "" }: RichTextContentProps) {
    if (!html) return null;

    return (
        <div
            className={`prose prose-invert prose-slate max-w-none ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
                // Custom styles for better readability
                color: 'rgb(226 232 240)', // slate-200
            }}
        />
    );
}

