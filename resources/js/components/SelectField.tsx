import { Field, FieldLabel } from '@/components/ui/field';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ErrorField from './ErrorField';

type Props<T> = {
    title: string;
    placeholder?: string;
    name: string;
    value: T;
    options: SelectOptions<T>;
    error?: string;
    onValueChange: (value: T) => void;
};

export default function SelectField<T extends string | number | boolean>({
    title,
    placeholder,
    name,
    value,
    options,
    error,
    onValueChange,
}: Props<T>) {
    return (
        <Field aria-invalid={!!error}>
            <FieldLabel>{title}</FieldLabel>

            <Select
                name={name}
                value={String(value)}
                onValueChange={(val) => {
                    let parsed: T;

                    if (typeof value === 'number') {
                        parsed = Number(val) as T;
                    } else if (typeof value === 'boolean') {
                        parsed = (val === 'true') as T;
                    } else {
                        parsed = val as T;
                    }

                    onValueChange(parsed);
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        {options.map((o) => (
                            <SelectItem key={String(o.value)} value={String(o.value)}>
                                {o.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {error && <ErrorField message={error} />}
        </Field>
    );
}
