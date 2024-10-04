// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}



const cars = ['Toyota', 'BMW', 'Honda']

cars.pop()
cars.push("Benz")

cars.shift()
cars.unshift('BMX')
cars.sort() // A-Z
cars.reverse() // Z-A

const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 15,
    ismale: true,
    sister: {
        firstname: 'Jane',
        lastname: 'Doe',
        age: 12,
        isMale: 'false'
    },
}

person.age = 16



const names = ["John Doe", "Jane Smith", "Jack Brown"];

function cutNameWithMap(array: string[]) {
    return array.map(function(element, index) {
        const cutName = element.split(" ")// ['John', 'Doe']
        return {
            firstName: cutName[0],
            lastname: cutName[1]
        }
    })
}

console.log(cutNameWithMap(names))




const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

const inventory = {
    name: 'laptop Store',
    quantity: 5,
    isAvailable: function() {
        return this.quantity > 0
    }
}

console.log(inventory.isAvailable())

const account = {
    name: 'ออมกับเธอออ',
    balance: 0,
    deposit: function(amount: number) {
        if (amount < 0) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log(' ฝากเงินจำนวน ' + amount + ' ยอดคงเหลือ ' + this.balance)
    },
    withdraw: function(amount: number) {
        if (amount > this.balance) {
            console.log(' เงินไม่พอ คุณมียอดเงินคงเหลือ ' + this.balance)
            return
        }

        this.balance = this.balance - amount
        console.log(' ถอนเงิน ' + amount + ' ยอดคงเหลือ ' + this.balance )
    }
}

account.deposit(699)
account.withdraw(500)