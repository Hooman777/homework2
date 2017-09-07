setTimeout(function() {
    var x = 10;
    var y = 20;

    alert(x + y);
    // console.log(x + y);

    var name = window.prompt("Enter your name?");
    alert(name);

    document.getElementById("name").innerHTML = name;

    var object = {
        "name": name
    };

    console.log(object);

}, 100);
