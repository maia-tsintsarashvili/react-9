import * as yup from "yup";


export const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email format"),
  password: yup
    .string()
    .required()
    .min(7, "password")
    .max(50, "password must be   at most 50 characters"),
});
