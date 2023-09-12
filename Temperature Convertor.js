function cont() {
    var x = document.getElementById("cnt");
    x.style.boxShadow = "0px 0px 25px 0px black";
}

function backcont() {
    var x = document.getElementById("cnt");
    x.style.boxShadow = "0px 0px 25px 0px white";
}

function cc() {
    var x = document.getElementById("celcius-input").value;
    var y = document.getElementById("fehrenheit-output");
    var z = document.getElementById("kelvin-output");
    var result1 = (9 / 5) * x + 32;
    y.innerHTML = result1;
    var result2 = x + 273.15;
    z.innerHTML = result2;
}

function fc() {

    var y = document.getElementById("fehrenheit-input").value;
    var x = document.getElementById("celcius-output");
    var z = document.getElementById("kelvin-output");
    var result1 = C = 5 / 9 * (y - 32);
    x.innerHTML = result1;
    var result2 = (y - 32) * 5 / 9 + 273.15;
    z.innerHTML = result2;
}

function kc() {
    var z = document.getElementById("kelvin-input").value;
    var x = document.getElementById("celcius-output");
    var y = document.getElementById("fehrenheit-output");

    var result1 = z - 273.15;
    x.innerHTML = result1;
    var result2 = (z - 273.15) * 9 / 5 + 32
    y.innerHTML = result2;
}