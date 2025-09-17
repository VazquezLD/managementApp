import * as Yup from 'yup';

export const validationSchemaEmployee = Yup.object({
    nombre: Yup.string()
        .required('El nombre es obligatorio'),
    apellido: Yup.string()
        .required('El apellido es obligatorio'),
    cargo: Yup.string()
        .required('El cargo es obligatorio'),
    salario: Yup.number()
        .typeError('El salario debe ser un número')
        .positive('El salario debe ser positivo')
        .required('El salario es obligatorio'),
    fecha: Yup.date()
        .required('La fecha de ingreso es obligatoria'),
    estado: Yup.string()
        .oneOf(["Activo", "Inactivo"], 'Estado inválido')
        .required('El estado es obligatorio')
});