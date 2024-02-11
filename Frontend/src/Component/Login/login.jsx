import React from "react";
import './login.css';
import farmer from '../../images/farmer5.jpg';
import farmer2 from '../../images/wholesaler2.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
    return (  
    <div className="centered-container">
      <div className='image'>
      <Link to="/farmer">
      <img className="centered-image" src={farmer} alt="Image 1"/>
      <p className='image-name'>Farmer</p>
      </Link>
      </div>
      
      <div className='image'>
        <Link to="/wholesaler">
      <img className="centered-image" src={farmer2} alt="Image 2"/>
      <p className='image-name'>Wholesaler</p>
      </Link>
      </div>
    </div>

    )
}
    export default Login;
