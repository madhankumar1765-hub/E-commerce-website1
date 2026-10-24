import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
export default function Header(){const items=useSelector(s=>s.cart.items);const count=items.reduce((n,x)=>n+x.quantity,0);return <header className="header"><Link className="logo" to="/">ShopEase</Link><nav><Link to="/">Home</Link><Link to="/cart">Cart ({count})</Link></nav></header>}