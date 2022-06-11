import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/MongoClient';
import nc from 'next-connect';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';

const routes = nc({
  onNoMatch,
  onError,
});

routes.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectDB();
    const collection = db.collection('applicants');

    const save = await collection.insertOne(req.body);

    return res.json({ message: 'Application saved successfully', data: save });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to apply due to internal server error' });
  }
});

export default routes;
