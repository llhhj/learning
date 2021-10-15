//手机号码
const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
//身份证
const sfzReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
//邮箱
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/


const str = '44528120210221445X'

console.log(`sfzReg.test(str)`, sfzReg.test(str))
