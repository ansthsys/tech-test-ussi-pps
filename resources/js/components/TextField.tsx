import { Input } from '@/components/ui/input';
import ErrorField from './ErrorField';
import { Field, FieldLabel } from './ui/field';

type Props = {
    id?: string;
    title: string;
    placeholder?: string;
    type: TextInputType;
    name: string;
    value: string;
    error?: string;
    onChange: (e: string) => void;
};

export default function TextField({ id, title, placeholder, type, name, value, error, onChange }: Props) {
    return (
        <Field aria-invalid={!!error}>
            <FieldLabel htmlFor={id}>{title}</FieldLabel>
            <Input id={id} type={type} placeholder={placeholder} name={name} value={value} onChange={(e) => onChange(e.target.value)} />
            {error && <ErrorField message={error} />}
        </Field>
    );
}
