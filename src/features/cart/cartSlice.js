import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[],
    totalQuantity:0,
    totalPrice:0
  },
  reducers: {
    addtoCart : (state,actions)=>{
      const find = state.cart.findIndex((value)=>value.id===actions.payload.id)
      if(find !== -1){
        state.cart[find] = {...state.cart[find],quantity:state.cart[find].quantity+1}
      }else{
        state.cart.push({...actions.payload,quantity:1})
      }

    },

    deleteCart:(state,actions)=>{
      state.cart = state.cart.filter((value)=>value.id !== actions.payload.id)
    },

    removeAllCart : (state)=>{
      state.cart = []
    },

    cartTotal: (state)=>{
      const {totalQuantity , totalPrice} = state.cart.reduce((cartTotal,cartItem)=>{
          const {price,quantity} = cartItem
          const itemTotal = price*quantity
          cartTotal.totalPrice += itemTotal
          cartTotal.totalQuantity += quantity
          return cartTotal
      },{
        totalPrice:0,
        totalQuantity:0
      });
      state.totalPrice = totalPrice.toFixed(2)
      state.totalQuantity = totalQuantity
    }

  }
})

// Action creators are generated for each case reducer function
export const { addtoCart , deleteCart , removeAllCart , cartTotal } = cartSlice.actions

export default cartSlice.reducer