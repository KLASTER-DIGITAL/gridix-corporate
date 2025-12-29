'use client';

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { customComponents } from './builder-registry';
import { BuilderContent } from '@builder.io/sdk';

interface RenderBuilderContentProps {
    content: BuilderContent | null;
    model: string;
}

export const RenderBuilderContent = ({ content, model }: RenderBuilderContentProps) => {
    const isPreviewing = useIsPreviewing();

    if (!content && !isPreviewing) {
        return (
            <div className="flex h-64 items-center justify-center">
                <p>Content not found.</p>
            </div>
        );
    }

    return (
        <BuilderComponent
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            content={content as any}
            model={model}
            customComponents={customComponents}
        />
    );
};
