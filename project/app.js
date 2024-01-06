var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }
    if (pass.value.length < 6) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if (pass.value.length >= 6 && pass.value.length < 12) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if (pass.value.length >= 12) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})