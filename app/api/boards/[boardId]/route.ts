import prisma from '@/app/utils/connect';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

async function GET(req: NextApiRequest) {
    const { boardId }: { boardId?: string } = req.query;
    try {
        const board = await prisma.board.findUnique({
            where: {
                id: boardId,
            },
        });

        if (board) {
            NextResponse.json(board);
        }
        NextResponse.json(
            {
                error: `Board with boardId: ${boardId} not found`,
            },
            { status: 400 },
        );
    } catch (err) {
        NextResponse.json({ error: err }, { status: 500 });
    }
}

export { GET };
