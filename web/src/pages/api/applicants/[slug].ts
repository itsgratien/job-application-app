import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { connectDB } from '@/utils/MongoClient';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';
import { ApplicantCollectionT } from '@/generated/Applicants';

const routes = nc({ onError, onNoMatch });

routes.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectDB();

  const collection = db.collection<ApplicantCollectionT>('applicants');

  const find = await collection.findOne({ slug: req.query.slug });

  return res.json({ data: find });
});

routes.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectDB();

  const collection = db.collection<ApplicantCollectionT>('applicants');

  const find = await collection.findOne({ slug: req.query.slug });

  if (!find) {
    return res.status(404).json({ error: 'Application Not Found' });
  }

  const update = await collection.updateOne(
    { slug: req.query.slug },
    { $set: { status: req.body.status } }
  );

  return res.json({ message: 'Updated Successfully', data: update });
});

export default routes;
