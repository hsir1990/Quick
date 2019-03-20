import fetch from '@system.fetch'
import storage from '@system.storage'

const API_ROOT = 'http://47.92.48.144:3100'

let header = {}

function getAuth(){
    return new Promise((resolve, reject) => {
        storage.get({
            key: 'auth',
            success: function(data){
                header.Cookie = data;
                resolve(true);

            },
            fail: function(data, code){
                reject(false)
            }
        })
    })
}

function fetchFun(url, data =null, method = 'get', CAllBACK){
    console.log('url++' + url);
    console.log('data++' + data);
    console.log('method++' + method);
    return new Promise((resolve, reject) => {
        fetch.fetch({
            url: `${API_ROOT}` + url,
            data: data,
            header: header,
            method: method,
            success: function(data){
                // console.log(data,'1111111111111')
                // CAllBACK && CAllBACK(data)
                resolve(CAllBACK && CAllBACK(data));
            },
            fail: function(data){
                reject(data);
            }
        })
    })
}

function authAbout(url, data = null, method = 'get', canSkip = false){
    return getAuth().then((auth) => {
        if(auth || canSkip){
            return fetchFun(url, data, method);
        }else{
            return new Promise((resolve, reject) => {
                reject("请先登陆！")
            })
        }
    });
}


// // async版
//  function fetchFun(){
//     return async ()=>{
//         const {native} = this.$app.$def;
//         const res = await native.fetch({
//             url: 'https://statres.quickapp.cn/quickapp/quickapptool/release/platform/quickapp_platform.json'
//         })
//     }
    
// }

export default{
    postJson(url, data = null,CAllBACK, config = {}){
        if(config.authAbout){
            return authAbout(url, data, 'post', config.canSkip)
        }else{
            return fetchFun(url, data, 'post', CAllBACK)
        }
    },
    
    getJson(url, data = null,CAllBACK, config = {}){
        if(config.authAbout){
            return authAbout(url, data, 'get', config.canSkip)
        }else{
            return fetchFun(url, data, 'get', CAllBACK)
        }
    }
}