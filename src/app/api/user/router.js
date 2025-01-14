// src/app/api/user/route.js
import { getLoginSession } from '@/lib/auth'; // Utility to fetch session

export async function GET(req) {
    try {
        const session = await getLoginSession(req); // Get session from request

        if (!session) {
            return new Response(JSON.stringify({ error: 'User not authenticated' }), { status: 401 });
        }

        // Retrieve the username from the session
        const username = session.username;

        return new Response(JSON.stringify({ username }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching user data', details: error.message }), { status: 500 });
    }
}
