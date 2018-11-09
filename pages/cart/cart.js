// pages/cart/cart.js
import state from "../../store/state.js"
import { 
  cartAction,
   countAction, 
   reduceCount, 
   addCount, 
   deleteCart, 
   changeChecked, 
   allCheckChange,
  toBuy,
   detailAction } from "../../store/actions/cart.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[],
    allChecked:true,
    allPrice:0
  },
  /**
    * 生命周期函数--监听页面显示
    */
  onShow: function () {
    state.subscribe(this.getCart)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCart()
  },
  getCart(){
    const allPrice = state.getState().cartReduce.cart.reduce((result, item) => {
      if(item.isChecked===true){
        result += item.count * item.price;
      }
      return result
    }, 0);
    const allChecked = state.getState().cartReduce.cart.every(item => item.isChecked === true)
    this.setData({
      cart: state.getState().cartReduce.cart,
      allChecked,
      allPrice
    })
  },
  goDetail(e){
    const id=e.currentTarget.dataset.id;
    const detailInfos = this.data.cart.filter(item => item.stockingNumber===id)
    state.dispatch(detailAction(detailInfos[0]));
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  allCheckChange(){
    this.setData({
      allChecked:!this.data.allChecked
    })
    state.dispatch(allCheckChange(this.data.allChecked));    
  },
  reduceCount(e) { 
    state.dispatch(reduceCount(e.currentTarget.dataset.id));
  },
  addCount(e){
    state.dispatch(addCount(e.currentTarget.dataset.id));
  },
  deleteCart(e){
    wx.showModal({
      title: '提示',
      content: '你确定要删除吗？',
      success(res) {
        if (res.confirm) {
          state.dispatch(deleteCart(e.currentTarget.dataset.id));
        }
      }
    })
  },
  changeChecked(e) {
    state.dispatch(changeChecked(e.currentTarget.dataset.id));
  },
  tobuy(){
    const arr=this.data.cart.filter(item=>{
      if(item.isChecked===true){
        return item
      }
    })
    state.dispatch(toBuy(arr))
    wx.navigateTo({
      url: '/pages/buy/buy'
    })
  }
})