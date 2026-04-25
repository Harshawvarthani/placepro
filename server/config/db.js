import mongoose from "mongoose";

const connectDB = async () => {
  console.log("MONGO URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Error:", err.message);
  }
};

export default connectDB;