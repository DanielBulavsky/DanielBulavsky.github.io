// alert('debug');
var nameArr = [];
var nameDefaultArr = ['David', 'Christopher ', 'Quentin', 'Rob', 'Frank'];
for (var i = 0; i < nameDefaultArr.length; i++) {
  nameArr[i] = prompt('Input name', nameDefaultArr[i]);
}
var admin = prompt('Enter your name', admin);

var coincidence = false;

for (var i = 0; i < nameArr.length; i++) {
  if (nameArr[i] === admin){
    coincidence = true;
  }
}

if (coincidence == true) {
  alert(admin + ", you've successfully entered!");
} else {
  alert("Login error!");
}
