import {body} from 'express-validator'

export const incidenciaDTO = [
    body('categoria')
        .notEmpty().withMessage('La categoria es obligatoria')
        .isString().withMessage('La categoria debe ser string')
        .matches(/^[a-z A-Z]+$/).withMessage('La categoria debe contener solo letras'),
    body('tipo')
        .optional()
        .isString().withMessage('El tipo debe ser string')
        .matches(/^[a-z A-Z]+$/).withMessage('El tipo debe contener solo letras'),
    body('descripcion')
        .optional()
        .isString().withMessage('El descripcion debe ser string'),
    body('fecha_reporte')
        .optional()
        .isString().withMessage('La fecha_reporte debe ser string'),
    body('severidad')
        .notEmpty().withMessage('La severidad es obligatoria')
        .isIn(['leve', 'moderada', 'critica']).withMessage('La severidad debe ser leve, moderada o critica'),
    body('area')
        .notEmpty().withMessage('La area es obligatoria')
        .isNumeric().withMessage('La area debe ser un numero'),
    body('trainer')
        .notEmpty().withMessage('El trainer es obligatoria')
        .isNumeric().withMessage('El trainer debe ser un numero'),
]  