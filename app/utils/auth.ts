import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from 'next-auth/next';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Adapter } from 'next-auth/adapters';

import prisma from './connect';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    debug: true,
};

export const getAuthSession = () => getServerSession(authOptions);
