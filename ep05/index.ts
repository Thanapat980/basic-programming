const n: number = 50.515

console.log(Number(n.toFixed(17)))

const str: string = 'ยายแล่ม'

console.log(str.charAt(4))

const str: string = '   ยายแล่ม   '

// console.log(str.trim()) // เอา space ออกคู่
// console.log(str.trimStart) // หน้า
// console.log(str.trimEnd) // หลัง

const str: string = 'ยายแล่ม เมื่อตอนสาวๆ'

// console.log(str.indexOf('ยาย')) // index ของคำไหน
// console.log(str.includes('แจ่ม'))

// นาย ธณพัฒน์ ศรีลาพัฒน์
const prefix: string = 'พ. ท่าน ร้อยตำรวจตรวจตลาด'
const fName: string = 'ธณพัฒน์'
const lName: string = 'ศรีลาพัฒน์'

console.log(prefix.concat(fName, lName))

const str: string = 'นายธนภัทร แตงอ่อน'

console.log(str.includes('นาย'))

const str: string = 'นายธณพัฒน์ ศรีลาพัฒน์ ค้ำจุนโลก โลภมาก'

console.log(str.slice(3, 10))

const str: string = 'นายณัฐกานต์ เด็กติดเกม Roblox aka ทิวคุง'

console.log(str.split(" "))

// ['นายณัฐกานต์ เด็กติดเกม Roblox aka ทิวคุง'] // หลัง mid tearm

const str: string = 'นางสาวอัญชลี ทดสอบ'

console.log(str.replace('ทดสอบ', 'ไม่ทราบนามสกุล'))

const str: string = 'ยายแล่ม เมื่อตอนสาวๆ ผิวขา ตาคม ยายแล่ม'

console.log(str.replaceAll('ยายแล่ม', 'โรนัลโด้'))

const str: string = 'นายทดสอบ สุดหล่อ'

console.log(str.replaceAll('นาย', ''))


function getPrefix(Fullname: string) {
    if (Fullname.includes('นาย')) {
        return 'นาย'
    } else if (Fullname.includes('นางสาว')) {
        return 'นางสาว' 
    } else {
        return '-'
    }
} 

console.log(getPrefix('นายธณพัฒน์ ศรีลาพัฒน์'))


const x: number = 5

let y: string = 'Hi'

var t: boolean = true

function getname(name: string) {
    return name
} // output


