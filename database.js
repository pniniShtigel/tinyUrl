import mongoose from "mongoose";

// Replace the uri string with your connection string.

const uriLocal = "mongodb://localhost:27017/TinyUrl";

const connectDB = async () => {
  await mongoose.connect(uriLocal);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
