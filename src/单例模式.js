// // 单例模式
// class DB {
// 	constructor () {
// 		console.log('构造函数执行')
// 	}
// 	static getInstance () {
// 		if (!DB.instance) {
// 			DB.instance = new DB()
// 		}
// 		return DB.instance
// 	}
// 	connect () {
// 		console.log('连接数据库')
// 	}
// }
// let myDb1 = DB.getInstance()
// let myDb2 = DB.getInstance()
// console.log('myDb1 === myDb2',myDb1 === myDb2)
class SingleObject {
    login() {
        console.log('login...')
    }
}
SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)