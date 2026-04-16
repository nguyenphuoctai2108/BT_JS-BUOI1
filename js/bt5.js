/**
 * Giả sử: n = 97
 * lấy số hàng đơn vị: 7
 * lấy số hàng chục: 9
 * => 7 + 9 = 16
 *
 * Đầu vào: nhập n = 97
 * Xử lí:
 * tạo biến hàng chục = lấy n / 10
 * làm tròn hàng chục = Math.floor
 * tạo biến hàng dv = lấy n % 10
 * total = hàng chục + hàng dv
 * tạo biến rs để thiết kế câu thông báo
 * Đầu ra: show kết quả ra ngoài thẻ p
 */
let btnTongKySo = document.getElementById("btnTongKySo");
btnTongKySo.onclick = function () {
  let number_n = document.getElementById("number_n").value;
  let hangChuc = Math.floor(number_n / 10);
  let hangDonvi = number_n % 10;
  let total = hangChuc + hangDonvi;

  let rs = `Kết quả: <span>${total}</span>`;
  pInfo_5 = document.getElementById("pInfo_5");
  pInfo_5.innerHTML = rs; // do rs là span dấu đô la, thẻ này có thể style được
  pInfo_5.classList.add("showInfo");
};
