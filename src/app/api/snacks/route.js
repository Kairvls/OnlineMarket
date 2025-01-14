import db from "lib/db";
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [snacksItems] = await db.query('SELECT * FROM snacks');

        return new NextResponse(JSON.stringify(snacksItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed fetching data', error);
        return new NextResponse(JSON.stringify({ error: 'failed to fetch data' }), { status: 500 });
    }
}

export async function POST(req) {
    try {
    const body = await response.json();
    const { name, price_per_kg } = body;

    if(!name || !price_per_kg) {
        return new NextResponse.json({ error: 'failed to add name and price_per_kg'}, { status: 400 });
    }

    const query = 'INSERT INTO snacks(name, price_per_kg) VALUES(?, ?)';
    await db.execute(query [name, price_per_kg]);

    return new NextResponse.json({ message: 'Successfully added the name and price_per_kg'}, { status: 201 });
    }
    catch (error) {
        console.error('Failed to fetch the data', error);
        return new NextResponse.json({ error: 'Failed fetching data' }, { status: 500 });
    }
}