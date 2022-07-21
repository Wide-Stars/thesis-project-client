import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).max(32).required('Password is required'),
  name: yup.string().required('Name is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  isSupervisor: yup.boolean(),
});
export default schema;
