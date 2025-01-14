import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const [result] = await pool.execute(query, [username, email, hashedPassword]);

        return new Response(JSON.stringify({ message: 'User created successfully!' }), { status: 201 });
        
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error creating user', details: error.message }), { status: 500 });
    }
}
