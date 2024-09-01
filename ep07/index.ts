const score: number [] = [10, 23, 26, 30,33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length

console.log("Total: ", sum)
console.log("avg: ", avg)


const myStudents: string = "เซน, แทน, เวฟ, รุ้ง, เท็ก , สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)


const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[0])

console.log(fullName.slice(0, fullName.indexOf(' ')))


const str: string = 'dog*cat*panda*fish'

const strarray = str.split('*')

console.log(str)
console.log(strarray)


const str: string = 'dog*cat*panda*fish'

const strarray: string[] = str.split('*')

strarray.pop() // เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก", strarray)

strarray.push('mammot') // ใส่เข้าไปต่อท้าย

console.log("ใส่เข้าไปต่อท้าย", strarray)

strarray.shift() // เอาตัวหน้าออก

console.log("เอาตัวหน้าออก", strarray)

strarray.unshift('cobra') // ใส่เข้าไปด้านหน้า

console.log("ใส่เข้าไปด้านหน้า", strarray)


const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.sort() // เรียง A - Z

console.log("เรียง A-Z: ", fruits)

fruits.reverse() // เรียง Z - A

console.log("เรียง Z-A: ", fruits)

fruits.slice(0, 2) // ตัด

console.log("ตัด: ", fruits)


const nameME: string = "เอ, บี, ซี, ดี"

const nameMearray: string[] = nameME.split(',')

nameMearray.sort()
console.log(nameMearray)

nameMearray.reverse()
console.log(nameMearray)


const me = {
    firstName: 'Tanaphat',
    lastName: 'Srilaphat',
    age: '00',
    poneNumber: '1669',
    nationality: 'Thailand'
}

// ประวัติส่วนตัว

// ชื่อ: ธณพัฒน์ 
// นามสกุล: ศรีลาพัฒน์
// อายุ: 00
// เบอร์: 1669
// สัญชาติ: ไทย


const me = {
    firstName: 'Tanaphat',
    lastName: 'Srilaphat',
    address: '105/1' ,
    road: 'chan road' ,
    districk: 'wat don field' ,
    couty: 'sathorn' ,
    province: 'bangkok' ,
    zipcode: '400001' ,
    ponenumber: '1669' ,
    pone: '191' ,
    email: 'sawatdeekub191@gmail.com'

}
