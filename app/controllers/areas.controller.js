import { con } from '../../config/connection/atlas.js'
const db = await con();
const areas = db.collection('areas');

const getAreas = async (re, res) => {
    try {
        const result = await areas.find().toArray()
        res.json(result)
    } catch (error) {
        res.status(500).json({status:500,message:"Couldnt connect to the database :C"})
    }
}

export {getAreas}