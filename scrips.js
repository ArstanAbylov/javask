// very simple funcion 
// playCard
// cookDinner
function callFriend(friendsName = "Bakyt") {
    console.log('Pick up the phone');
    console.log('Type in the number of' + friendsName);
    console.log('Press call');
    console.log('Wait for the answer');
}

// callFriend("Bakyt");
// callFriend("Akjol");
// callFriend("Seitek");


function calculateSquareArea(a, b) {
    console.log(a * b);
}

// calculateSquareArea(5, 10);
// calculateSquareArea(10, 11);
// calculateSquareArea(1, 0);


function calculateCilenderVolume(r, h) {
    return 3.14 * r * r * h;
}


var smollGlassVol = calculateCilenderVolume(3, 4);
var bottleVol = calculateCilenderVolume(3, 10);


// console.log(smollGlassVol);
// console.log(bottleVol);


// document.write("Hello");
// document.write("World");
// document.write("Bye world!<h1>");
// document.write("Goodbye world!<p>");


function countdown(number) {
    for (let i = number; i > 0; i--) {
        document.write(i + "");

    }
    document.write("<br>")
}


// countdown(5);
// countdown(15);
// countdown(prompt("Enter the number!", 100))


// var number = Math.random("100");
// document.write(i + "<br>");


function randomColor() {
    var red = Math.random() * 255;
    var blue = Math.random() * 255;
    var green = Math.random() * 255;

    return `rgb(` + red + `,` + green + `,` + blue + `)`;
}

function colorfulText(text, color) {
    document.write(`<h1 style="color: ` + color + `;">` + text + `</h1>`);
}

var color = randomColor();
colorfulText("Hello world", color);
colorfulText("Bye world", color);



function bissectrisVolumn(x, a, b) {
    return i = (x * (a + b));
}

var smollVolumn = bissectrisVolumn(3, 4, 5);