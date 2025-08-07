import * as Yup from 'yup'

export const validationSchemaRegister = Yup.object({
    name: Yup.string().trim().min(3, 'Mínimo de caractéres 3.').max(10, 'Máximo de caractéres 10.').required('Campo requerido.'),
    age: Yup.number().required('Campo requerido.').min(18, 'Edad mínima 18 años.').lessThan(100, 'Edad ingresada no válida.').integer('Edad ingresada no válida.'),
    lastname: Yup.string().trim().max(15, 'Máximo de caractéres 15').required('Campo requerido.'),
    email : Yup.string().email('Ingrese un email válido.').required('Campo requerido.'),
    password: Yup.string().required('Campo requerido.').max(30, 'Máximo de caractéres 30.').min(10, 'Mínimo de caratéres 10.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden.').required('Confirma tu contraseña.')
})

export const validationSchemaLogin = Yup.object({
    email : Yup.string().email('Ingrese un email válido.').required('Campo requerido.'),
    password: Yup.string().required('Campo requerido.').max(30, 'Máximo de caractéres 30.').min(10, 'Mínimo de caratéres 10.')
})