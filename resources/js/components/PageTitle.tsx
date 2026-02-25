import { Link } from '@inertiajs/react';
import Title from './Title';
import { Button } from './ui/button';

type Props = {
    title: string;
    buttonText: string;
    buttonUrl: string;
};

export default function PageTitle({ title, buttonText, buttonUrl }: Props) {
    return (
        <div className="mb-8 flex flex-row items-center justify-between gap-3">
            <Title size="large" className="line-clamp-2 py-1.5">
                {title}
            </Title>
            <Button asChild>
                <Link href={buttonUrl}>{buttonText}</Link>
            </Button>
        </div>
    );
}
