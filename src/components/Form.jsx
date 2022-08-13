import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).max(32).required('Password is required'),
  name: yup.string().required('Name is required'),
  batch: yup.string().required('Batch is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export const schemaPost = yup.object().shape({
  title: yup.string().min(10).required('Title is required'),
  type: yup.string().required('Type is required'),
  supervisorName: yup.string().required('Supervisor Name is required'),
  content: yup.string().min(100).required('Content is required'),
});
