import * as yup from 'yup';

export const formSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required')
});

export const locationSchema = yup.string().required('Please choose a location');

export const barberSchema = yup.string().required('Please choose a barber');

export const serviceSchema = yup.string().required('Please choose a service');