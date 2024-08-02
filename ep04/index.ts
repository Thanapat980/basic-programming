function hallobro(dayofweek: number) {
    if (dayofweek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayofweek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayofweek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayofweek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayofweek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayofweek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayofweek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
}

hallobro(1)

function sayhi(dayofweek: number) {
    switch (dayofweek) {
    case 1:
        console.log('สวัสดีวันอาทิตย์')
        break
    case 2:
        console.log('สวัสดีวันจันทร์')
        break
    case 3:
        console.log('สวัสดีวันอังคาร')
        break
    case 4:
        console.log('สวัสดีวันพุธ')
        break
    case 5:
        console.log('สวัสดีวันพฤหัสบดี')
        break
    case 6:
        console.log('สวัสดีวันศุกร์')
        break
    case 7:
        console.log('สวัสดีวันเสาร์')
        break
    }
}

sayhi(7)

function sizeBro(size: string) {
    switch (size) {
    case ('s'):
        console.log('ผอม')
        break
    case ('m'):
        console.log('ผอม')
        break 
    case ('l'):
        console.log('ท้วม')
        break
    case ('xl'):
        console.log('อ้วน')
        break
    case ('2xl'):
        console.log('อ้วน')
        break
    }
    
}

sizeBro('xl')

function fixeddecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixeddecimal(40.6789, 30))

function addnumber(a: number) {
    const x = a.toLocaleString()
    return
}

console.log(addnumber(2000))

function fixeddecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixeddecimal(40.6789, 30))

function addNumber(a: number) {
    const x = a.toLocaleString()
    return
}

console.log(addNumber(1000))

const str: string = "ณเดชณ์ ณ บางแค"

console.log(str.length)

function checkStringLenght(n: string) {
    const c = n.length
    return c
}

console.log(checkStringLenght('adasfdsDFCXvVS'))

function input(msg: string, index: number) {
    return msg.charAt(index)
}

console.log(input('หิวข้าวมันไก๊', 3))

const str: string ='หิวข้าวมันไก๊น้อยอ่า'

console.log(str.indexOf("ก"))

const trs: string = 'iloveyousomuch'

console.log(trs.includes('much'))

function agreement(a: String, b: string) {
    if (a.includes(b)) {
        console.log(a.indexOf(b))
    } else {
        console.log('ไม่พบคำค้นหา')
    }
}

agreement('ง่วงชิบหาย', '444')