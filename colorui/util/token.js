function getToken(){
	return uni.getStorageInfoSync('token')
}
function saveToken(data){
	return  uni.setStorageSync('token', data);
}
function clearToken(){
	return  uni.removeStorageSync('token');
}
module.exports={
	getToken,
	saveToken
}