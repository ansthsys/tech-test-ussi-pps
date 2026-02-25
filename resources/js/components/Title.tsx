import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type Props = ComponentProps<'p'> & {
    size?: 'large' | 'medium' | 'small';
};

export default function Title({ size = 'medium', children, className, ...props }: Props) {
    return (
        <p
            className={cn([
                {
                    'text-2xl font-bold md:text-3xl lg:text-4xl': size === 'large',
                    'text-lg font-semibold md:text-xl lg:text-2xl': size === 'medium',
                    'text-base font-medium lg:text-lg': size === 'small',
                },
                className,
            ])}
            {...props}
        >
            {children}
        </p>
    );
}
