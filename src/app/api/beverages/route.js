import db from 'lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [beveragesItems] = await db.query('SELECT * FROM beverages');

        return new NextResponse(JSON.stringify(beveragesItems), {status: 200});
    }
    catch (error) {
        console.error('Failed to access beveages_items', error);
        return new NextResponse(JSON.stringify({error: 'Failed to add new items from beverages items'}), {status:500});
    }
}

export async function POST(req) {
    const {
        name,
        description,
        price,
        bottle_1_5L,
        ml_500,
        bottle_500ml,
        L_1,
        ml_355,
        kg_1_pack,
        ml_200_pack,
        bottle_5_pack,
      } = req.body;
      const query = `INSERT INTO beverages (name, description, price, \`1.5L-Bottle\`, \`500ml\`, \`500ml-Bottle\`, \`1L\`, \`355ml\`, \`1kg-Pack\`, \`200ml-Pack\`, \`5-Bottle-Pack\`)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        name,
        description,
        price,
        bottle_1_5L || null,
        ml_500 || null,
        bottle_500ml || null,
        L_1 || null,
        ml_355 || null,
        kg_1_pack || null,
        ml_200_pack || null,
        bottle_5_pack || null,
      ];
    try {
        await db.execute(query, values); // Use your MySQL connection here
        res.status(200).send("Beverage added successfully!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding beverage.");
    }
}