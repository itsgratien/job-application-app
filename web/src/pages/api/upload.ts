import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError, onNoMatch} from '@/utils/ApiErrorHandler';

const routes = nc({
  onError,
  onNoMatch,
});

routes.post(async (req, res) => {
  res.json({ data: 'ok man' });
});

export default routes;
