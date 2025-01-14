import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try{
        const [cannedGoodsItems] = await db.query('SELECT id, name, price_per_kg FROM canned_goods_items)');

        return new NextResponse(JSON.stringify(cannedGoodsItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed fething data', error);
        return new NextResponse(JSON.stringify({ error: 'Failed fetching the data'}), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, price_per_kg} = body;

        if(!name || !price_per_kg) {
            return new NextResponse.json({ error: 'Failed fetching name and price_per_kg'}, { status: 400 });
        }

        const query = 'INSERT INTO canned_goods_items(name, price_per_kg) VALUES(?, ?)';
        await db.execute(query [name, price_per_kg]);

        return new NextResponse.json({ message: 'Successfully added the name and price_per_kg'}, { status: 201 });
    }
    catch (error) {
        console.error('Failed fething data', error);
        return new NextResponse.json({ error: 'Failed fething the data'}, { status: 500 });chat
    }
}