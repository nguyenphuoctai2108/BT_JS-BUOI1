/**
 * Đầu vào: 1USĐ = 23.500VNĐ
 * Xử lí:
 * - Tạo biến USĐ
 * - Tạo biến VND có giá trị 23500
 * - Tạo biến total = USD * VND
 * Đầu ra: show kết quả ra ngoài thẻ p
 */
let btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
  let USD = document.getElementById("USD").value;
  let VND = 23500;
  let total = USD * VND;
  let pInfo_3 = document.getElementById("pInfo_3");
  pInfo_3.innerText = total + " VNĐ";
  pInfo_3.classList.add("showInfo");
};
