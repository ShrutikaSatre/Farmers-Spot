import React from "react";
import "./wholesalerRegister.css";
import wholesaler1 from "../../../images/wholesale.png";
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import { RegisterSchema } from '../../Schemas';

const initialValues = {
  fullName:"",
  email:"",
  password:"",
  confirm_password:""
}

const Register = () => {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema:RegisterSchema,
    onSubmit:(values,action)=>{
      console.log(
        "🚀 ~ file: FarmerRegistration.jsx ~ line 22 ~ FarmerRegistration ~ values",
        values
      );
      action.resetForm();
    },
  });
  console.log(
    "🚀 ~ file: FarmerRegistration.jsx ~ line 28 ~ FarmerRegistration ~ errors",
    errors
  );

    return(
       <div className="register-main">
        <div className="sideimage">
            <img src={wholesaler1} alt="side image"/>
        </div>
         <div className="wholesaler-register">
            <h1>Wholesaler Registration</h1>

          <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Full Name:</label>
          <input 
          type="text" 
          id="fullName"
          name="fullName"
          autoComplete='off'
          placeholder='Full Name'
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
         />
         {errors.fullName && touched.fullName ? (<p className="form-error">{errors.fullName}</p>):null}

          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          autoComplete='off'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>):null}


          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          autoComplete='off'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>):null}


          <label htmlFor="password">Confirm Password:</label>
          <input 
          type="password" 
          id="confrim_password" 
          name="confirm_password" 
          autoComplete='off'
          placeholder='Confirm Password'
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.confirm_password && touched.confirm_password ? (<p className="form-error">{errors.confirm_password}</p>):null}

            <button type="submit">Register</button>
            <Link to="/wholesalerLogin">Already have an account? Login here</Link>
          </form>  
         </div>
       </div>
    )
}
export default Register;