const initStore={
  cart: wx.getStorageSync("hw-cart")||[],
  detailInfo:{},
  allCount:0,
  buyList:[]
}
export default (state=initStore,action)=>{
  switch (action.type){
    case 'ADD_CART':
      const isHas = state.cart.some(item => item.stockingNumber === action.data.stockingNumber)
      if(isHas){
        state.cart=state.cart.map(item=>{
          if (item.stockingNumber === action.data.stockingNumber){
            item.count += action.data.newCount
            item.color = action.data.color
            item.size=action.data.size
          }
          return item
        })
      }else{
        state.cart.push({ ...action.data, count: action.data.newCount,isChecked:true})
      }
      wx.setStorageSync('hw-cart', state.cart)
      return state
    case "CHANGE_DETAIL":
      state.detailInfo={...action.data}
      return state
    case "ADD_COUNT":
      state.cart=state.cart.map(item=>{
        if(item.stockingNumber === action.id){
          item.count+=1
        }
        return item
      })
      wx.setStorageSync('hw-cart', state.cart)
      return state
    case "REDUCE_COUNT":
      state.cart=state.cart.map(item => {
        if (item.stockingNumber === action.id) {
          if(item.count>1){
            item.count -= 1
          }
        }
        return item
      })
      wx.setStorageSync('hw-cart', state.cart)
      return state
    case "DELETE":
      state.cart = state.cart.filter(item => item.stockingNumber!==action.id)
      wx.setStorageSync('hw-cart', state.cart)
      return state
    case "CHANGE":
      state.cart = state.cart.map(item => {
        if (item.stockingNumber === action.id){
          item.isChecked=!item.isChecked
        }
        return item
      })
      if(state.cart.some(item=>item.isChecked===false)){
        state.allChecked=false;
      }else{
        state.allChecked=true;
      }
      wx.setStorageSync('hw-cart', state.cart)
      return state
    case "ALLCHANGE":
      state.cart = state.cart.map(item => {
        item.isChecked = action.allChecked
        return item
      })
      wx.setStorageSync('hw-cart', state.cart)
      return state
    case "BUY":
      state.buyList=action.data
      return state
    default:
      return state
  }
}
