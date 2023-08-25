import { con } from '../../../config/connection/atlas.js';
import { siguienteId } from '../../helpers/autoincrement.js';
const db = await con();
const incidencias = db.collection('incidencias');

const postIncidencias = async(req, res) => {
    try {
        if (!req.rateLimit) return
        console.log(req.rateLimit);
        let { id,fecha_reporte, ...data} = req.body;
        
        id = await siguienteId('incidencias');
        //* Sí la fecha es null o undefined se establece la actual 
        fecha_reporte = fecha_reporte ?? new Date(Date.now())

        await incidencias.insertOne({id:id,fecha_reporte: new Date(fecha_reporte), ...data });
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
    }
    res.status(201).json({status:201,message:"Incidencia added successfully :D"})
}
const getIncidencias = async (req, res) => {
    try {
        if(!req.rateLimit)return
        console.log(req.rateLimit);
        
        const result = await incidencias.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
    }
}
const putIncidencias = async (req, res) => {
    try {
        if (!req.rateLimit) return
        console.log(req.rateLimit);
        let { id, fecha_reporte, ...data } = req.body;
        const dateFecha = new Date(fecha_reporte)
        await incidencias.updateOne({ id }, { $set: { fecha_reporte: dateFecha ,...data} });
        res.status(200).json({status:200,message:"Incidencia updated successfully :D"});
    } catch (error) {
        res.status(404).json({status:404,message:"Couldnt find that 'incidencia' :C"})
    }
}

export { postIncidencias,getIncidencias,putIncidencias }
