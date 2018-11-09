// pages/editAddress/editAddress.js
import state from "../../store/state.js"
import {
  addAddress
} from "../../store/actions/cart.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userTell:'',
    userCity:'',
    userInfo:'',
    id:-1,
    currentId:0
  },
  goHome() {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  bindinput(e) {
    this.setData({
      [e.currentTarget.id]: e.detail.value
    })
  },
  save(){
    // console.log(this.data)
    const obj = {
      userName: this.data.userName,
      userTell: this.data.userTell,
      userCity: this.data.userCity,
      userInfo: this.data.userInfo,
      id: this.data.id}
    if (this.data.currentId!==0){
      state.dispatch(addAddress({ data: { ...obj}, currentId: this.data.currentId }))
    }else{
      state.dispatch(addAddress({ data: { ...obj, id: state.getState().cartReduce.addressList.length + 1 }, currentId: this.data.currentId }))
    }
    console.log(state.getState().cartReduce.addressList.length)
    wx.navigateTo({
      url: '/pages/address/address'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   if(options.id){
    //  console.log(123)
     const info=state.getState().cartReduce.addressList.filter(item=>`${item.id}`===options.id)
     console.log(info[0].id)
     this.setData({
       userName: info[0].userName,
       userTell: info[0].userTell,
       userCity: info[0].userCity,
       userInfo: info[0].userInfo,
       id: info[0].id,
       currentId: options.id
     })
   }
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})