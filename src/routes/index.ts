import {Router} from "express";
import {carAdRouter} from "./carAdRouter";
const router = Router()
router.use('/car-ad', carAdRouter)

export {router}