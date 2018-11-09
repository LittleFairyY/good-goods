// pages/detail/detail.js
import state from "../../store/state.js"
import { cartAction, countAction, toBuy } from "../../store/actions/cart.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdd:false,
    detailInfo:{},
    count:1,
    allCount:0,
    colorList:['粉色','蓝色','黑色','白色','绿色'],
    currentColor:0,
    sizeList:['大号','小号','中号'],
    currentSize:0,
    isCart:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const info=state.getState().cartReduce.detailInfo
    this.setData({
      detailInfo: { ...info }
    })
    this.getAllCount()
  },
  onShow(){

  },
  getAllCount(){
    const num = state.getState().cartReduce.cart.reduce((result, item) => {
      result += item.count;
      return result
    }, 0);
    this.setData({
      allCount:num
    })
  },
  goHome(){
    wx.switchTab({
      url:'/pages/home/home'
    })
  },
  goCart() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  goBuy(){
    const color = this.data.colorList[this.data.currentColor]
    const size = this.data.sizeList[this.data.currentSize]
    const newDetail = { ...this.data.detailInfo }
    newDetail.color = color;
    newDetail.size = size;
    newDetail.count = this.data.count
    this.setData({
      isAdd: false
    })
    state.dispatch(toBuy([{...newDetail}]))
    wx.navigateTo({
      url: '/pages/buy/buy'
    })
  },
  reduceCount(e){
    let newCount=this.data.count
    if (newCount === 1) {
      return;
    }
    newCount-=1
    this.setData({
      count:newCount
    })

  },
  changeColor(e){
    this.setData({
      currentColor:e.currentTarget.dataset.index
    })
  },
  changeSize(e){
    this.setData({
      currentSize: e.currentTarget.dataset.index
    })
  },
  addCount(e){
    let newCount = this.data.count
    newCount += 1
    this.setData({
      count: newCount
    })
  },
  cancelInfo(){
    this.setData({
      isAdd: false,
      count:1,
      currentColor: 0,
      currentSize: 0
    })
  },
  showInfo(e){
    if(e.currentTarget.dataset.type==="cart"){
      this.setData({
        isAdd: true,
        isCart:true
      })
    }else{
      this.setData({
        isAdd: true,
        isCart: false
      })
    }
    console.log(this.data.isCart)
  },
  addCart(){
    const color = this.data.colorList[this.data.currentColor]
    const size=this.data.sizeList[this.data.currentSize]
    const newDetail={...this.data.detailInfo}
    newDetail.color=color;
    newDetail.size=size;
    newDetail.newCount=this.data.count
    // newDetail.type="ADD_CART"
    state.dispatch(cartAction(newDetail))
    this.setData({
      isAdd: false      
    })
    this.getAllCount()
  }
})