import express from "express"
import 'dotenv/config'
import beastRouter from "./routes/beast.js"
import morgan from "morgan"

const app = express();
const port = process.env.PUERTO || 3000;

app.use(morgan("tiny"))

app.use("/apiv1", beastRouter)
// listen ( PUERTO ,  CALLBACK)
app.listen(port, () => {
   console.log("Mi servidor esta corriendo 🔥🚀");
})