import express from 'express';
import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from '../controllers/student.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();
router.use(authenticate);

router.get('/', getStudents);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
