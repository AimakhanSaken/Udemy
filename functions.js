var ourFirstFunction = function() {
    console.log("Hi World!");
};
ourFirstFunction();


var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
};

drawCats(7);

var printMultipleTimes = function(howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(2, "(>_<)");

var double = function (number) {
    return number * 2;
};
double(9);//18
double(6) + double(5);//22
double(double(3));//12

var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Nokia", "Orion", "Lays", "Zoom"];

pickRandomWord(randomWords);
//функцию можно использовать с любым массивом.
pickRandomWord(["Nick", "Rick", "Stenley", "Jimmy"]);

var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Соединяем случайные строки в предложение:
var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
randomString;

//Делаем генератор дразнилок функцией
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
var generateRandomInsult = function () {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    //Соединяем случайные строки в предложение:
    var randomString = "Y tebya " +  pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
    
    return randomString;
};
generateRandomInsult();
//---------------------------------------------------------------
var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
};
fifthLetter("Aimakhan");
//---------------------------------------------------------------
var medalForScore = function (score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }

    return "Gold";
};

//--------------------------------------Home work------------------------------------------

var add = function(a, b) {
    return a + b;
};
var multiply = function(a, b) {
    return a * b;
};
add(multiply(36325, 9824), 777);
   

var areArraysSame = function(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};

areArraysSame([1, 2, 3], [1, 2, 3]);