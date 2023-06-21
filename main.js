//tao bien
var arr = [];
var tongSoDuong = 0;
var demSoDuong = 0;
var soNhoNhat = 1;
var soDuongNN = 1;
var soChanCuoi = 0;
var soNguyenToDau = 0;
var arrSoThuc = [];
var demSoNguyen = 0;
var demSoAm = 0;
var demSoDuong = 0;
//luu tru trong mang
document.getElementById(`btnThemSo`).onclick = function () {
  var nhapSo = document.getElementById(`nhapSo`).value * 1;
  arr.push(nhapSo);
  document.getElementById(`ketQua1`).innerHTML = `mang hien tai la: ` + arr;
};
//tinh tong so duong trong mang
document.getElementById(`btnTinhTong`).onclick = function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tongSoDuong += arr[i];
    }
    document.getElementById(`ketQua2`).innerHTML =
      `tong so duong trong mang la: ` + tongSoDuong;
  }
};
//dem so duong trong mang
document.getElementById(`btnDemSoDuong`).onclick = function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      demSoDuong++;
    }
    document.getElementById(`ketQua3`).innerHTML =
      `dem so duong trong mang la: ` + demSoDuong;
  }
};
//so nho nhat trong mang
document.getElementById(`btnSoNhoNhat`).onclick = function () {
  for (var i = 0; i < arr.length; i++) {
    if (soNhoNhat >= arr[i]) {
      soNhoNhat = arr[i];
    }
    document.getElementById(`ketQua4`).innerHTML =
      `So nho nhat trong mang la: ` + soNhoNhat;
  }
};
//so duong nho nhat trong mang
document.getElementById(`btnSoDuongNN`).onclick = function () {
  for (var i = 0; i < arr.length; i++) {
    if (soDuongNN >= arr[i] && arr[i] > 0) {
      soDuongNN = arr[i];
    }
    document.getElementById(`ketQua5`).innerHTML =
      `So duong nho nhat trong mang la: ` + soDuongNN;
  }
};
//so chan cuoi cung trong mang. neu mang khong co gtri chan thi tra ve -1
document.getElementById(`btnSoChanCuoi`).onclick = function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] % 2 === 0) {
      soChanCuoi = arr[i];
      var resultSoChanCuoi = `So chan cuoi trong mang la: ` + soChanCuoi;
    } else {
      soChanCuoi = -1;
      var resultSoChanCuoi =
        `do khong co so chan cuoi nen ket qua la: ` + soChanCuoi;
    }
  }
  document.getElementById(`ketQua6`).innerHTML = resultSoChanCuoi;
};
//doi cho 2 vi tri trong mang
document.getElementById(`btnDoiViTri`).onclick = function () {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById(`viTri2`).value * 1;
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = temp;
  }
  document.getElementById(`ketQua7`).innerHTML =
    `vi tri 1 va 2 da duoc doi thanh: ` + arr;
};
//sap xep thu tu tang dan
document.getElementById(`btnTangDan`).onclick = function () {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  document.getElementById(`ketQua8`).innerHTML = `thu tu tang dan la: ` + arr;
};
//so nguyen to dau tien trong mang neu khong co so nguyen to thi gia tri tra ve la -1
document.getElementById(`btnSoNguyenToDau`).onclick = function () {
  var resultSoNguyenToDau = ``;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      soNguyenToDau = arr[i];
      resultSoNguyenToDau = `so nguyen to dau la: ` + soNguyenToDau;
    } else if (arr[i] > 2) {
      for (var n = 2; n < arr[i]; n++) {
        if (arr[i] % n === 0) {
          soNguyenToDau = arr[i];
        }
      }
      resultSoNguyenToDau = `so nguyen to dau la: ` + soNguyenToDau;
    } else {
      soNguyenToDau = -1;
      resultSoNguyenToDau =
        `khong co so nguyen to dau nen kq la: ` + soNguyenToDau;
    }
    document.getElementById(`ketQua9`).innerHTML = resultSoNguyenToDau;
  }
};
//nhap mang so thuc dem so nguyen
document.getElementById(`btnSoThuc`).onclick = function () {
  var nhapSoThuc = document.getElementById(`nhapSoThuc`).value * 1;
  arrSoThuc.push(nhapSoThuc);
  document.getElementById(`ketQua10`).innerHTML =
    `mang so thuc la: ` + arrSoThuc;
};
document.getElementById(`btnDemSoThuc`).onclick = function () {
  for (var i = 0; i < arrSoThuc.length; i++) {
    if (arrSoThuc[i] == Number.isInteger(arrSoThuc[i])) {
      demSoNguyen++;
    }
    document.getElementById(`ketQua11`).innerHTML =
      `dem so nguyen la: ` + demSoNguyen;
  }
};
//so sanh so am so duong
document.getElementById(`btnSoSanhAmDuong`).onclick = function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      demSoAm++;
    } else if (arr[i] > 0) {
      demSoDuong++;
    }
    if (demSoAm > demSoDuong) {
      document.getElementById(`ketQua12`).innerHTML = `so am > so duong`;
    } else if (demSoAm < demSoDuong) {
      document.getElementById(`ketQua12`).innerHTML = `so am < so duong`;
    } else {
      document.getElementById(`ketQua12`).innerHTML = `so am = so duong`;
    }
  }
};
