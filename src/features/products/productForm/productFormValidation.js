import * as yup from "yup";


export const productFormValidationSchema = yup.object({
  name: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name  must have at least 3 characters"),

  description: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name  must have at least 3 characters"),

  brand: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name  must have at least 3 characters"),

  category: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name  must have at least 3 characters"),

  price: yup
    .number()
    .required()
    .min(1, "Product price  must have at least 1"),
    image:yup.string().required ("Product image is required"),
});
