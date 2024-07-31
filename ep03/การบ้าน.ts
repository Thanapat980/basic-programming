function calculatebmi(height: number, weight: number): string {
    const bmi = weight / (height* height);

    let condition: string;

    if (bmi < 18.50) {
        condition = 'น้ำหนักน้อย/ผอม';
    } else if (bmi >= 18.50 && bmi <= 22.90) {
        condition = 'ปกติ(สุขภาพดี)';
    } else if (bmi >= 23 && bmi <= 24.90) {
        condition = 'ท้วม/โรคอ้วนระดับ1';
    } else if (bmi >= 25 && bmi <= 29.90) {
        condition = 'อ้วน/โรคอ้วนระดับ2';
    } else {
        condition = 'อ้วนมาก/โรคอ้วนระดับ3'
    } 


    return `BMI: ${bmi.toFixed(2)} - condition: ${condition}`;
}

console.log(calculatebmi(1.70, 60))