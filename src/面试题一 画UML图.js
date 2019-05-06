class Car {
	constructor(number, name) {
		this.number = number
		this.name = name
	}
}
class Kuaiche extends Car {
	constructor(number, name) {
		super(number, name)
		this.price = 1
	}
}
class Zhuanche extends Car {
	constructor (number, name) {
		super(number, name)
		this.price = 2
	}
}
class Trip {
	constructor(car) {
		this.car = car
	}
	start () {
		console.log(`开始行程，显示车辆信息:号码->${this.car.number},车名->${this.car.name}`)
	}
	end () {
		console.log(`结束行程，显示金额:${this.car.price * 5}`)
	}
}

let car = new Kuaiche(110, '本田')
let trip = new Trip(car)
trip.start()
trip.end()





