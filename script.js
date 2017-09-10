setTimeout(function() {
    var x = 10;
    var y = 20;

    console.log("x: " + x);
    console.log("y: " + y);
    console.log("x^2: " + Math.pow(x, 2));
    console.log("y^2: " + Math.pow(y, 2));
    console.log("sqrt(x): " + Math.sqrt(x));

    alert("x + y: " + (x + y));

    var name = prompt("Enter your name?");
    alert(name);

    document.getElementById("name-id").innerHTML = name;

    var object = {
        "name": name
    };

    console.log(object);

}, 100);
