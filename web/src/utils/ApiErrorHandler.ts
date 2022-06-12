import type { NextApiRequest, NextApiResponse } from 'next';

export const onError = (error: any, _req: NextApiRequest, res: NextApiResponse) => {
  console.error('Error:', error.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};

export const onNoMatch = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.status(404).json({ error: 'API Not Found' });
};
