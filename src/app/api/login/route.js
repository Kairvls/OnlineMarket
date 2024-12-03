import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await pool.execute(query, [email]);

        if (rows.length === 0) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
        }

        return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Login failed', details: error.message }), { status: 500 });
    }
}
