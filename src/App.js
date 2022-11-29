
import React from 'react';
import "./styles.css"
import {Navbar} from "./components/navBar/Navbar"
import Greeting from "./components/Greetings/Greetings"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/Footer/Footer"
// import { BrowserRouter as Router,Route} from "react-router-dom";


export default function App (){
    return (
        <>
            <Navbar/> 
            <Greeting/>
            <ItemListContainer/> 
            <Footer/>
        </>
    )
} 