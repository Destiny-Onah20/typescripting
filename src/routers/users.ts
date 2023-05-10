import { Express, Request, Response} from "express";
import { signUp } from "../controllers/user";
import validate from "../middlewares/validate";
import { userSchema } from "../schemas/user.schema";

const routes = (app: Express)=>{
  app.get("/welcome", (req:Request, res: Response)=>{
    res.send("Welcome Onboard.")
  });

  app.post("/api/signup", validate(userSchema) , signUp)
};

export default routes;