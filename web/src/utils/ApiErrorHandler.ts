import type { NextApiRequest, NextApiResponse } from 'next';

export const onError = (error: any, req: NextApiRequest, res: NextApiResponse) => {
  console.error(error.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};

export const onNoMatch = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(404).json({ error: 'API Not Found' });
};
