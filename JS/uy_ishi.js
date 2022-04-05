// let son1 = prompt("1 chi sonni kiriting!")
// let son2 = prompt("2 chi sonni kiriting!")
// let ishora = prompt("Ishora amalini kiriting(*, /, +, -, %,**)")

// if (isNaN(son1) || isNaN(son2)){
//     if (isNaN(son1) && isNaN(son2)){
//         console.log(`Ko'zingni kattaroq och bular <${son1}> va <${son2}> son emas!`);
//     } else if (isNaN(son1)){
//         console.log(`<${son1}> bu son emas!`);
//         console.log(`<${son1}> ning o'rniga son kiriting!`);
//     } else{
//         console.log(`<${son2}> bu son emas!`);
//         console.log(`<${son2}> ning o'rniga son kiriting!`);
//     }
// }else if (son1 && son2) {
//     if (ishora == "*" || ishora == "/" || ishora == "-" || ishora == "+" || ishora == "%" || ishora == "**") {
//         if (ishora == "*") {
//             console.log(`${son1} va ${son2} ni ko'paytirsa ${son1 * son2} ga teng bo'ladi!`);
//         } else if (ishora == "/") {
//             if (son2 != 0){
//                 console.log(`${son1} ni ${son2} ga bo'lsak ${son1 / son2} ga teng bo'ladi!`);
//             } else {
//                 console.log("0 - ga bo'lish mumkin emas!");
//             }
//         } else if (ishora == "-") {
//             console.log(`${son1} da ${son2} ni ayirsak ${son1 - son2} ga teng bo'ladi!`);
//         } else if (ishora == "+") {
//             console.log(`${son1} ga ${son2} ni qo'shsak ${Number(son1) + Number(son2)} ga teng bo'ladi!`);
//         } else if (ishora == "%") {
//             if (son2 != 0){
//                 console.log(`${son1} ni ${son2} ga bo'lganda qoldiq qismi ${son1 % son2} ga teng bo'ladi!`);
//             } else {
//                 console.log("Sonni 0 ga bo'lish mumkin emas!");
//             }
//         } else {
//             console.log(`${son1} ning ${son2} chi darajasi ${son1 ** son2} ga teng bo'ladi!`);
//         }
//     } else {
//         console.log("Siz xato amalni kiritdingiz! Iltimos to'g'ri amalni kiriting");
//     }
// } else if (son1 == null || son2 == null ){
//     if (son1 == null && son2 == null){
//         console.log("Siz 1-chi va 2-chi sonlarni kiritmadiz!");
//     } else if (son1 == null){
//         console.log("Siz 1-chi sonni kiritmadiz!");
//     } else if (son2 == null) {
//         console.log("Siz 2-chi sonni kiritmadiz!");
//     }
// } else {
//     console.log("Siz 1-chi yoki 2-chi songa qiymat kiritmadiz");
// }








// let num = prompt("1 dan 1000 gacha son kiriting")

// if (isNaN(num)){
//     console.log("Siz son kiritishiz kerak");
// } else {

//     if (num >= 1 && num < 1000){
//         let qoldiq1 = num % 100;
//         let qoldiq2 = num % 10;

//         let letter = ""

//         if (num > 9 && num < 20){
//             letter = "o'n"
//         } else if (num >= 20 && num < 30){
//             letter = "yigirma"
//         } else if (num >= 30 && num < 40){
//             letter = "o'ttiz"
//         } else if (num >= 40 && num < 50){
//             letter = "qirq"
//         } else if (num >= 50 && num < 60){
//             letter = "ellik"
//         } else if (num >= 60 && num < 70){
//             letter = "oltmish"
//         } else if (num >= 70 && num < 80){
//             letter = "yetmish"
//         } else if (num >= 80 && num < 90){
//             letter = "sakson"
//         } else if (num >= 90 && num < 100){
//             letter = "to'qson"
//         } else if (num >= 100 && num < 200){
//             letter = "bir yuz"
//         } else if (num >= 200 && num < 300){
//             letter = "ikki yuz"
//         } else if (num >= 300 && num < 400){
//             letter = "uch yuz"
//         } else if (num >= 400 && num < 500){
//             letter = "to'rt yuz"
//         } else if (num >= 500 && num < 600){
//             letter = "besh yuz"
//         } else if (num >= 600 && num < 700){
//             letter = "olti yuz"
//         } else if (num >= 700 && num < 800){
//             letter = "sakkiz yuz"
//         } else if (num >= 900 && num < 1000){
//             letter = "to'qqiz yuz"
//         }

//         if (qoldiq1 > 9 && qoldiq1 < 20){
//             letter += " o'n"
//         } else if (qoldiq1 >= 20 && qoldiq1 < 30){
//             letter += " yigirma"
//         } else if (qoldiq1 >= 30 && qoldiq1 < 40){
//             letter += " o'ttiz"
//         } else if (qoldiq1 >= 40 && qoldiq1 < 50){
//             letter += " qirq"
//         } else if (qoldiq1 >= 50 && qoldiq1 < 60){
//             letter += " ellik"
//         } else if (qoldiq1 >= 60 && qoldiq1 < 70){
//             letter += " oltmish"
//         } else if (qoldiq1 >= 70 && qoldiq1 < 80){
//             letter += " yetmish"
//         } else if (qoldiq1 >= 80 && qoldiq1 < 90){
//             letter += " sakson"
//         } else if (qoldiq1 >= 90 && qoldiq1 < 100){
//             letter += " to'qson"
//         }

//         if (qoldiq2 == 1){
//             letter += ' bir'
//         } else if (qoldiq2 == 2){
//             letter += " ikki"
//         } else if (qoldiq2 == 3){
//             letter += " uch"
//         } else if (qoldiq2 == 4){
//             letter += " to'rt"
//         } else if (qoldiq2 == 5){
//             letter += " besh"
//         } else if (qoldiq2 == 6){
//             letter += " olti"
//         } else if (qoldiq2 == 7){
//             letter += " yetti"
//         } else if (qoldiq2 == 8){
//             letter += " sakkiz"
//         } else if (qoldiq2 == 9){
//             letter += " to'qqiz"
//         }

//         console.log(letter);
//     } else {
//         console.log("Kechirasiz!")
//         console.log(`${num} => 1 - 1000 oraliqdagi son emas!`);
//         console.log("Iltimos 1 - 1000 oraliqdagi biron bir son kiriting!");
//     }
// }