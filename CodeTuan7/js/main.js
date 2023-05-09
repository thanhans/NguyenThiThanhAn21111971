//kiểm tra mã bệnh nhân
function ktMaBN() {
    var ma = document.getElementById('txtMaBN').value;
    var pattern = /^BN-[0-9]{5}/;
    if (pattern.test(ma)) {
        document.getElementById('erMaBN').innerHTML = '';
        return true;
    } else {
        document.getElementById('erMaBN').innerHTML = 'Sai';
        return false;
    }
}

//kiểm tra mật khẩu
function ktMK() {
    var ma = document.getElementById('txtMK').value;
    var pattern = /^\w{6}/;
    if (pattern.test(ma)) {
        document.getElementById('erMK').innerHTML = '';
        return true;
    } else {
        document.getElementById('erMK').innerHTML = 'Sai';
        return false;
    }
}

function ktNgay(){
    var today = new Date();
    var nk = document.getElementById('dateNK').value;
    if(today >= nk){
        document.getElementById('erNgayK').innerHTML = 'Sai';
        return false;
    }else{
        document.getElementById('erNgayK').innerHTML = '';
        return true;
    }
}

//thêm dữ liệu vào bảng
function loadData() {
    var stt = 1;
    var ckb = document.getElementsByName('LDV');
    var t = 0;
    for (var i = 0; i < ckb.length; i++) {
        if (ckb[i].checked === true) {
            t += 50000;
        }
    }
    if (ktMaBN && ktMK() && ktNgay()) {
        let ma = document.getElementById('txtMaBN').value;
        let mk = document.getElementById('txtMK').value;
        let nk = document.getElementById('dateNK').value;
        let chuyenKhoa = document.getElementById('chuyenKhoa').value;

        let row_moi = "<tr><td>" + stt + "</td><td>" + ma + "</td><td>" + mk + "</td><td>" + nk + "</td><td>" + t + "</td><td>" + chuyenKhoa + "</td></tr>";

        document.getElementById('tb').innerHTML += row_moi;

        stt++;
    }
}

var today = new Date();
// var nk = document.getElementById('dateNK').value;
var nk = document.querySelector('input[name="dateNK"]');
var todayl = new Date(nk);
console.log(todayl);