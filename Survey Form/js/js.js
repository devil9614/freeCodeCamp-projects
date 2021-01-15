function myFunction() {
    let t = document.getElementById("email").value;
    let i = 0,
        f = 0;
    let x = document.getElementById("number").value;
    if (isNaN(x) || x < 1000000000 || x > 9999999999) {
        document.getElementById("num-result").innerHTML = "Invalid Phone Number!!";
    } else {
        document.getElementById("num-result").innerHTML = "valid Phone Number";
    }
    for (i = 0; i < (t.length); i++) {
        if (i == 0 && t[i] == "@") {
            f = 0;
        }
        if (i != 0 && t[i] == "@" && i != (t.length - 1)) {
            f = 1;
        }
        if (t.length < 2) {
            f = 0;
        }
    }
    if (f == 0) {
        document.getElementById("mail-result").innerHTML = "Invalid E-mail id!!";
    } else {
        document.getElementById("mail-result").innerHTML = "Valid E-mail id";
    }

}