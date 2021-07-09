const str1 = '1990';   //1900  --  2100
const regexp1 = /19\d\d|20\d\d|2100/;
console.log(regexp1.test(str1));

const str2 = '20:50';   //корректный формат времени
const regexp2 = /^(2[0-3]|[01]\d):[0-5]\d$/;
console.log(regexp2.test(str2));

const str3 = 'ssasha sasha sashha saSsha sasss kk!kot kott kot kott';   //удалить слова с повторяющимися подряд буквами
const regexp3 = /[\w\S]*([a-z])\1[\w\S]*/gi;
console.log(str3.replace(regexp3, ''));

const str4 = 'sss sasha sasha sss sss kot kot sss';   //удалить повторяющиеся слова 
const regexp4 = /\b([\s\w]*)\1\b/g;
console.log(str4.replace(regexp4, '$1'));

const email = 'afff@gmailllllhhhhh.comk';
const regexp5 = /^\w{4,}@[\w\.]{2,}\.[a-zA-Z]{2,4}$/;
console.log(regexp5.test(email));
