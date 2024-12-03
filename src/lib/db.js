import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'kaisuan', // Replace with your MySQL password
    database: 'nextjs_app',
});

export default pool;
