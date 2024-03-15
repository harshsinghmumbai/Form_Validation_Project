import * as Yup from "yup";
// yup is type of schema means code in written as object({....}) format //

const signupSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your  full name"),
  email: Yup.string().email().required("Please enter your  Email"),
  password: Yup.string().min(8).required("Please enter your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export default signupSchema;
