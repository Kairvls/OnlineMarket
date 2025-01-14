import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [personalCareHygieneItems] = await db.query('SELECT id, name, price_per_kg FROM personal_care_hygiene_items');

        return new NextResponse(JSON.stringify(personalCareHygieneItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed fetching data', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch the data from the server'}), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, price_per_kg} = body;

        if(!name || !price_per_kg) {
            return new NextResponse.json({ error: 'Failed to fetch the name and price per kg'}, { status: 400 });
        }

        const query = 'INSERT INTO personal_care_hygiene_items(name, price_per_kg) VALUES(?, ?)';
        await db.execute(query [name, price_per_kg]);

        return new NextResponse.json({ message: 'Successfully added the name and price per kg'}, { status: 201 });
    }
    catch (error) {
        console.error('Failed to fetch data', error);
        return new NextResponse.json({ error: 'Failed fetching data'}, { status: 500 });
    }
}