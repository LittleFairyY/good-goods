//app.js
import state from "./store/state.js"

App({
  onLaunch(){
    this.setBadge();
  },
  onShow(){
    state.subscribe(this.setBadge)
  },
  setBadge(){
    this.getAllCount()
    wx.setTabBarBadge({
      index: 1,
      text: `${this.allCount}`
    })
  },
  allCount:0,
  getAllCount(){
    this.allCount = state.getState().cartReduce.cart.reduce((result, item) => {
      result += item.count;
      return result
    }, 0);
  }
})