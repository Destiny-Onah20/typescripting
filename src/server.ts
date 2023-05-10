import express, {Request, Response, urlencoded} from "express";
import config from "config"
import bodyParser from "body-parser";
import connect from "./helpers/connect";
import routes from "./routers/users";


const port = config.get<number>("port");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
  res.send("Welcome aboard.")
})

app.listen(port, async()=>{
  console.log(`Listening to port: ${port}`);
  await connect();
  routes(app);
});