import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../features/cart/cartSlice";
export default function ProductCard({product}){const dispatch=useDispatch();return <article className="card"><Link to={"/product/"+product.id}><img src={product.image} alt={product.title}/></Link><div className="cardbody"><small>{product.category}</small><h3><Link to={"/product/"+product.id}>{product.title}</Link></h3><p className="price">₹{product.price.toLocaleString("en-IN")}</p><button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button></div></article>}