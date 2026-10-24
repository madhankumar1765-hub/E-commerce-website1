import React from "react";
import {Link,useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from "../features/cart/cartSlice";
export default function ProductDetail(){const {id}=useParams();const p=useSelector(s=>s.products.items.find(x=>x.id===Number(id)));const dispatch=useDispatch();if(!p)return <main className="container"><h2>Product not found</h2><Link to="/">Home</Link></main>;return <main className="container detail"><img src={p.image} alt={p.title}/><div><small>{p.category}</small><h1>{p.title}</h1><h2>₹{p.price.toLocaleString("en-IN")}</h2><p>{p.description}</p><button onClick={()=>dispatch(addToCart(p))}>Add to Cart</button><p><Link to="/">← Continue shopping</Link></p></div></main>}