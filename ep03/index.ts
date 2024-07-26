function helloworld() {
    console.log("สวัสดี")
}

helloworld() // ไม่มี่ input ไม่มี output

function helloname(name: string) {
    console.log(name)
}

helloname('tax') // input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input แต่มี output

function st(fname: string, sname: string) {

    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane' )

function st(aname: string, bname: string, cname: string) {

    if (aname === 'mix' && bname === 'zane' || cname === 'forth') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane','forth')

function set(aname: string, bname: string, cname: string) {

    if (aname === 'mix' || bname === 'zane' && cname === 'forth') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

set('mix', 'zane','forth')

function add(gender: string, height: number, weight: number) {
    
    if (gender === 'man' && (height > 170 || (weight > 50 && weight <= 110))) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่ต้องจับใบดำใบแดง')
    }
}

add('man',170,60)

function input(ago: number, salary: number, deposit: number) {

    if (ago > 16 && (salary <= 70000 && (deposit <= 500000 ))) {
        console.log('รับ 10000บาท')
    } else {
        console.log('อด....')
    }
}

input(18, 50000, 250000)