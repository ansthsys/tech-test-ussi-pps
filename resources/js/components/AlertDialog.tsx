import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import {
    AlertDialog as AlertDialogUi,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import type { Button } from './ui/button';

type Props = PropsWithChildren & {
    title: string;
    description?: string;
    cancelText?: string;
    canceButtonProps?: ComponentPropsWithoutRef<typeof Button>;
    submitText?: string;
    submitButtonProps?: ComponentPropsWithoutRef<typeof Button>;
    onCancel?: () => void;
    onSubmit?: () => void;
};

export function AlertDialog({
    title,
    description,
    children,
    cancelText = 'Cancel',
    canceButtonProps,
    submitText = 'Continue',
    submitButtonProps,
    onCancel,
    onSubmit,
}: Props) {
    return (
        <AlertDialogUi>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel} {...canceButtonProps}>
                        {cancelText}
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmit} {...submitButtonProps}>
                        {submitText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogUi>
    );
}
