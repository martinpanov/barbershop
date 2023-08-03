import * as yup from 'yup';

export const formSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required()
});

export const locationSchema = yup.string().required();

export const barberSchema = yup.string().required();

export const serviceSchema = yup.string().required();