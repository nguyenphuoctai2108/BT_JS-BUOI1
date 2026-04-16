/**
 * Đầu vào: Lương ngày = 100.000
 * Xử lí:
 * - Tạo biến LuongNgay
 * - Tạo biến NgayLam
 * - Tạo biến total = LuongNgay * NgayLam
 * Đầu ra: show kết quả ra ngoài thẻ p``
 */
let btnTongTienLuong = document.getElementById("btnTongTienLuong");
btnTongTienLuong.onclick = function () {
  let LuongNgay = document.getElementById("LuongNgay").value;
  let NgayLam = document.getElementById("NgayLam").value;
  let total = "Tổng tiền lương: " + LuongNgay * NgayLam;
  let pInfo_1 = document.getElementById("pInfo_1");
  pInfo_1.innerText = total;
  pInfo_1.classList.add("showInfo");
};
