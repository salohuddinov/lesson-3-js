// if1.

// function oshirish(son) {

//     if (son > 0) {
//         son += 1;
//     }

//     console.log("Natija:", son);
// }

// var berilganSon = 5;
// oshirish(berilganSon);



// if2.


// function oshirishKamaytirish(son) {

//     if (son > 0) {
//         son += 1;
//     }

//     else if (son < 0) {
//         son -= 2;
//     }

//     else {
//         son = 10;
//     }

//     console.log("Natija:", son);
// }

// var berilganSon = -5;
// oshirishKamaytirish(berilganSon);



// if3.

// function musbatSonlarSoni(son1, son2, son3) {
//     var musbatSonlar = 0;

//     if (son1 > 0) {
//         musbatSonlar++;
//     }

//     if (son2 > 0) {
//         musbatSonlar++;
//     }

//     if (son3 > 0) {
//         musbatSonlar++;
//     }

//     console.log("Musbat sonlar soni:", musbatSonlar);
// }

// var son1 = 5;
// var son2 = -2;
// var son3 = 8;

// musbatSonlarSoni(son1, son2, son3);


// if4.

// function kattaSon(son1, son2) {
//     var katta = 0;

//     if (son1 > son2) {
//         katta = son1;
//     }

//     else {
//         katta = son2;
//     }

//     console.log("Katta son:", katta);
// }

// var son1 = 7;
// var son2 = 12;

// kattaSon(son1, son2);


// if5.

// function kichikSon(son1, son2) {
//     var kichik = 0;


//     if (son1 < son2) {
//         kichik = son1;
//     }

//     else {
//         kichik = son2;
//     }

//     console.log("Kichik son:", kichik);
// }

// var son1 = 7;
// var son2 = 12;

// kichikSon(son1, son2);


// if6.

// function avvalKattaKeyinKichik(son1, son2) {
//     var avvalKattaKeyinKichik = "";


//     if (son1 > son2) {
//         avvalKattaKeyinKichik = son1 + " " + son2;
//     }

//     else {
//         avvalKattaKeyinKichik = son2 + " " + son1;
//     }

//     console.log("Avval katta, keyin kichik:", avvalKattaKeyinKichik);
// }

// var son1 = 7;
// var son2 = 12;

// avvalKattaKeyinKichik(son1, son2);


// if7.

// function ozgartirish(A, B) {

// if (A >= B) {
//     var temp = A;
//     A = B;
//     B = temp;
// }

// console.log("Yangi A:", A);
// console.log("Yangi B:", B);
// }


// var A = 7;
// var B = 12;

// ozgartirish(A, B);



// if8.

// function ozlashtirish(A, B) {

// if (A != B) {
//     A = A + B;
//     B = A;
// }

// else {
//     A = 0;
//     B = 0;
// }


// console.log("Yangi A:", A);
// console.log("Yangi B:", B);
// }

// var A = 7;
// var B = 12;

// ozlashtirish(A, B);


// if9.

// function ozlashtirish(A, B) {

//     if (A != B) {
//     if (A > B) {
//         B = A;
//     } else {
//         A = B;
//     }
// }

// else {
//     A = 0;
//     B = 0;
// }

// console.log("Yangi A:", A);
// console.log("Yangi B:", B);
// }

// var A = 7;
// var B = 12;

// ozlashtirish(A, B);



// if10.

// function kichikSon(son1, son2, son3) {
//     var kichik = son1; 

//     if (son2 < kichik) {
//         kichik = son2;
//     }


//     if (son3 < kichik) {
//         kichik = son3;
//     }

//     console.log("Kichik son:", kichik);
// }

// var son1 = 7;
// var son2 = 12;
// var son3 = 5;

// kichikSon(son1, son2, son3);


// if11.

// function oratachaSon(son1, son2, son3) {
//     var oratacha = son1; 

//     if (son2 < oratacha) {
//         oratacha = son2;
//     }

//     if (son3 < oratacha) {
//         oratacha = son3;
//     }

//     if (son2 > oratacha) {
//         oratacha = son2;
//     }

//     if (son3 > oratacha) {
//         oratacha = son3;
//     }

//     console.log("Oratacha son:", oratacha);
// }

// var son1 = 7;
// var son2 = 12;
// var son3 = 5;

// oratachaSon(son1, son2, son3);


// if12.

// function engKattaYigindi(son1, son2, son3) {
//     var yigindi1 = son1 + son2; 
//     var yigindi2 = son2 + son3; 
//     var yigindi3 = son1 + son3; 

//     var engKatta = Math.max(yigindi1, yigindi2, yigindi3); 

//     console.log("Eng katta yig'indi:", engKatta);
// }

// var son1 = 7;
// var son2 = 12;
// var son3 = 5;

// engKattaYigindi(son1, son2, son3);


// if13.

// function tartibniTekshir(A, B, C) {

//     if (A < B && B < C) {
//         var temp = A;
//         A = C;
//         C = temp;
//     }

//     console.log("A:", A);
//     console.log("B:", B);
//     console.log("C:", C);
// }

// var A = 7;
// var B = 12;
// var C = 15;

// tartibniTekshir(A, B, C);


// if14.

// function tartibniTekshir(A, B, C) {

//     if ((A < B && B < C) || (A > B && B > C)) {
//         var temp = A;
//         A = C;
//         C = temp;
//     }

//     console.log("A:", A);
//     console.log("B:", B);
//     console.log("C:", C);
// }

// var A = 7;
// var B = 12;
// var C = 15;

// tartibniTekshir(A, B, C);


// if15.

// function tartibRaqaminiTopish(A, B, C, D) {
//     var tartibRaqami;

//     if (A == B && B == C) {
//         tartibRaqami = D;
//     } else if (B == C && C == D) {
//         tartibRaqami = A;
//     } else if (C == D && D == A) {
//         tartibRaqami = B;
//     } else {
//         tartibRaqami = -1; 
//     }

//     console.log("Tartib raqami:", tartibRaqami);
// }

// var A = 7;
// var B = 12;
// var C = 7;
// var D = 7;

// tartibRaqaminiTopish(A, B, C, D);


// if16.

// function hisoblash(x) {
//     var natija;

//     if (x <= 0) {
//         natija = -x;
//     } else if (0 < x && x < 2) {
//         natija = x ** 2;
//     } else if (x >= 2) {
//         natija = 4;
//     }

//     console.log("Natija:", natija);
// }

// var x = 3;

// hisoblash(x);


// if17.

// function kunlarSoni(yil) {
//     var kunlar;

//     var kabisa = (yil % 4 == 0 && yil % 100 != 0) || (yil % 400 == 0);

//     if (kabisa) {
//         kunlar = 366;
//     } else {
//         kunlar = 365;
//     }

//     console.log(yil + " yilda", kunlar + " kun bor.");
// }

// var yil = 2023;

// kunlarSoni(yil);


// if19.

// function sonTuri(son) {
//     if (son >= 1 && son <= 999) {
//         var xonalar = son.toString().length;

//         if (xonalar == 2 && son % 2 == 0) {
//             console.log("Ikki xonali juft son.");
//         } else if (xonalar == 3 && son % 2 != 0) {
//             console.log("Uch xonali toq son.");
//         } else {
//             console.log("Boshqa son turi.");
//         }
//     } else {
//         console.log("Noto'g'ri kirish. Son 1-999 oraliqda bo'lishi kerak.");
//     }
// }

// var son = 257;

// sonTuri(son);

// Case1.

// function bahoNatijasi(k) {
//     switch (k) {
//         case 1:
//             console.log("Yomon");
//             break;
//         case 2:
//             console.log("Qoniqarsiz");
//             break;
//         case 3:
//             console.log("Qoniqarli");
//             break;
//         case 4:
//             console.log("Yahshi");
//             break;
//         case 5:
//             console.log("A'lo");
//             break;
//         default:
//             console.log("Xato");
//     }
// }

// var k = 3;

// bahoNatijasi(k);


// Case2.

// function faslTegishligi(oy) {
//     switch (oy) {
//         case 12:
//         case 1:
//         case 2:
//             console.log("Qish");
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log("Bahor");
//             break;
//         case 6:
//         case 7:
//         case 8:
//             console.log("Yoz");
//             break;
//         case 9:
//         case 10:
//         case 11:
//             console.log("Kuz");
//             break;
//         default:
//             console.log("Noto'g'ri kirish. Oy raqamini 1-12 oraliqda kiriting.");
//     }
// }

// var oy = 7;

// faslTegishligi(oy);


// Case3.

// function kunlarSoni(oy) {
//     switch (oy) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("Oyda 31 kun bor.");
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("Oyda 30 kun bor.");
//             break;
//         case 2:
//             console.log("Oyda 28 kun (leap yillarda 29 kun) bor.");
//             break;
//         default:
//             console.log("Noto'g'ri kirish. Oy raqamini 1-12 oraliqda kiriting.");
//     }
// }

// var oy = 7;

// kunlarSoni(oy);


// Case4.

// function uzunlikMetrlarda(turi, uzunlik) {
//     switch (turi) {
//         case 1:
//             console.log("Uzunlik metrlarda: " + uzunlik / 10 + " metr");
//             break;
//         case 2:
//             console.log("Uzunlik metrlarda: " + uzunlik * 1000 + " metr");
//             break;
//         case 3:
//             console.log("Uzunlik metrlarda: " + uzunlik + " metr");
//             break;
//         case 4:
//             console.log("Uzunlik metrlarda: " + uzunlik / 1000 + " metr");
//             break;
//         case 5:
//             console.log("Uzunlik metrlarda: " + uzunlik / 100 + " metr");
//             break;
//         default:
//             console.log("Noto'g'ri kirish. Uzunlik turi soni 1-5 oraliqda bo'lishi kerak.");
//     }
// }

// var uzunlikTuri = 3;
// var kesmaUzunlik = 25.5;

// uzunlikMetrlarda(uzunlikTuri, kesmaUzunlik);


// Case5.

// function ogirlikKilogramda(turi, ogirlik) {
//     switch (turi) {
//         case 1:
//             console.log("Og'irlik kilogrammda: " + ogirlik + " kilogramm");
//             break;
//         case 2:
//             console.log("Og'irlik kilogrammda: " + ogirlik / 1000000 + " kilogramm");
//             break;
//         case 3:
//             console.log("Og'irlik kilogrammda: " + ogirlik / 1000 + " kilogramm");
//             break;
//         case 4:
//             console.log("Og'irlik kilogrammda: " + ogirlik * 1000 + " kilogramm");
//             break;
//         case 5:
//             console.log("Og'irlik kilogrammda: " + ogirlik * 100 + " kilogramm");
//             break;
//         default:
//             console.log("Noto'g'ri kirish. Og'irlik turi soni 1-5 oraliqda bo'lishi kerak.");
//     }
// }

// var ogirlikTuri = 3; 
// var ogirlikQiymati = 750; 

// ogirlikKilogramda(ogirlikTuri, ogirlikQiymati);


// Case6.

// function sananiIfodalash(D, M, kabisa) {
//     if (M >= 1 && M <= 12 && D >= 1 && D <= 31) {
//         var kunlarSoni;

//         switch (M) {
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 kunlarSoni = 31;
//                 break;
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 kunlarSoni = 30;
//                 break;
//             case 2:
//                 kunlarSoni = kabisa ? 29 : 28;
//                 break;
//             default:
//                 kunlarSoni = 0;
//         }

//         if (D <= kunlarSoni) {
//             console.log(`Sana: ${D} - ${M} - ${kabisa ? "Kabisa" : "Kabisa emas"}`);
//         } else {
//             console.log("Noto'g'ri kiritish. Belgilangan oyda bunday kun mavjud emas.");
//         }
//     } else {
//         console.log("Noto'g'ri kiritish. Oy raqami 1-12 oraliqda, kun raqami 1-31 oraliqda bo'lishi kerak.");
//     }
// }

// var D = 28;
// var M = 2;
// var kabisa = false;

// sananiIfodalash(D, M, kabisa);


// Case8.

// function robotHolati(Y, K) {
//     const tomongaKochar = ["s", "j", "q", "g"];

//     if (Y >= 0 && Y < tomongaKochar.length && K >= 0 && K <= 2) {
//         switch (K) {
//             case 0:
//                 console.log(`Robotning holati: ${tomongaKochar[Y]}`);
//                 break;
//             case 1:
//                 Y = (Y + tomongaKochar.length - 1) % tomongaKochar.length;
//                 console.log(`Robotning holati: ${tomongaKochar[Y]}`);
//                 break;
//             case 2:
//                 Y = (Y + 1) % tomongaKochar.length;
//                 console.log(`Robotning holati: ${tomongaKochar[Y]}`);
//                 break;
//             default:
//                 console.log("Noto'g'ri kamanda. Kamanda soni 0-2 oraliqda bo'lishi kerak.");
//         }
//     } else {
//         console.log("Noto'g'ri kirish. Y tomoni 0-3 oraliqda, K kamanda soni 0-2 oraliqda bo'lishi kerak.");
//     }
// }

// var Y = 1; 
// var K = 2; 

// robotHolati(Y, K);


// Case9.

// function kartaNominiChiqarish(N, M) {
//     if (N >= 6 && N <= 14 && M >= 1 && M <= 4) {
//         var kartalar = ["", "G'isht", "Olma", "Chillak", "Qarg'a"];
//         var qiymatlar = ["", "olti", "yetti", "sakkiz", "to'qqiz", "o'n", "valet", "dama", "qirol", "tuz"];

//         var kartaNom = qiymatlar[N - 5] + " " + kartalar[M];
//         console.log(`Karta nomi: ${kartaNom}`);
//     } else {
//         console.log("Noto'g'ri kirish. N soni 6-14 oraliqda, M soni 1-4 oraliqda bo'lishi kerak.");
//     }
// }

// var N = 8; 
// var M = 4; 

// kartaNominiChiqarish(N, M);



// Case10.

// function masalaSoziniAniqlash(son) {
//     if (son >= 10 && son <= 40) {
//         var birlik = son % 10;
//         var onlik = Math.floor(son / 10);

//         var birlikSoz = "";
//         var onlikSoz = "";

//         switch (birlik) {
//             case 0:
//                 birlikSoz = "";
//                 break;
//             case 1:
//                 birlikSoz = "bir";
//                 break;
//             case 2:
//                 birlikSoz = "ikki";
//                 break;
//             case 3:
//                 birlikSoz = "uch";
//                 break;
//             case 4:
//                 birlikSoz = "to'rt";
//                 break;
//             case 5:
//                 birlikSoz = "besh";
//                 break;
//             case 6:
//                 birlikSoz = "olti";
//                 break;
//             case 7:
//                 birlikSoz = "yetti";
//                 break;
//             case 8:
//                 birlikSoz = "sakkiz";
//                 break;
//             case 9:
//                 birlikSoz = "to'qqiz";
//                 break;
//         }

//         switch (onlik) {
//             case 1:
//                 onlikSoz = "o`n";
//                 break;
//             case 2:
//                 onlikSoz = "yigirma";
//                 break;
//             case 3:
//                 onlikSoz = "o`ttiz";
//                 break;
//             case 4:
//                 onlikSoz = "qirq";
//                 break;
//         }

//         var masalaSozi = onlikSoz + (birlikSoz ? " " + birlikSoz : "");
//         console.log(`Son: ${son}, Masala: ${masalaSozi} masala`);
//     } else {
//         console.log("Noto'g'ri kirish. Son 10-40 oraliqda bo'lishi kerak.");
//     }
// }

// var son = 26;

// masalaSoziniAniqlash(son);


// Case12. 

function sharqKalendarMuncha(yil) {
    if (yil >= 1) {
        var ranglar = ["yashil", "qizil", "sariq", "oq", "qora"];
        var hayvonlar = ["sichqon", "sigir", "yo'lbars", "quyon", "ajdar", "ilon", "ot", "qoy", "maymun", "tovuq", "it", "to'ngizlar"];

        var rangIndex = (yil - 1) % ranglar.length;
        var hayvonIndex = (yil - 1) % hayvonlar.length;

        var rang = ranglar[rangIndex];
        var hayvon = hayvonlar[hayvonIndex];

        console.log(`${yil}-davr boshi: "${rang} ${hayvon} yili"`);
    } else {
        console.log("Noto'g'ri kirish. Yil haqiqiy va 1 dan katta bo'lishi kerak.");
    }
}

var yil = 1984;

sharqKalendarMuncha(yil);
