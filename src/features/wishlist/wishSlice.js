import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist:[]
  },
  reducers: {
    addtoWishlist : (state,actions)=>{
        console.log(actions.payload)
      const find = state.wishlist.findIndex((value)=>value.id===actions.payload.id)
      if(find !== -1){
        state.wishlist[find] = {...state.wishlist[find],quantity:state.wishlist[find].quantity+1}
      }else{
        state.wishlist.push({...actions.payload,quantity:1})
      }

    },

    deleteWishlist:(state,actions)=>{
        console.log(actions.payload.id)
      state.wishlist = state.wishlist.filter((value)=>value.id !== actions.payload.id)
    }

  }
})

// Action creators are generated for each case reducer function
export const { addtoWishlist , deleteWishlist } = wishSlice.actions

export default wishSlice.reducer