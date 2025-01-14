import db from "lib/db";
import { NextResponse } from 'next/navigation';

export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'POST') {
      const db = await getDbConnection();
  
      // Update the view count in the database
      const result = await db.collection('categories').updateOne(
        { id: parseInt(id) },
        { $inc: { view_count: 1 } }
      );
  
      const updatedCategory = await db.collection('categories').findOne({ id: parseInt(id) });
  
      res.status(200).json({ updatedViewCount: updatedCategory.view_count });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }

