import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { connectDB } from '@/utils/MongoClient';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';
import { ApplicantCollectionT } from '@/generated/Applicants';

const routes = nc({ onError, onNoMatch });

routes.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectDB();

  const collection = db.collection<ApplicantCollectionT>('applicants');

  const totalItems = await collection.countDocuments();

  const find = await collection.find({}).sort('names', 1).limit(10).toArray();

  return res.json({ data: find, totalItems });
});

export default routes;
