import express from 'express'
import { addAdmin, adminInfo, adminLogout, loginAdmin } from './admin.cotroller.js'
import { validetor } from '../middleware/validetor.js'
import { addValidtion, loginValidtion } from './admin.validtion.js'
import { auth } from '../middleware/auth.js'
import { uploading } from '../middleware/uploading.js'

const router = express.Router()

router.post('/' , validetor(loginValidtion) , loginAdmin)
router.post('/add_admin',uploading().single('admin_img'), validetor(addValidtion), addAdmin)
router.get('/admin_info', auth, adminInfo) 
router.patch('/' , auth , adminLogout)
export default router
