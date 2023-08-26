import {con} from '../../config/connection/atlas.js'
import { SignJWT,jwtVerify } from 'jose'
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';
dotenv.config();

const db = await con();
const encoder = new TextEncoder();
const crearToken = async (req, res) => {
    try {
        const result = await db.collection('usuario').findOne(req.params);
        const id = result._id.toString();
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

const validateToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) return res.status(400).send({ status: 400, token: "Token not sent  🧐" });
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PASSWORD)
        );
        // Recibir informacion desde la base de datos
        let result = await db.collection('usuario').findOne({ _id: new ObjectId(jwtData.payload._id) })
        console.log(result.permisos);
        //Comparacion del endpoint permitido
        if (!(req.baseUrl in result.permisos)) return res.status(401).json({ status: 401, message: 'The endpoint is not allowed' })
        let versiones = result.permisos[req.baseUrl];
        //comparacion de versiones permitidas
        if (!(versiones.includes(req.headers["accept-version"]))) return res.status(401).json({ status: 401, message: 'The version is not allowed' })
        //const allowedMethods = result.permisos[req.baseUrl];
        //const currentMethod = req.method.toLowerCase();
        //if (!allowedMethods.includes(currentMethod)) return res.json({ status: 404, message: 'The method is not allowed' });
        next();
    } catch (error) {
        
    }
}

export { crearToken, validateToken }