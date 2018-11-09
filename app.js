//app.js
import state from "./store/state.js"
import { allCount} from "./store/actions/cart.js"

App({
  onLaunch(){
    this.setBadge();
  },
  setBadge(){
    this.getAllCount()
    if(this.allCount===0){
      wx.removeTabBarBadge({
        index:1
      })
    }else{
      wx.setTabBarBadge({
        index: 1,
        text: `${this.allCount}`
      })
    }
    
  },
  allCount:0,
  getAllCount(){
    this.allCount = state.getState().cartReduce.cart.reduce((result, item) => {
      result += item.count;
      return result
    }, 0);
  }
})