// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataavatarUrl:'https://avatar.file.myhaowu.com/default-1?imageMogr2/thumbnail/150x',
    nickName:'点击登录',
    isLogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindGetUserInfo(){
    this.setData({
      isLogin:true
    })
    // wx.getSetting({
    //   success:(res)=> {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success:(res)=> {
    //           const userInfo = res.userInfo
    //           this.setData({
    //             nickName: userInfo.nickName,
    //             avatarUrl: userInfo.avatarUrl
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
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