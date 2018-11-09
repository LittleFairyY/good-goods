// pages/buy/buy.js
import state from "../../store/state.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList:[],
    allPrice:0,
    address:{},
    hasAddress:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    if(options.id){
      this.setData({
        hasAddress:true,
        address: { ...state.getState().cartReduce.addressList[options.id]}
      })
      console.log(this.data.address)
    }
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