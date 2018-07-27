const debug = false
const URLS = {
	"getByName": "/dentist/search/name",
	"recommend": "/dentist/search/recommend",
	"distance": "/dentist/search/distance",

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