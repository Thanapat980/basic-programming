//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)


for (let i = 0; i <= 10; i++) {
    console.log(i)
}


let sum: number = 0

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}

console.log('total:', sum)


let sum: number = 0
let i: number = 1

for (let i = 1; i <= 31; i++) {
    sum = sum + i
}

console.log('total:', sum)


let sum: number = 0
let i: number = 1

for (let i = 1; i <= 31) {
    sum = sum + i
    i++
}

console.log('total:', sum)


let sum: number = 0
let i: number = 1

do {
    sum = sum = i
    i++
} while (i <= 31)

console.log('Total: ', sum)


let i: number = 1 
while (i <= 18) {
    console.log('ฉันอายุ' + i + 'ปี')
    i++
}


let car1: string = 'Toyota'
let car2: string = 'Honda'
let car3: string = 'Suzuki'
let car4: string = 'Yamaha'
let car5: string = 'Mazda'

const cars: string [] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']


const str: string = 'ชอบก็จัด ประหยัดทำไม'

console.log(str.charAt(2))


const cars: string [] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

console.log(cars[0])


const cars: string [] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

cars[2] = 'Isuzu'

console.log(cars[2])


const cars: string [] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; i < 5; i++) {
    console.log(cars[i])
}


const cars: string [] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; i < cars. length; i++) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะไปแรงได้ยังไง')
    }
}


const array: string[] = ['Z', 'X', 'C', 'V', 'B']

for (let i = 0; i < array. length; i++) {
    if (array[i] === 'X') {
        console.log('See you bro')
    }
}


const num: number [] = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i <= 10; i++) {
    if(num [i] === 3 || num [i] === 5 || num [i] === 7 )
    num [i] = 0
}

console.log(num)