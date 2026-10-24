import React from "react";
import {useSelector} from "react-redux";
import ProductCard from "../components/ProductCard";
export default function ProductList(){const products=useSelector(s=>s.products.items);return <main className="container"><section className="hero"><small>WELCOME TO SHOPEASE</small><h1>Find your everyday favourites.</h1><p>Simple shopping, great products, and prices you'll love.</p></section><h2>Featured Products</h2><section className="grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</section></main>}