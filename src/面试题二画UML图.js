class Park {
    constructor(floors) {
        this.camera = new Camera
        this.screen = new Screen
        this.floors = floors || []
        this.carList = {}
    }
    in (car) {
    	// 通过摄像头获取信息
    	const info = this.camera.shot(car)
    	// 停到某个停车位
    	const i = parseInt(Math.random()*100)
    	const place = this.floors[0].places[i]
    	place.in()
    	info.place = place
    	this.carList[car.number] = info
    }
    out (car) {
    	//获取信息
    	const info = this.carList[car.number]
    	// 将停车位清空
    	const place = info.place
    	place.out()
    	// 显示时间
    	this.screen.show(car, info.inTime)
    	delete this.carList[car.number]


    }
    // 停车场总共还有多少个空的车位
    emptyPlaceNum (floors) {
    	return this.floors.map((floor) => {
    		return `第${floor.index}层还有${floor.emptyPlaceNum()}个空车位`
    	}).join('\n')
    }
}
class Floor {
    constructor(index, places) {
    	//index表示第几层
    	this.index = index
        this.places = places || []
    }
    emptyPlaceNum() {
    	let count = 0
    	for (let i=0;i<this.places.length;i++){
    		if (this.places[i].empty) {
    			count+=1
    		}
    	}
    	// console.log(count)
    	return count

    	// let num = 0
     //    this.places.forEach(p => {
     //        if (p.empty) {
     //            num = num + 1
     //        }
     //    })
     //    return num
    }
}
class Place {
    constructor() {
        this.empty = true
    } 
    in () {
    	// console.error('进来了')
    	this.empty = false
    }
    out() {
    	this.empty = true
    }
}
class Camera {
    shot(car) {
    	return {
    		num: car.number,
    		inTime: Date.now()
    	}
    	// console.log(`车牌号:${car.number}`)
    	// console.log(`进入时间:${new Date().getTime()}`)
    }
}
class Screen {
    show(car, inTime) {
    	console.log(`车牌号:${car.number}`)
    	console.log(`该车辆停留的时间为:${Date.now() - inTime}`)
    }
}
class Car {
    constructor(number) {
        this.number = number
    }
}


// 测试
// 初始化停车场
const floors = []
for (let i=0;i<3;i++){
	const places = []
	for (let j=0;j<100;j++) {
		places[j] = new Place()
	}
	floors[i] = new Floor(i+1, places)
}


const park = new Park(floors)
const car1 = new Car(100)
const car2 = new Car(110)
const car3 = new Car(200)
console.log('第一辆车进入')
console.log(park.emptyPlaceNum())
park.in(car1)

console.log('----------------')

console.log('第二辆车进入')
console.log(park.emptyPlaceNum())
park.in(car2)

console.log('----------------')
console.log('第一辆车离开')
park.out(car1)

console.log('----------------')
console.log('第二辆车离开')
park.out(car2)

console.log('----------------')

console.log('第三辆车进入')
park.in(car3)
console.log('----------------')
console.log('第三辆车离开')
console.log(park.emptyPlaceNum())
park.out(car3)

