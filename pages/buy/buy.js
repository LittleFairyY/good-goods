// pages/buy/buy.js
import state from "../../store/state.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList:[],
    allPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
getData(){
  const allPrice = state.getState().cartReduce.buyList.reduce((reult,item)=>{
    reult+=item.price*item.count
    return reult
  },0)
  this.setData({
    buyList: state.getState().cartReduce.buyList,
    allPrice
  })
},
  toAddress(){
    wx.navigateTo({
      url: '/pages/address/address'
    })
  },
  goHome(){
    wx.switchTab({
      url: '/pages/home/home'
    })
  }
})