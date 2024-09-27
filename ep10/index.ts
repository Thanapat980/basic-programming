console.log("1")
console.log("2")
console.log("3")

setTimeout(() => {
    console.log("4")
})

console.log("5")


const databases = [
    {
        email: 'user@gmail.com',
        password: 'loveyou4444'
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            databases.push(userObject)
            alert('สมัครemailแล้ว' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 และไม่เกิน 16')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}
register('max@mail.com', '1234567แป๊ด')



// กฎการเปลี่ยนรหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น ^
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYo+3^^^'
    },
    {
        email: 'max@gmail.com',
        password: '12345*7แปด'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (decryptPassword(user[0].password) === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    } 
}

login('max@gmail.com', '12345*7แปด')