import { validationResult } from 'express-validator';
import { con } from '../../../config/connection/atlas.js';
import { siguienteId } from '../../helpers/autoincrement.js';
const db = await con();
const areas = db.collection('areas');

const getAreas = async (req, res) => {
    try {
        if (!req.rateLimit) return
        console.log(req.rateLimit);
        const result = await areas.find().toArray()
        res.json(result)
    } catch (error) {
        res.status(500).json({ status: 500, message: "Couldnt connect to the database :C" })
    }
}
const postAreas = async (req, res) => {
    try {
        // Rate Limit
        if (!req.rateLimit) return
        console.log(req.rateLimit);

        // Validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(422).send(errors);

        // Res consult...
        let { id, ...data } = req.body
        id = await siguienteId('areas');
        console.log({ id: id,  ...data });

        await areas.insertOne({ id: id,  ...data });
        res.status(201).json({status:201,message:"'area' added successfully 😀"})
    } catch (error) {
        res.status(422).json({ status: 422, message: error.message })
    }
}
export { getAreas,postAreas }