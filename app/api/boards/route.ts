import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/app/utils/connect';
import { BoardType } from '@/app/utils/types';
import { CreateBoardRequest } from '@/app/utils/constants';

async function GET() {
    try {
        const boards = await prisma.board.findMany();
        return NextResponse.json(boards, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            {
                error: err,
                message: `Failed to get boards `,
            },
            { status: 500 },
        );
    }
}

async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, description, ownerId, members }: CreateBoardRequest = body;
    try {
        const newBoard: BoardType = await prisma.board.create({
            data: { name, description, ownerId, members },
        });
        return NextResponse.json(newBoard);
    } catch (err) {
        return NextResponse.json(
            {
                error: err,
                message: `Failed to create ${name} `,
            },
            { status: 500 },
        );
    }
}

async function PUT(req: NextRequest) {
    const body = await req.json();
    const { name, description, ownerId, members, id }: CreateBoardRequest =
        body;

    if (!id)
        NextResponse.json({ error: 'boardId is undefined' }, { status: 400 });
    try {
        const updatedBoard = await prisma.board.update({
            where: { id },
            data: { name, description, ownerId, members },
        });

        if (updatedBoard) {
            return NextResponse.json(updatedBoard);
        }
    } catch (err) {
        return NextResponse.json(
            {
                error: err,
                message: `Failed to update board ${id} `,
            },
            { status: 500 },
        );
    }
}

export { GET, POST, PUT };
