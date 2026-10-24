import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({name:"cart",initialState:{items:[]},reducers:{
addToCart:(state,action)=>{const p=action.payload;const item=state.items.find(x=>x.id===p.id);if(item)item.quantity++;else state.items.push({...p,quantity:1});},
increaseQuantity:(state,action)=>{const x=state.items.find(i=>i.id===action.payload);if(x)x.quantity++;},
decreaseQuantity:(state,action)=>{const x=state.items.find(i=>i.id===action.payload);if(x&&x.quantity>1)x.quantity--;else state.items=state.items.filter(i=>i.id!==action.payload);},
removeFromCart:(state,action)=>{state.items=state.items.filter(i=>i.id!==action.payload);}
}});
export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart}=slice.actions;
export default slice.reducer;