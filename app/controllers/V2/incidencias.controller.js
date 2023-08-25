import { con } from '../../../config/connection/atlas.js';
const db = await con();
const incidencias = db.collection('incidencias');


const get2Incidencias = async (req,res) => {
    try {
        if (!req.rateLimit) return
        console.log(req.rateLimit);
        const result = await incidencias.find({ categoria: "Software" }).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }    
}

export { get2Incidencias}