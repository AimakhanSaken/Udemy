var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
};
drawCats (7);
//-----------------------------------------------
var secondsInMinute = 60;
var minutsInHour = 60;
var secondsInHour = secondsInMinute * minutsInHour;
secondsInHour;
var hoursInDay = 24;
var secondInDay = secondsInHour * hoursInDay;
console.log(secondInDay);
var daysInYear = 365;
var secondInYear = secondInDay * daysInYear;
console.log(secondInYear);
var age = 31;
var secondsInMyAge = secondInYear * age;
console.log(secondsInMyAge);
//---------------------------------------------------
var score = 10;
score += 7;
//17
score -= 3;
//14
var balloons =100;
balloons /= 2;
//---------------------------------------------------
var codeWord1 = "обернись";
var codeWord2 = "неужели";
var codeWord3 = "огурцы";
var codeWord4 = "липкие";
var codeWord5 = "?!";
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
//----------------------------------------------------
var longString = "Эта длинная строка такая длинная";
longString.slice(4, 18);
//длинная строка
//----------------------------------------------------
"Hey, how are you?".toUpperCase();
"HEY, HOW ARE YOU?";
"hEy, hOW Are You?".toLowerCase();
"hey, how are you";
//----------------------------------------------------
var string = "hEy, hOW Are You?";
var lower = string.slice(1, 17);
lower = lower.toLowerCase();
var upper = string[0];
upper = upper.toUpperCase();
string = upper + lower;
//var 2
var string = "hEy, hOW Are You?";
string[0].toUpperCase() + string.slice(1).toLowerCase();



