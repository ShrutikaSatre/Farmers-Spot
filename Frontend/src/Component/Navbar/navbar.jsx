import React from "react";
import "./navbar.css";
function Navbar (){
    return(
        <section className='navBar Section'>
                <header className="header flex">
                        <div className="logoDiv">
                             {/*<a href="#" className="logo">
                              <img src={logo} className="icon"/></a>*/}
                            <a href="#" className="icon">
                                <h1>Farmer's Spot</h1>
                           </a>
                        </div>    
                        <div className="header2">
                            <ul className="navLists flex ">
                                <li className='navItem'>
                                   <a href='home' className='navLink'>Home</a>
                                </li>
                             
                                <li className='navItem'>
                                   <a href='login' className='navLink'>Login</a>
                                </li>
                             
                                <li className='navItem'>
                                   <a href='hotel' className='navLink'>About Us</a>
                                </li>
                             
                                <li className='navItem'>
                                   <a href='footer' className='navLink'>Contact</a>
                                </li>
                             
                                {/*<li className='navItem'>
                                  <a href='contact' className='navLink'>Contact</a>
                                </li>
                                <button className='btn'>
                                    <a href=''>LOGIN</a>
                            </button>*/}
                            </ul>

                        </div>
                </header>
        </section>
    )
}
export default Navbar;