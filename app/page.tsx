'use client';
import { signIn } from 'next-auth/react';
import { SessionProvider, useSession } from 'next-auth/react';

export default function Home() {
    const { data: session, status } = useSession();
    console.log(session, status);
    return (
        <SessionProvider>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                Home
                <button onClick={() => signIn()}>Sign In</button>
            </main>
        </SessionProvider>
    );
}
