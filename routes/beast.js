import express from 'express';
import beastData from '../data/horned-beast.json' assert { type: 'json' };

const router = express.Router();

// Obtener todas las bestias
router.get('/beasts', (req, res) => {
    res.json(beastData);
});

router.get('/beasts/:id', (req, res) => {
    const { id } = req.params
    const resultado = beastData.find((elemento)=> elemento.id === parseInt(id))
    res.json(resultado)
});
export default router;