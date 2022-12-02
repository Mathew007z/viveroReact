
import React from 'react';
import "./styles.css"
import {Navbar} from "./components/navBar/Navbar"
import Home from "./components/Home/Home"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemId from './components/ItemId/ItemId';


export default function App (){
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/>
                    <Route exact path="/item/:id" element={<ItemId/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    )
} 