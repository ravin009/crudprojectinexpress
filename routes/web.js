//Routes
import express from 'express'
const router = express.Router()
import StudentController from '../controllers/StudentController.js';


router.get('/', StudentController.getAllDocs)
router.post('/', StudentController.createDocs)
router.get('/edit/:id', StudentController.editDocs)
router.post('/delete/:id', StudentController.deleteDocById)
router.post('/update/:id', StudentController.updateDocById)


export default router;
