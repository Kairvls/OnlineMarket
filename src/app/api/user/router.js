// src/app/api/user/route.js
export async function GET() {
    const userData = {username: 'admin', password: 'admin123'  };
    return new Response (JSON.stringify(userData), {status: 200});
};
