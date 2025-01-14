// File: /pages/api/dashboard.js
export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Hello from the backend!' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  