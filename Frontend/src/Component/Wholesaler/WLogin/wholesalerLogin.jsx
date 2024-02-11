import React from "react";
import "./wholesalerLogin.css";
import wholesaler2 from "../../../images/wholesale.png";
import { Link,useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../Schemas";
import {useFormik} from "formik";

const initialValues = {
    email:"",
    password:""
  }  

const WholesalerLogin = () =>{

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues,
        validationSchema:RegisterSchema,
        onSubmit:(values,action)=>{
          console.log(
            "🚀 ~ file: FarmerRegistration.jsx ~ line 14 ~ FarmerRegistration ~ values",
            values
          );
          action.resetForm();
        },
      });
      console.log(
        "🚀 ~ file: FarmerRegistration.jsx ~ line 26 ~ FarmerRegistration ~ errors",
        errors
      );
        
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/wholesalerHome');
    };
    return(
        <div className="Login_main">
            <div className="side_image">
                <img src={wholesaler2} alt="side_image"/>
            </div>
            <div className="wholesaler-login">
            <h1>Wholesaler Login</h1>
          <form onSubmit={handleSubmit}>
           <label htmlFor="email">Email:</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            placeholder="Please enter Email" 
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
         {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>):null}

           <label htmlFor="password">Password:</label>
            <input 
            type="text" 
            id="password" 
            name="password" 
            autoComplete="off"
            placeholder="Please enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}/>
            {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>):null}


            <button type="submit" onClick={handleLogin}>Login</button>
            <Link to="/wholesalerRegister">Don't have an account? Register here</Link>
          </form>   
         </div>
        </div>
    )
}
export default WholesalerLogin;