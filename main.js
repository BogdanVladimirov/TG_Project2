const user = window.Telegram.WebApp.initDataUnsafe.user;
console.log(user.username);

document.getElementById("username").innerText =  user.username;
console.log("asdasd");