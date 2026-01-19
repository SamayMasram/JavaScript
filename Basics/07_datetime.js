let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 26)
console.log(myCreatedDate.toDateString());
// In JS months are started from 0 (jan)

let myCreatedDate2 = new Date(2026, 0, 26, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2026")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamps = Date.now()
console.log(myTimeStamps);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear())

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);