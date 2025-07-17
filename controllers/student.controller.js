import { db } from '../models/db.js';

export const getStudents = async (_, res) => {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
};

export const addStudent = async (req, res) => {
    const { name, age, grade } = req.body;
    await db.query('INSERT INTO students (name, age, grade) VALUES (?, ?, ?)', [name, age, grade]);
    res.status(201).json({ message: 'Student added' });
};

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, age, grade } = req.body;
    await db.query('UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?', [name, age, grade, id]);
    res.json({ message: 'Student updated' });
};

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM students WHERE id = ?', [id]);
    res.status(204).send();
};
