// getting Date

let date = new Date();
console.clear()
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` ) // get current year

console.log(date.getHours(),":", date.getMinutes(),":", date.getSeconds(),":",date.getMilliseconds()) // print current time

console.log(date.getTime()) // gives milliseconds since 1970

let year = 1000*60*60*24*365 // 1000*60 == 1 minute, 60 minutes == 1 hr, 24 hr == 1 day, 365 days == 1 year

let years = Math.round(date.getTime() / year);
console.log(years)

console.log(date.getDay())

console.log("----------------------------------")

// setting Date

const d = new Date("13 october 2003 00:45:50")
console.log(d.getDate())

console.log("----------------------------------")

const settingDate = new Date();

settingDate.setDate(13);
settingDate.setMonth(9);
settingDate.setFullYear(2013);

console.log(settingDate.getDate(),"/",settingDate.getMonth(),"/",settingDate.getFullYear());



