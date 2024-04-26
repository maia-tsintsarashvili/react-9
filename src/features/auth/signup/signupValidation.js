import * as yup from "yup";

export const signupValidationSchema= yup.object({
    firstName :yup
    .string ()
    .required ()
    .min(3,"First name should be at least 3 characters")
    .max (50, "First name should be at most 50 characters"),

    lastName :yup
    .string ()
    .required ()
    .min(3,  "First name should be at least 3 characters")
    .max(50, "First name should be at most 50 characters"),

    email:yup.string().email("Invalid email format"),

    password: yup
    .string()
    .required()
    .min ( 7, "password" )
    .max (50,"password must be   at most 50 characters") ,
});
