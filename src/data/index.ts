import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConn = () => {
  const uri: string =
    process.env.MONGO_URI || 'mongodb://localhost/koa_default';

  const options = {
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  };

  return connect(uri, options);
};
