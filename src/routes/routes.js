import express from "express"
import { getDevjobs } from "../controllers/devjob-controler.js"

const devjobRoute = express.Router()

devjobRoute.get('/job/:size/:page',getDevjobs)

export default devjobRoute