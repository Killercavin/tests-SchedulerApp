import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
   try {
      const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
      console.log(`\n>Connected to database✅ \n> DB HOST: ${connectionInstance.connection.host}\n> DB Name: ${connectionInstance.connection.name}\n`);
   } catch (error) {
      console.error('Database Connection Failed: ', error)
      process.exit(1)
   }
}

export default connectDB