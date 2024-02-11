import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home/home';
import Login from './Login/login';
import Farmer from './Farmer/farmer';
import FarmerLogin from './Farmer/FLogin/farmerLogin';
import FarmerRegister from "./Farmer/FRegistration/farmerRegistration";
import Wholesaler from "./Wholesaler/wholesaler";
import WholesalerLogin from "./Wholesaler/WLogin/wholesalerLogin";
import WholesalerRegistetr from "./Wholesaler/WRegisteration/wholesalerRegister";
import FarmerHome from "./Farmer/FHome/farmerHome";
import WholesalerHome from "./Wholesaler/WHome/wholesalerHome";
//import AddToCart from "./Wholesaler/AddToCart/MainShop/addtocart";
import Weather from "./Farmer/Weather/weather";

export const Router =() =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/wholesaler' element={<Wholesaler/>}/>
            <Route path='/wholesalerLogin' element={<WholesalerLogin/>}/>
            <Route path='/wholesalerRegister' element={<WholesalerRegistetr/>}/>
            <Route path='/farmerRegister' element={<FarmerRegister/>}/>
            <Route path='/farmer' element={<Farmer/>}/>
            <Route path='/farmerLogin' element={<FarmerLogin/>}/>
            <Route path='/farmerHome' element={<FarmerHome/>}/>
            <Route path='/wholesalerHome' element={<WholesalerHome/>}/>
            <Route path='/weather' element={<Weather/>}/>
        </Routes>
        </BrowserRouter>
    )
}