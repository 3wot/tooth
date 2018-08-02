const debug = false
const URLS = {
	// 首页
	"getByName": "/dentist/search/name",
	"recommend": "/dentist/search/recommend",
	"distance": "/dentist/search/distance",
	// 诊所详情
	"detail": "/dentist/detail",
	// 门诊介绍
	"introduce": "/dentist/introduce",
	// 医生团队
	"team": "/doctor/team",
	//http://h.ka1em.site/api/v1/doctor/team?dentist_id=1&curr_page=1


	"getURL": function(key){
		const host = 'http://h.ka1em.site/api/v1'
		const str = debug ? '?dubug=dd' : ''
		if(this[key]){
			return host + this[key] + str;
		}else{
			console.log("URLS没有当前地址");
		}
	}
}
export default URLS