import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';

export default function Header() {
    const { url } = usePage();

    return (
        <header className="flex flex-row items-center justify-between bg-white px-8 py-3 shadow">
            <Link href={'/'} className="flex flex-row items-center gap-3">
                <img
                    src="https://image.indonetwork.co.id/companies/thumbs/400x300/2006/03/22/144489fc8a4c5256af6de27ba4839286.jpg"
                    alt="Logo"
                    className="h-14"
                />
                <div className="hidden flex-col md:flex">
                    <h1 className="text-lg font-bold">Tech Test</h1>
                    <p className="text-base font-medium">PT USSI Pinbuk Prima Software</p>
                </div>
            </Link>

            <nav className="flex flex-row items-center">
                <Link
                    href="/employee"
                    className={cn([
                        'px-3 py-1 font-medium underline decoration-3 underline-offset-12',
                        url.startsWith('/employee') ? 'decoration-blue-500' : 'decoration-transparent',
                    ])}
                >
                    Employee
                </Link>
            </nav>
        </header>
    );
}
