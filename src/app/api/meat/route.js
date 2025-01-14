import db from 'lib/db'; // Import database connection
import { NextResponse } from 'next/server';



export async function GET(req) {
    try {
        const [meatItems] = await db.query('SELECT * FROM meat');

        return new NextResponse(JSON.stringify(meatItems), { status: 200 });
    }
    catch (error) {
        console.error('Failed fetching data', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
    }
}

// POST Request: Add a new seafood item
export async function POST(req) {
    try {
        const meatData = [
            { id: 1, name: 'Chicken-Breast', price_per_kg: 230.0, description: 'Lean and versatile, perfect for grilling, frying, or salads.'},
            { id: 2, name: 'Pork-Belly', price_per_kg: 370.0, description: 'Tender and flavorful, ideal for grilling, roasting, or stews'},
            { id: 3, name: 'Ground-Pork', price_per_kg: 300.0, description: 'Great for meatballs, pasta sauces, or stuffing dishes.'},
            { id: 4, name: 'Beef-Sirloin', price_per_kg: 450.0, description: 'Juicy and tender, excellent for steaks and stir-fries.'},
            { id: 5, name: 'Chicken-Drumsticks', price_per_kg: 220.0, description: 'Flavorful and easy to cook, ideal for frying or baking.'},
            { id: 6, name: 'Pork-Chops', price_per_kg: 350.0, description: 'A meaty and juicy cut, perfect for grilling or pan-searing.'},
            { id: 7, name: 'Beef-Short-Ribs', price_per_kg: 450.0, description: 'Rich and tender, great for slow-cooked soups and stews.'},
            { id: 8, name: 'Chicken-Wings', price_per_kg: 250.0, description: 'Perfect for fried or baked appetizers and snacks.'},
            { id: 9, name: 'Whole-Chicken', price_per_kg: 200.0, description: 'Ideal for roasting or as a hearty main dish.'},
            { id: 10, name: 'Pork-Spare-Ribs', price_per_kg: 350.0, description: 'Succulent and tasty, perfect for BBQ or braised dishes.'}
        ];

        const queries = meatData.map(item => 
            db.query(`INSERT INTO seafood_items (id, name, price_per_kg, description) VALUES (?, ?, ?, ?)`, [item.id, item.name, item.price_per_kg, item.description])
        );
        await Promise.all(queries);

        return NextResponse(JSON.stringify({ message: 'Seafood item added successfully' }), { status: 201 });
    } catch (error) {
        console.error('Error adding seafood item:', error);
        return NextResponse(JSON.stringify({ error: 'Failed to add seafood item' }), { status: 500 });
    }
}
