import type { PropsWithChildren } from 'react';
import Header from './Header';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main className="mx-auto w-full px-6 py-8 md:max-w-4/5 lg:max-w-11/12">{children}</main>
        </>
    );
}
