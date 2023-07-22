// const time = new Date();
// console.log(time);
// const dateToString = time.toISOString();
// console.log(dateToString); //для генерації часу по гринвічу
// console.log(new Date(dateToString));
// console.log(Date.parse(dateToString)); //для перетворення часу в мілісекунди

//================================================

// const date = new Date();
// console.log("Now         ", date);
// console.log("toString    ", date.toString());
// console.log("toUTCString ", date.toUTCString());
// console.log("toTimeString", date.toTimeString());
// console.log("toDateString", date.toDateString());

//================================================

// const zone = date.getTimezoneOffset() / -60;
// console.log("Now  ", date);
// console.log("zone ", zone);

//================================================
let user = {
   timeZone: 4,
};
function getUserTimeZone(timeZone) {
   let date = new Date();
   //    let dateUTC = new Date(Date.UTC(2023, 6, 22, 11, 30, 0, 0));
   let timezone = date.getHours() - date.getUTCHours();
   console.log(timezone);
   console.log(date);
   console.log(date.getUTCHours());
   date.setHours(date.getUTCHours() + timeZone);

   //    let date = Date.now();
   //    const myTimeZone = date.getTimezoneOffset() / -60;
   //    //    console.log(date);
   //    date.setTime(date.getTime() - 1000 * 60 * 60 * myTimeZone);
   //    date.setTime(date.getTime() + 1000 * 60 * 60 * timeZone);
   //    date -= 1000 * 60 * 60 * myTimeZone;
   //    date += 1000 * 60 * 60 * timeZone;
   //    console.log("my Time", date.toUTCString());
   //    console.log("myTimeZone", myTimeZone);
   //    console.log(
   //       "UTC Time more than my Time to my Time Zone",
   //       dateUTC.toUTCString()
   //    );

   //    console.log("getFullYear", date.getFullYear());
   //    console.log("getMonth", date.getMonth());
   //    console.log("getDate", date.getDate());
   //    console.log("getDay", date.getDay());
   //    console.log("getTime", date.getTime());
   //    console.log("getHours", date.getHours());
   //    console.log("getMinutes", date.getMinutes());
   //    console.log("getSeconds", date.getSeconds());
   //    console.log("getMilliseconds", date.getMilliseconds());
   //    console.log("getTimezoneOffset", date.getTimezoneOffset() / -60);
   //    console.log("getUTCDate", date.getUTCDate());
   //    console.log("getUTCDay", date.getUTCDay());
   let res = date.toTimeString().split(" ");
   return res[0];
}
// getUserTimeZone(user.timeZone);
// console.log(
//    "Локальний час користувача відносно локального часу сервера",
//    getUserTimeZone(user.timeZone).toString()
// );
console.log(
   "Локальний час користувача відносно гринвічу",
   getUserTimeZone(user.timeZone)
);
