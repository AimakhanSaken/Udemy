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

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }
        result += '\n';
}

console.log(result);
/*cikl v cikle i metka*/
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j <3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}


