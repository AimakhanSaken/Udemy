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
//concat ----------------------------------------------
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
//multi concat
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла", 
"Ара", "Додо"];
//Поиск индекса элемента в массиве
var colors = ["красный", "зеленый", "синий"];
colors.indexOf("синий"); //2
//Если элемента, индекс которого вы запрашиваете, в массиве нет, JavaScript вернет значение −1.
colors.indexOf("фиолетовый"); // -1
//Превращаем массив в строку
var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join();
//"Мартышка,Кот,Рыба,Ящерица"
var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join(" - ");
//"Мартышка - Кот - Рыба - Ящерица"
boringAnimals.join("*");
//"Мартышка*Кот*Рыба*Ящерица"
boringAnimals.join(" и ");
//"Мартышка и Кот и Рыба и Ящерица"
//Случайный выбор---------------------------------------------
//Math.random() при каждом вызове возвращает случайное число от 0 до 1:
Math.random();
0.8945409457664937
Math.random();
0.3697543195448816
Math.random();
0.48314980138093233
//Округление с помощью Math.floor()
Math.floor(Math.random() * 4);
// может выпасть 0, 1, 2 или 3
var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
var randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex];
//"Пещера

var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
    ];
phrases[Math.floor(Math.random() * 5)];
//------------------------------------------------------------------
var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
 // Выбор случайного слова из массива randomWords:
var randomWords = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
randomInsult;

//----------------------------------HOME WORK---------------------------------------------------------
var randomFamMembers = ["Batya", "vtoroy Batya", "Mama", "Detina"];
var randomAdjec =  ["Ynilaya", "vonuchaya", "Edkaya"];
var randomSlova = ["Zhirobasina", "Zhertva incesta", "Paskyda", "hyibaloEbannoe"];
var randomFamMembers = randomFamMembers[Math.floor(Math.random() * randomFamMembers.length)];
var randomAdjec = randomAdjec[Math.floor(Math.random() * randomAdjec.length)];
var randomSlova = randomSlova[Math.floor(Math.random() * randomSlova.length)];
var randomOskorbleniya = "Y tebya " + randomFamMembers + " pzdc " + randomAdjec + " blyat' " + randomSlova + " MyaahaHaahha";
randomOskorbleniya;

//------------------------------------------------------------------------------------------------
var randomBodyPart = ["Golova", "Nogy", "Zhopa", "Ryki", "Glaza", "Rot"];
var randomAdjectives = ["Bolshaya", "Volosataya", "Chernaya", "Vonuchaya", "Gnoynaya"];
var randomAnimalBodyPart = ["Hvost", "Hobot", "Roga", "Gorb", "Kluv"];
var randomAnimal = ["Krysy", "Vorony", "Slona", "Barana", "Zhaby"];
var randomBodyPart = randomBodyPart[Math.floor(Math.random() * randomBodyPart.length)];
var randomAdjectives = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimalBodyPart = randomAnimalBodyPart[Math.floor(Math.random() * randomAnimalBodyPart.length)];
var randomAnimal = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
var randomInsult = "Y tebya " + randomBodyPart + " eshe bolee " + randomAdjectives + " chem " + randomAnimalBodyPart + " y " + randomAnimal + " Ahahhahahha, govno sobach'e ";
randomInsult;

//----------------------Join----------------------------------------------------------------------
var randomBodyPart = ["Golova", "Nogy", "Zhopa", "Ryki", "Glaza", "Rot"];
var randomAdjectives = ["Bolshaya", "Volosataya", "Chernaya", "Vonuchaya", "Gnoynaya"];
var randomAnimalBodyPart = ["Hvost", "Hobot", "Roga", "Gorb", "Kluv"];
var randomAnimal = ["Krysy", "Vorony", "Slona", "Barana", "Zhaby"];
var randomBodyPart = randomBodyPart[Math.floor(Math.random() * randomBodyPart.length)];
var randomAdjectives = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimalBodyPart = randomAnimalBodyPart[Math.floor(Math.random() * randomAnimalBodyPart.length)];
var randomAnimal = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
var randomInsult = ["Y tebya ", randomBodyPart, " eshe bolee ", randomAdjectives, " chem ",  randomAnimalBodyPart," y ", randomAnimal, " Ahahhahahha, govno sobach'e "];
randomInsult.join(" ");
//-------------------------------------------------------------------------------------------------
var int = [3, 2, 1];
var str = [int[0], "bolshe, chem", int[1], "bolshe, chem", int[2]];
str.join(" ");