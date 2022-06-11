import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/MongoClient';
import nc from 'next-connect';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';
import slug from 'slugify';

const routes = nc({
  onNoMatch,
  onError,
});

routes.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectDB();
    const collection = db.collection('applicants');

    const random = Math.random() * 5000;

    const names = req.body.names.toLowerCase();

    const save = await collection.insertOne({ ...req.body, slug: slug(`${names} ${random}`) });

    return res.json({ message: 'Application Saved Successfully', data: save });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to apply due to internal server error' });
  }
});

export default routes;
