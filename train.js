// D-TASK

/*
Shunday class tuzing nomi Shop, va uni constructoriga 3 xil mahsulot pass bo'lsin, 
hamda classning 3ta methodi bo'lsin, biri qoldiq, biri sotish va biri qabul. 
Har bir method ishga tushganda vaqtni ham log qilsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40 da 4ta non, 
5 ta lagmon va 2ta cola mavjud!; shop.sotish('non', 3) & shop.qabul('cola', 4) & 
shop.qoldiq() return MASALAN: hozir 20:50 da 1 ta non, 5 ta lag'mon va 6 ta cola mavjud!
*/

const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
    this.time = moment().format("HH:mm");
  }

  qoldiq() {
    console.log(
      `Hozir ${this.time} da ${this.non} ta non, ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud.`
    );
  }

  sotish(item, amount) {
    if (this[item] >= amount) {
      this[item] -= amount;
      console.log(
        `Hozir ${this.time} da ${this.non} ta non, ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud.`
      );
    } else {
      console.log(
        `Hozir ${this.time} da ${amount} ta ${item} sotish imkoni yo'q, yetarli emas.`
      );
    }
  }

  qabul(item, amount) {
    this[item] += amount;
    console.log(`Hozir ${this.time} da ${amount} ta ${item} qabul qilindi.`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 3);
shop.qoldiq();

// C-TASK:
/*
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// function checkContent(str1, str2) {
//   const arr1 = [...str1].sort().join("");
//   const arr2 = [...str2].sort().join("");
//   return arr1 === arr2 ? true : false;
// }

// const result = checkContent("mitgroup", "puorgtim");
// console.log("C-TASK:", result);

// B-TASK:
/*
Shunday function tuzing, u 1 ta string parametrga ega bo'lsin, hamda o'sha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7 ni return qiladi.
*/

// function countDigits(string) {
//   let count = 0;
//   for (const str of string) {
//     if (!isNaN(str) && str !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("L7 5sbbc221h17"));

// A-TASK:
/*
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi so'zdan qatnashgan sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// function countLetter(e, word) {
//   let count = 0;
//   const char = word.split("");
//   char.map((c) => {
//     if (c === e) {
//       count++;
//     }
//   });
//   return count;
// }

// const result = countLetter("e", "engineeringeeee");
// console.log("A-Task:", result);

// ======= //

// ASYNC & CALLBACK functions
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[41]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// console.log("passed here 0");

// then/catch
// maslahatBering(25)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// // asyn/await
// async function run() {
//   let javob = await maslahatBering(35);
//   console.log(javob);
//   javob = await maslahatBering(61);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();
// console.log("passed here 2");
