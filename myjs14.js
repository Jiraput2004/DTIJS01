// Array ใชักับตัวแปรทำให้ตัวแปร 1 ตัวเก็บได้มากกว่า 1 ข้อมูล
//index number    0   1   2   3   4
let myArray01 = [10, 20 , 30, 40, 50]
 
// การเข้าถึงทุกข้อมูลของ Array เพื่อเอาข้อมูลเหล่านั้นไปใช้งาน
// วิธีที่ 1 ใช้ for ธรรมดา (Junior อ่อนด๋อย)
for(let i = 0; i < myArray01.length; i++){  // array.length จะได้ขนาดของอาร์เรย์
    console.log(myArray01[i] * 10)
}
 
// วิธีที่ 2 ใช้ forEach (Junior ว้าว)
// myArray01.forEach(function (value, index){
myArray01.forEach( (value, index) => {
    console.log(value * 10, ` Index: ${index}`)
})
 
// วิธีที่ 3 ใช้ for-of (Junior ว้าว)
for(let value of myArray01){
    console.log(value * 10)
}
 
// วิธีที่ 4 ใช้ map (Senior)
// (myArray01.map(function (value, index){
 
myArray01.map( (value, index) => {
    console.log(value * 10, ` Index: ${index}`)
})
 