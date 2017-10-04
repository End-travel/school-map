// pages/map/search.js
let buildlData = require('../../resources/school')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buildlData: {}
  },

  bindSearchInput: function (e) {
    let inputData = e.detail.value.replace(/(^\s*)|(\s*$)/g, "")
    if (inputData){
      let searchdata = buildlData.loadMap()
      for (var b in searchdata) {
        for (var i in searchdata[b].data) {
          searchdata[b].data[i].show = searchdata[b].data[i].name.indexOf(inputData) + searchdata[b].name.indexOf(inputData) + 1
        }
      }
      this.setData({buildlData: searchdata});
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      buildlData: buildlData.loadMap()
    });
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