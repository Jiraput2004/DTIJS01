// แบบที่ 3 : Anonymus function เป็น อากิวเมนต์ ส่งให้กับ พารามิเตอร์ + callback function
// ตัวอย่างการใช้งานเอาฟังก์ชันไปเป็นค่าอาร์กิวเมนต์เพื่อส่งให้พารามิเตอร์
 
function test01(x, y) {
  console.log(x);
  y();  //callback function
}
 
function test02(a, b, c) {
  let data = a + c(20);  //callback function
  console.log(data);
  b(11, 22, 33); //callback function
}
 
// -------------------------------------
//call function
test01(555, function () {
  console.log("Wow wow wow");
});
 
test02(
  100,
  function (x, y, z) {
    console.log(x + y + z);
  },
  function (m) {
    return m * 5;
  },
);