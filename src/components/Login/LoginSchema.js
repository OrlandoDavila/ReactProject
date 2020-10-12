import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup
  .string()
  .min(3, "Username must be at least 3 characters")
  .required("Username is Required"),
      password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .oneOf(['tl', 'instructor', 'alumni', 'student'], "password is required"),
  })
  
  export default formSchema