import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [condimentsSpicesItems] = await db.query('SELECT id, name, price_per_kg FROM condiments_spices_items');

        return new NextResponse(JSON.stringify(condimentsSpicesItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed to fetch data', error);
        return new NextResponse(JSON.stringify({ error: 'Failed fetching data'}), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, price_per_kg} = body;

        if(!name || !price_per_kg) {
            return new NextResponse.json({ error: 'Failed added name and price per kg'}, { status: 400 });
        }

        const query = 'INSERT INTO condiments_spices_items(name, price_per_kg) VALUES(?, ?)';
        await db.execute(query [name, price_per_kg]);

        return new NextResponse.json({ message: 'Successfully added name and price per kg'}, { status: 201 });
    }
    catch (error) {
        console.error('Failed fetching data', error);
        return new NextResponse.json({ error: 'Failed to fetch the data'}, { status: 500 });
    }
}