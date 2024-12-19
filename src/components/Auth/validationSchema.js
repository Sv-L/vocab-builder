import * as Yup from "yup";

export const validationSchema = (rout) => {
  const validationSchemaRegistration = Yup.object()
    .shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
          "The password must consist of 7 characters: 6 Latin letters (uppercase and/or lowercase) and 1 digit"
        ),
    })
    .required();

  const validationSchemaLogin = Yup.object()
    .shape({
      email: Yup.string()
        .required("Email is required")
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
          "The password must consist of 7 characters: 6 Latin letters (uppercase and/or lowercase) and 1 digit"
        ),
    })
    .required();

  return rout ? validationSchemaRegistration : validationSchemaLogin;
};
