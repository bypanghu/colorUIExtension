# colorUI Extension
Base on ColorUI
This is an extension library of colorui
Just add some Components and Encapsulation of network API
If you need some help ,You can send email to bypanghu@163.com


## The github of ColorUI is [ColorUI](https://www.color-ui.com/)

## components

- updownList (Drop down list)
- collapse (testing...)


## js

- util/token  (Encapsulates the function of adding, reading and deleting token.)
- util/request (Methods that encapsulate the request function.)

### Calling method of API encapsulation
```js

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
```