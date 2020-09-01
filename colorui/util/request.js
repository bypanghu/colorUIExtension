import {getToken} from "./token.js"

// 小程序开发api接口工具包，
const API_BASE_URL = '';

const request = (url, method, data) => {
  let _url = API_BASE_URL + url
  return new Promise((resolve, reject) => {
    uni.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json',
		'token' :  getToken()
      },
      success(request) {
		  //该方法重构中
		  if(request.data.code != 20000){
			uni.showToast({
				title:  request.data.message||'发生错误', 
				duration: 2000,
				icon: 'none'
			});
		  }
		  
		  if(request.data.code == 50000){
			uni.showToast({
				title: request.data.message||'token过期',
				duration: 2000,
				icon: 'none'
			});
		  }else{
			resolve(request.data)
		  }
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}


/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request,
  /**
   * url 	:www.sample.cn/api/list?list=1
   * method : get
   * 参数    : list = 1
   * 
   * 
   * 
   * 外部调用方法
   * import API from '这个文件路径'
	API.fun({
	   list : 1
   }).then(res=>{
	   console.log(res)
   })
   * 
   * **/
  fun1: (data) => { 
    return request('list?list='+data.list, 'get', {})
  },
  /**
   * url 	:www.sample.cn/api/list
   * method : post
   * 参数    : type = 'info' 
   * 		  list = 10
   * 
   * 
   * 
   * 外部调用方法
   * import API from '这个文件路径'
  	API.fun({
  	   type : 'info'
  	   list : 10
   }).then(res=>{
  	   console.log(res)
   })
   * 
   * **/
  fun2: (data) => { 
    return request('api/list', 'post', {
		list : data.list,
		type : data.city
	})
  },
  
  
}