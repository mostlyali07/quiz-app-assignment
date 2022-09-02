function logIn(e) {
    event.preventDefault();
    

    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    var result = document.getElementById('result').value;

    var user = localStorage.setItem(username);
    var data = JSON.parse(user);
}