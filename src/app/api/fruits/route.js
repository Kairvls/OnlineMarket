import db from 'lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [fruitsItems] = await db.query('SELECT * FROM fruits');

        return new NextResponse(JSON.stringify(fruitsItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed to access from fruitsItems', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to add new fruitsItems'}), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, price_per_kg } = body;

        if(!name || !price_per_kg)  {
            return new NextResponse.json({ error: 'Need to add name and price_per_kg are required'}, { status: 400 });
        }

        const query = 'INSERT FROM fruits_items (name, price_per_kg) VALUES(?, ?)';
        await db.execute(query [name, price_per_kg]);

        return new NextResponse.json({ error: 'Successfully added a new items for fruitsItems'}, { status: 201});
    }
    catch (error) {
        console.error('Failed to add new fruits items', error);
        return new NextResponse.json({ error: 'Failed to add items from fruits'}, { status: 500 });
    }
}