// export function bindPageLC(){
//     Function.prototype.bindPage = function(vmInst){
//         const fn = this;
//         return function(){
//             if(!vmInst){
//                 throw new Error(`使用错误：请传递VM对象`);
//             }
//             if(vmInst.$valid){
//                 return fn.apply(vmInst, arguments)
//             }else{
//                 console.info(`页面销毁时，不执行回调函数`)
//             }
//         }
//     }
// }

export default{
    bindPageLC() {
        Function.prototype.bindPage = function(vmInst) {
         const fn = this
         return function() {
           if (!vmInst) {
             throw new Error(`使用错误：请传递VM对象`)
           }
           if (vmInst.$valid) {
             return fn.apply(vmInst, arguments)
           } else {
             console.info(`页面销毁时，不执行回调函数`)
           }
         }
       }
     }
    }