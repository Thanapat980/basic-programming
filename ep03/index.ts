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