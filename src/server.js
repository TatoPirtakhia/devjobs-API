import bodyParser from "body-parser"
import express from "express"
import connect from "./database/mongo.js"
import dotenv from "dotenv"
import cors from 'cors'
import swaggerMiddleware from "./middlewares/swager-middlewares.js"
import devjobRoute from "./routes/routes.js"

const app = express()
dotenv.config();
connect()

app.use(bodyParser.json())
app.use("/images", express.static("public/storage"));
app.use(cors());
app.use('/api',devjobRoute)

app.use("/", ...swaggerMiddleware())

app.listen(process.env.PORT || 3000)