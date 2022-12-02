
import React from 'react';
import "./styles.css"
import {Navbar} from "./components/navBar/Navbar"
import Home from "./components/Home/Home"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App (){
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/>
                    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path='*' element={<h1>Not Fund</h1>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    )
} 