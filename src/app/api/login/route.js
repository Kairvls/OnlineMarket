import bcrypt from 'bcryptjs';
import pool from 'lib/db';
import { serialize } from 'cookie';

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await pool.execute(query, [email]);

        if (rows.length === 0) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
        }

        
        const cookie = serialize('username', user.username, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return new Response(
            JSON.stringify({ message: 'Login successful', username: user.username }),
            {
                status: 200,
                headers: { 'Set-Cookie': cookie },
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error logging in', details: error.message }), { status: 500 });
    }
}
