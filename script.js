// Complete the js code
function Car(make, model) {}

function SportsCar(make, model, topSpeed){}
class Car {
	constructor(M,m) {
		this.make = M
		this.model = m
		
	}
}
class Sportcar extends Car {
	constructor(M,m,t) {
		super(M,m)
		this.topspeed = t
		
	}
}
let Sportcar1 = new SportsCar("farrari","testrarosa",200)
console.log(Sportcar1)

window.Car = Car;
window.SportsCar = SportsCar;
