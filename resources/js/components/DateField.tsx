'use client';

import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import ErrorField from './ErrorField';
import { Field, FieldLabel } from './ui/field';

type Props = {
    title: string;
    placeholder?: string;
    value?: Date;
    error?: string;
    onChange: (date: Date | undefined) => void;
};

export default function DateField({ title, placeholder, value, error, onChange }: Props) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Field aria-invalid={!!error}>
                    <FieldLabel>{title}</FieldLabel>
                    <Button
                        type="button"
                        variant="outline"
                        data-empty={!value}
                        className="justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                    >
                        {value ? format(value, 'yyyy-MM-dd') : <span>{placeholder ?? title}</span>}
                        <ChevronDownIcon />
                    </Button>
                    {error && <ErrorField message={error} />}
                </Field>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={value} onSelect={onChange} defaultMonth={value} />
            </PopoverContent>
        </Popover>
    );
}
