/**
 * Đầu vào: 5 số thực
 * Xử lí:
 * - Tạo ra 5 biến có giá trị là số thực
 * - Biến đổi giá trị của biến từ string sang number
 * - Tạo ra biến total = Tổng 5 biến / 5
 * Đầu ra: show kết quả ra ngoài thẻ p
 */
let btnTotalTrungBinh = document.getElementById("btnTotalTrungBinh");
btnTotalTrungBinh.onclick = function () {
  let number_1 = document.getElementById("number_1").value;
  number_1 = Number(number_1);
  let number_2 = document.getElementById("number_2").value;
  number_2 = Number(number_2);
  let number_3 = document.getElementById("number_3").value;
  number_3 = Number(number_3);
  let number_4 = document.getElementById("number_4").value;
  number_4 = Number(number_4);
  let number_5 = document.getElementById("number_5").value;
  number_5 = Number(number_5);

  let total = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
  let pInfo_2 = document.getElementById("pInfo_2");
  pInfo_2.innerText = total;
  pInfo_2.classList.add("showInfo");
};
