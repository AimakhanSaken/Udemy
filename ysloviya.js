if (4 == 9) {
    console.log('ok');
}   else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('error');
}  else if (num > 100) {
    console.log('to much');
}  else {
    console.log('ok');
}

/*ternarniy operator*/

(num === 50) ? console.log('ok') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('right');
        break;
    default:
        console.log('not today');
        break;
}