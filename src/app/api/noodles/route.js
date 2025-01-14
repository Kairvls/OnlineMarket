import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [noodlesItems] = await db.query('SELECT id, name, price_per_kg FROM noodles_items');

        return new NextResponse(JSON.stringify(noodlesItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed to fetech the data', error);
        return new NextResponse(JSON.stringify({ error: 'Failed of fetching the data'}), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, price_per_kg} = body;

        if(!name || !price_per_kg) {
            return new NextResponse.json({ error: 'Failed fetching the data of name and price_per_kg'}, { status: 400 });
        }

        const query = 'INSERT INTRO noodles_items(name, price_per_kg) VALUES(?, ?)';
        await db.execute(query [name, price_per_kg]);

        return new NextResponse.json({ message: 'Successfully added the name and price_per_kg'}, { status: 201 });
    }
    catch (error) {
        console.error('Failed fetching data', error);
        return new NextResponse.json({ error: 'Failed fething the data from noodles items'}, { status: 500 });
    }
}