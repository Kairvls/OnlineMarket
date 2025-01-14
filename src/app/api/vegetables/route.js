import db from 'lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [vegetablesItems] = await db.query('SELECT * FROM vegetables');

        return new NextResponse(JSON.stringify(vegetablesItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed to acces vegetabesItems', error);
        return new NextResponse(JSON.stringify({error: 'Failed to select vegetablesItems'}), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, price_per_kg } = body;

        if(!name || !price_per_kg) {
            return new NextResponse.json({error: 'Failed to add new vegetables items'}, { status: 400 });
        }

        const query = 'INSERT ITEMS from vegetables_items(name, price_per_kg) VALUES(?, ?)';
        await db.execute(query [name, price_per_kg]);

        return new NextResponse.json({ message: "Successfully added a new vegetables items"}, { status: 201} );
    }
    catch (error) {
        console.error('Failed to access data from vegetables items', error);
        return new NextResponse.json({ error: 'Failed to acces from vegetables items'}, { status: 500 });
    }
}