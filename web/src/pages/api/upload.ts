import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req) => {
    console.log('red', req);
    return {
      //   format: 'pdf',
      folder: 'applicants',
      public_id: Math.random().toString(),
    };
  },
});

const upload = multer({ storage, limits: { fileSize: 10000000 } });
const routes = nc({
  onError,
  onNoMatch,
});

routes.use(upload.single('resume')).post(async (req: NextApiRequest, res) => {
  console.log('files', (req as any).file);
  res.json({ data: 'ok man' });
});

export default routes;
