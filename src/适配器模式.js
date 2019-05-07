// 适配器模式

class Adaptee {
	specificRequest () {
		console.log('德国标准插头')
	}
}
class Target {
	constructor () {
		this.adaptee = new Adaptee()
	}
	request () {
		let info = this.adaptee.specificRequest()
		return `${info}->适配器->中国标准插头`
	}
}

// 测试
let target = new Target() 
console.log(target.request())