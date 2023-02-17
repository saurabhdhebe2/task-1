import { connect } from 'mongoose';
require('dotenv').config();

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await connect(process.env.MONGO_URI)
    .then(() => {
      console.log('connected to database succesfully');
    })
    .catch((err) => console.log(err));
};

export default dbConnect;
