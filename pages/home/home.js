// pages/home/home.js
import http from "../../utils/service.js"
import state from "../../store/state.js"
import { cartAction, detailAction} from "../../store/actions/cart.js"
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://item.file.myhaowu.com/09b43aed-91bd-4cdb-91f6-223a249b91b2?imageMogr2/thumbnail/640x',
      'https://item.file.myhaowu.com/9e95b2d4-63fd-48eb-aa30-24cde27533cf?imageMogr2/thumbnail/640x',
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    currentOrder: 'tj',
    newProList: [],
    navList: [
      {
        "name": "推荐",
        "order":'tj'
      },
      {
        "name": "家饰",
        "imageUrl": "https://item.file.myhaowu.com/f89a2267-1f13-42bc-89bd-a814d57255b7?imageMogr2/thumbnail/640x",
        "order": 'js'
      },
      {
        "name": "收纳",
        "imageUrl": "https://item.file.myhaowu.com/b7e801c4-16ca-4b35-8279-2340fb38cfce?imageMogr2/thumbnail/640x",
        "order": 'sn'
      },
      {
        "name": "餐厨",
        "imageUrl": "https://item.file.myhaowu.com/3c68a03a-6ae0-450c-9b5e-afa95210befe?imageMogr2/thumbnail/640x",
        "order": 'cc'
      },
      {
        "name": "家纺",
        "imageUrl": "https://item.file.myhaowu.com/cd65d349-7b0e-4212-8209-d5c5f50b9b63?imageMogr2/thumbnail/640x",
        "order": 'jf'
      },
      {
        "name": "家具",
        "imageUrl": "https://item.file.myhaowu.com/a9b0f5c8-b365-4dd3-95d9-dd207ad5e97a?imageMogr2/thumbnail/640x",
        "order": 'jj'
      }
    ],
    list:[],
    tuijianList: [],
    otherList:[],
    currentImg:''

  },
  changActive(e){
    const id=e.currentTarget.dataset.id
    if (id === 'tj') {
      this.setData({
        currentOrder: id
      });
      return;
    }else{
      const newImg = this.data.navList.filter(item => item.order === id)
      this.setData({
        currentOrder: id,
        currentImg: newImg[0].imageUrl
      });
    }
    http.get(`http://rap2api.taobao.org/app/mock/116389/api/v1/${id}`).then(resp=>{
      resp.data.data=resp.data.data.map(item=>{
        item.stockingNumber=item.itemId
        item.price = item.minPrice
        return item
      })
      this.setData({
        otherList: resp.data.data
      })
    }).catch(err=>console.error(err))
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    this.getItem(this.data.newProList,id)
  },
  toDetails(e) {
    const id = e.currentTarget.dataset.id
    this.getItem(this.data.tuijianList,id)
  },
  goDetail(e){
    const id = e.currentTarget.dataset.id
    this.getItem(this.data.otherList, id)
  },
  getItem(list,id) {
    const item = list.filter(item => item.stockingNumber === id)
    state.dispatch(detailAction(item[0]))
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  onLoad(){
    http.get('http://rap2api.taobao.org/app/mock/116389/api/v1/newPro')
    .then(resp=>{
      resp.data.data=resp.data.data.map(item => {
        item.color = '粉色'
        item.size = '小号'
        return item
      })
      this.setData(
        {
          newProList: resp.data.data
        }
      )
    }).catch(err=>console.error(err))
    http.get('http://rap2api.taobao.org/app/mock/116389/api/v1/getRecommend')
      .then(resp => {
        resp.data.data=resp.data.data.map(item=>{
          item.stockingNumber = item.itemId
          item.price = item.minPrice
          item.originPrice = item.minPrice*2
          item.color='粉色'
          item.size='小号'
          return item
        })
        this.setData(
          {
            tuijianList: resp.data.data
          }
        )
      }).catch(err => console.error(err))
  },
  addCart(e){
    const id=e.currentTarget.dataset.id
    const item = this.data.tuijianList.filter(item => item.stockingNumber === id)
    item[0].newCount = 1
    state.dispatch(cartAction(item[0]))
  },
})