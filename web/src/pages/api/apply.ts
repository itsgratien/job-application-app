import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/MongoClient';
import nc from 'next-connect';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';
import slug from 'slugify';
import { ApplicationStatusEnum, ApplicantCollectionT } from '@/generated/Applicants';

const routes = nc({
  onNoMatch,
  onError,
});

routes.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectDB();
    const collection = db.collection<ApplicantCollectionT>('applicants');

    const random = (Math.random() * 5000) * Date.now();

    const names = req.body.names.toLowerCase();

    const save = await collection.insertOne({
      names: req.body.names,
      resume: req.body.resume,
      email: req.body.email,
      location: req.body.location,
      phoneNumber: req.body.phoneNumber,
      slug: slug(`${names} ${random}`),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: ApplicationStatusEnum.New
    });

    return res.json({ message: 'Application Saved Successfully', data: save });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to apply due to internal server error' });
  }
});

export default routes;
