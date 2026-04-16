/**
 * Đầu vào: chiều dài, chiều rộng
 * Xử lí:
 * - Tạo biến chiều dài
 * - Tạo biến chiều rộng
 * - Cho giá trị của 2 biến từ string sang number
 * - Tạo biến diện tích = CD * CR
 * - Tạo biến chu vi = (CD + CR)*2
 * Đầu ra: show kết quả ra ngoài thẻ p
 */
let btnKQ = document.getElementById("btnKQ");
btnKQ.onclick = function () {
  let CD = document.getElementById("CD").value;
  CD = Number(CD);
  let CR = document.getElementById("CR").value;
  CR = Number(CR);
  let DT = CD * CR;
  let CV = (CD + CR) * 2;
  let pInfo_4 = document.getElementById("pInfo_4");
  pInfo_4.innerText = "Diện tích: " + DT;
  let pInfo_4_1 = document.getElementById("pInfo_4_1");
  pInfo_4_1.innerText = "Chu vi: " + CV;
};
