import { body } from "express-validator";

export const areaDTO = [
    body('tipo')
        .notEmpty().withMessage('El tipo es obligatorio')
        .isString().withMessage('El tipo deber ser string')
        .matches(/^[a-z A-Z]+$/).withMessage('El tipo debe contener solo letras'),
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre deber ser string')
        .matches(/^[a-z A-Z]+$/).withMessage('El nombre debe contener solo letras'),
    body('computadores')
        .notEmpty().withMessage('Los computadores son obligatorio')
        .isNumeric().withMessage('Los computadores deben ser numerico'),
    body('teclados')
    .notEmpty().withMessage('Los teclados son obligatorios')
    .isNumeric().withMessage('Los teclados deben ser numerico'),
    body('mouse')
        .notEmpty().withMessage('El mouse es obligatorio')
        .isNumeric().withMessage('El mouse deber ser numerico'),
    body('diademas')
        .notEmpty().withMessage('El mouse es obligatorio')
        .isNumeric().withMessage('El mouse deber ser numerico')
]  