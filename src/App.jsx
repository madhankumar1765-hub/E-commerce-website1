import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
export default function App(){return <BrowserRouter><Header/><Routes><Route path="/" element={<ProductList/>}/><Route path="/product/:id" element={<ProductDetail/>}/><Route path="/cart" element={<Cart/>}/><Route path="*" element={<main className="container"><h2>Page not found</h2></main>}/></Routes></BrowserRouter>}