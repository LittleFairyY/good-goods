// pages/address/address.js
import state from "../../store/state.js"
import { deleAddress } from "../../store/actions/cart.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[]
  },
  goHome() {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  getData(){
    this.setData({
      addressList: state.getState().cartReduce.addressList
    })
  },
  dele(e){
    state.dispatch(deleAddress(e.currentTarget.dataset.id))
  },
  edit(e){
    wx.navigateTo({
      url: `/pages/editAddress/editAddress?id=${e.currentTarget.dataset.id}`
    })
    
  },
  chooseAddress(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/buy/buy?id=${e.currentTarget.dataset.id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData()
    this.getData()
  },
  addAddress(){
    wx.navigateTo({
      url: '/pages/editAddress/editAddress'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    state.subscribe(this.getData)
  },
})