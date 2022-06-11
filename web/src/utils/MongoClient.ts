import { MongoClient, ServerApiVersion } from 'mongodb';

export const connectDB = async () => {
  const client = new MongoClient(process.env.DATABASE_URL || '', {
    serverApi: ServerApiVersion.v1,
  });

  await client.connect();

  const database = client.db(process.env.DATABASE_NAME);

  return database;
};
