import { FieldDescription } from './ui/field';

type Props = {
    message?: string;
};

export default function ErrorField({ message }: Props) {
    return (
        <FieldDescription>
            <span className="text-red-500">{message}</span>
        </FieldDescription>
    );
}
