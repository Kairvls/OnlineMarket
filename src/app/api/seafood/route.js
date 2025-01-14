import db from 'lib/db'; // Import database connection
import { NextResponse } from 'next/server';



export async function GET(req) {
    try {
        const [seafoodItems] = await db.query('SELECT * FROM seafood');

        return new NextResponse(JSON.stringify(seafoodItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed fetching data', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
    }
}

// POST Request: Add a new seafood item
export async function POST(req) {
    try {
        const seafoodData = [
            { id: 1, name: 'Crab', price_per_kg: 400.0, description: 'Fresh crab from the sea!'},
            { id: 2, name: 'Shrimp', price_per_kg: 320.0, description: 'Juicy and delicious shrimp.'},
            { id: 3, name: 'Salmon', price_per_kg: 600.0, description: 'Premium quality salmon.'},
            { id: 4, name: 'Squid', price_per_kg: 480.0, description: 'Tender squid, perfect for grilling or frying.'},
            { id: 5, name: 'Tilapia', price_per_kg: 170.0, description: 'A versatile fish for various dishes.'},
            { id: 6, name: 'Lobster', price_per_kg: 1700.0, description: 'The king of seafood.'},
            { id: 7, name: 'Tuna', price_per_kg: 300.0, description: 'Rich and flavorful tuna for sashimi or grilling.'},
            { id: 8, name: 'Lapulapu', price_per_kg: 500.0, description: 'A prized fish for special Filipino recipes.'}
        ];

        const queries = seafoodData.map(item => 
            db.query(`INSERT INTO seafood_items (id, name, price_per_kg, description) VALUES (?, ?, ?, ?)`, [item.id, item.name, item.price_per_kg, item.description])
        );
        await Promise.all(queries);

        return NextResponse(JSON.stringify({ message: 'Seafood item added successfully' }), { status: 201 });
    } catch (error) {
        console.error('Error adding seafood item:', error);
        return NextResponse(JSON.stringify({ error: 'Failed to add seafood item' }), { status: 500 });
    }
}
