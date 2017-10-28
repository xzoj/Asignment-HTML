var bntLogin = document.getElementById('bntLogin');
var username = document.getElementById('idname');
var phone = document.getElementById('phone');
var dress = document.getElementById('dress');
var number = document.getElementById('number');
var isValidName = false;
var isValidPhone = false;
var isValidDress = false;
var isValidNumber = false;

username.onkeyup = function(){
	checkValidName();
}
phone.onkeyup = function(){
	checkValidPhone();
}
dress.onkeyup = function(){
	checkValidDress();
}
number.onkeyup = function(){
	checkValidNumber();
}
bntLogin.onclick=function(){
	return isValidName && isValidDress && isValidNumber && isValidPhone;
};
function checkValidName(){	
	var spanMsg = username.nextElementSibling;
	if (username.value.length <=7){
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "*Tên phải dài hơn 8 ký tự";				
		isValidName = false;
	} else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "Ok.";
		isValidName = true;
	}
}
function checkValidPhone(){	
	var spanMsg = phone.nextElementSibling;
	if (phone.value < 10000000 || phone.value> 10000000000 ){
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "*Số điện thoại gồm 8-11 chữ số";				
		isValidPhone = false;
	} else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "Ok.";
		isValidPhone = true;
	}
}
function checkValidDress(){	
	var spanMsg = dress.nextElementSibling;
	if (dress.value.length == 0){
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "*Vui lòng nhập địa chỉ";				
		isValidDress = false;
	} else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "Ok.";
		isValidDress = true;
	}
}
function checkValidNumber(){	
	var spanMsg = number.nextElementSibling;
	if (number.value == 0){
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "Bạn phải chọn số lượng tối thiểu là 1.";				
		isValidNumber = false;
	} else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "Ok.";
		isValidNumber = true;
	}
}