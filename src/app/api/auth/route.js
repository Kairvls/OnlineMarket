import { parse } from 'cookie';

export async function GET(req) {
    try {
        const cookies = parse(req.headers.get('cookie') || '');
        const username = cookies.username;

        if (!username) {
            return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
        }

        return new Response(JSON.stringify({ username }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching username', details: error.message }), { status: 500 });
    }
}
