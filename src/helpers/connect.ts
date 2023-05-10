import mongoose from "mongoose";
import config from "config";


const connect = async()=>{

const dbConnect = config.get<string>("database");

  try {
    await mongoose.connect(dbConnect);
    console.log("Database connected successfully..");
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connect;