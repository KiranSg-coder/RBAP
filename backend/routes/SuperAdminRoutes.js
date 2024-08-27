import express from 'express'
import { Getuser, deletUser, updateUserRole } from '../controllers/SuperAdmin.js'
import { isSuperAdmin } from '../middleware/verifyToken.js'



const SuperAdminRoutes = express.Router()
SuperAdminRoutes.get('/getuser', isSuperAdmin, Getuser)
SuperAdminRoutes.delete('/delete/:id', isSuperAdmin, deletUser)
SuperAdminRoutes.put('/update-role/:id', isSuperAdmin, updateUserRole);

export default SuperAdminRoutes