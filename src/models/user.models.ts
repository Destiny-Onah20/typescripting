import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface userDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(userPassword: string):Promise<Boolean>
}


const userschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  }
},{
  timestamps: true
});

userschema.pre("save", async function(next){
  let user = this as userDocument;
  if(!user.isModified("password")){
    return next();
  }else{
    const salt = await bcrypt.genSalt(config.get<number>("saltNumber"));
    const hash = bcrypt.hashSync(user.password, salt)
    user.password = hash;
    return next();
  }
})

userschema.methods.comparePassword = async function(userPassword: string): Promise<Boolean>{
  let user = this as userDocument
  return await bcrypt.compare(userPassword, user.password).catch((error)=> false)
}

const userModel = mongoose.model("Users", userschema);



export default userModel;