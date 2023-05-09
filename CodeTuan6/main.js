function ktNameDN() {
    let namedn = document.getElementById('txtNameDN').value;
    let patten = /^[a-z]{3,}$/;
    if (patten.test(namedn)) {
        document.getElementById('erNamedn').innerHTML = "*";
        return true;
    } else {
        document.getElementById('erNamedn').innerHTML = "Nhap lai!!";
        return false;
    }
}

function kthoten() {
    let name = document.getElementById('txtName').value;
    let patten = /^[A-Za-z]{3,}$/;
    if (patten.test(name)) {
        document.getElementById('erName').innerHTML = "*";
        return true;
    } else {
        document.getElementById('erName').innerHTML = "Nhap day du ho ten!";
        return false;
    }
}

function ktmk() {
    let mk = document.getElementById('txtPassword').value;
    let patten = /^[A-Za-z0-9]{3,}$/;
    if (patten.test(mk)) {
        document.getElementById('erMK').innerHTML = "*";
        return true;
    } else {
        document.getElementById('erMK').innerHTML = "Nhap lai!!";
        return false;
    }
}

function {
    let diachi = document.getElementById('txtAdres').value;
    let patten = /^[A-Za-z0-9]{3,}$/;
    if (patten.test(diachi)) {
        document.getElementById('erDC').innerHTML = " ";
        return true;
    } else {
        document.getElementById('erDC').innerHTML = "Nhap lai!!";
        return false;
    }
}

function ktdienthoai() {
    let dienthoai = document.getElementById('txtPhone').value;
    let patten = /^0[0-9]{9,10}$/;
    if (patten.test(dienthoai)) {
        document.getElementById('erDT').innerHTML = "*";
        return true;
    } else {
        document.getElementById('erDT').innerHTML = "Nhap lai!!";
        return false;
    }
}

let stt = 1;
function ketqua() {
    if (ktNameDN() && ktmk()) {
        let namedn = document.getElementById('txtNamedn').value;
        let mk = document.getElementById('txtMK').value;
        let name = document.getElementById('txtName').value;
        let birthday = document.getElementById('txtDate').value;
        let sex = document.getElementById('txtSex').value;
        let diachi = document.getElementById('txtAdres').value;
        let dienthoai = document.getElementById('txtPhone').value;


        let row_moi = "<tr><td>" + stt + "</td><td>" + namedn + "</td><td>" +
         mk +"</td><td>" + name + "</td><td>" + birthday + "</td><td>" + sex + "</td><td>" +
         diachi + "</td><td>" + dienthoai;
         
        document.getElementById('tbl').innerHTML+=row_moi;
         
        stt ++;
    }
}