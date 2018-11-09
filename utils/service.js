export default {
  get(url){
    wx.showLoading({
      title: '加载中…',
    });
    return new Promise((resolve,reject)=>{
      wx.request({
        url: url,
        success:(resp)=>{
          resolve(resp);
        },
        fail:(err)=>{
          reject(err)
        },
        complete:()=>{
          wx.hideLoading()
        }
      })
    })
  }
}