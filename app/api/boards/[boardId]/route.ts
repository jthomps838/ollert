import prisma from '@/app/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

async function GET(req: NextRequest) {
    try {
        const { pathname } = new URL(req.nextUrl);
        const boardId = pathname.split('/').pop();
        const board = await prisma.board.findUnique({
            where: {
                id: boardId,
            },
        });

        if (board) {
            return NextResponse.json(board);
        }
        return NextResponse.json(
            {
                error: `Board with boardId: ${boardId} not found`,
            },
            { status: 400 },
        );
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

async function DELETE(req: NextRequest) {
    try {
        const { pathname } = new URL(req.nextUrl);
        const boardId = pathname.split('/').pop();
        const board = await prisma.board.delete({
            where: {
                id: boardId,
            },
        });

        if (board) {
            return NextResponse.json(board);
        }
        return NextResponse.json(
            {
                error: `Board with boardId: ${boardId} not found`,
            },
            { status: 400 },
        );
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

export { GET, DELETE };
