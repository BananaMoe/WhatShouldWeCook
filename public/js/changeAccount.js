function changeAccount() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            changeElements();
            document.getElementById("recipe_count").innerHTML = JSON.parse(xhttp.response).length;
        }
    };
    xhttp.open("GET", "/recipes/api", true);

    xhttp.send();

}

function changeElements() {
    document.getElementById("save_button").hidden = false;

    document.getElementById('name').disabled = false;
    document.getElementById('name').style.border = "1px solid";

    document.getElementById('email').disabled = false;
    document.getElementById('email').style.border = "1px solid";

    document.getElementById('password').disabled = false;
    document.getElementById('password').style.border = "1px solid";


    document.getElementById('password_confirmation').hidden = false;
    document.getElementById('password_change').hidden = false;

    document.getElementById('password_confirmation').disabled = false;
    document.getElementById('password_confirmation').style.border = "1px solid";

    document.getElementById("delete_button").remove()
    document.getElementById("edit_button").remove()

}

