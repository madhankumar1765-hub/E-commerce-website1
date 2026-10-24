import { createSlice } from "@reduxjs/toolkit";
const products = [
{id:1,title:"Wireless Headphones",price:1499,category:"Electronics",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",description:"Comfortable wireless headphones with clear sound."},
{id:2,title:"Smart Watch",price:2299,category:"Electronics",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",description:"A stylish watch for everyday use."},
{id:3,title:"Running Shoes",price:1899,category:"Fashion",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",description:"Lightweight shoes for walking and running."},
{id:4,title:"Backpack",price:999,category:"Accessories",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",description:"A useful backpack for college and travel."},
{id:5,title:"Sunglasses",price:799,category:"Fashion",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",description:"Classic sunglasses for sunny days."},
{id:6,title:"Camera",price:5499,category:"Electronics",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",description:"Capture your favourite moments."}];
const slice=createSlice({name:"products",initialState:{items:products},reducers:{}});
export default slice.reducer;