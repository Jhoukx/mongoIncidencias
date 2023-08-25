import {con} from '../../config/connection/atlas.js'
import { SignJWT,jwtVerify } from 'jose'
import dotenv from 'dotenv';
dotenv.config();

const db = await con();
const crearToken = async (req, res, next) => {
    try {
        const result = await db.collection('usuario').findOne(req.params);
        const id = result._id.toString();
        const encoder = new TextEncoder();
        const jwtconstructor = await new SignJWT({ _id: id });
        const jwt = await jwtconstructor
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime("3h")
            .sign(encoder.encode(process.env.JWT_PASSWORD));
        res.send(jwt)
    } catch (error) {
        res.status(404).send({ status: 404, message: "ooops, thre´s a problem, check the readme and try again" })
    }
}

export {crearToken}