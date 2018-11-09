// pages/mine/mine.js
import state from "../../store/state.js"
import {
  isLogin
} from "../../store/actions/cart.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataavatarUrl:'https://avatar.file.myhaowu.com/default-1?imageMogr2/thumbnail/150x',
    nickName:'点击登录',
    isLogin: state.getState().cartReduce.isLogin
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindGetUserInfo(){
    state.dispatch(isLogin())
    
  },
  getData(){
    this.setData({
      isLogin: state.getState().cartReduce.isLogin
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