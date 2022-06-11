import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError, onNoMatch } from '@/utils/ApiErrorHandler';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req) => {
    return {
      format: 'pdf',
      folder: 'applicants',
      public_id: Math.random().toString(),
    };
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      cb(new Error('File Should Be PDF'));
    } else {
      cb(null, true);
    }
  },
});

const routes = nc({
  onError,
  onNoMatch,
});

routes.use(upload.single('resume')).post(async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ data: (req as any).file, message: 'Uploaded Successfully' });
});

export default routes;
