import { con } from '../../config/connection/atlas.js';
import { siguienteId } from '../functions/autoincrement.js';

const db = await con();
const incidencias = db.collection('incidencias');

const postIncidencias = async(req, res) => {
    try {
        let { id,fecha_reporte, ...data} = req.body;
        
        id = await siguienteId('incidencias');
        //* Sí la fecha es null o undefined se establece la actual 
        fecha_reporte = fecha_reporte ?? new Date(Date.now())

        await incidencias.insertOne({id:id,fecha_reporte: new Date(fecha_reporte), ...data });
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
    }
    res.send('Post incidencias :D')
}

export { postIncidencias }
