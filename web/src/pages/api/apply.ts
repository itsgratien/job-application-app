import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/MongoClient';

const apply = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectDB();
    const collection = db.collection('applicants');

    const save = await collection.insertOne(req.body);

    return res.json({ message: 'Application saved successfully', data: save });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to apply due to internal server error' });
  }
};

export default apply;
