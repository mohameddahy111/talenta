import express from 'express'
import { auth } from '../middleware/auth.js'
import { uploading } from '../middleware/uploading.js'
import { addCustomer, getAllCustomers } from './customer.controller.js'


const router = express.Router()
router.post('/' , auth, uploading().single('logo_customer'),  addCustomer)
router.get('/' ,  getAllCustomers)
export default router