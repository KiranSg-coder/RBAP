import express from 'express'
import { Getuser } from '../controllers/ManagerController.js'
import { isManager } from '../middleware/verifyToken.js'



const ManagerRoutes = express.Router()
ManagerRoutes.get('/getuser', isManager, Getuser)

export default ManagerRoutes