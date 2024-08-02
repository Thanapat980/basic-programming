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