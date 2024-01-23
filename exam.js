//[id , brand , model , type , pricePerDay, available]
let carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan',45,12]
];


//print all car brands
carBooking.forEach(item=>{
    console.log(item[1]);
})

//print total number of cars avilable

console.log('------------------------------------------');
tc=carBooking.map(item=>item[5]).reduce((p1,p2)=>p1+p2);
console.log(tc);


//print sedan car deatails

console.log('---------------------------------');
sedan=carBooking.filter(item=>item[3]=='Sedan');
console.log(sedan);

//print cars with priceperday grater than 60

console.log('---------------------------------');
ppd=carBooking.filter(item=>item[4]>60);
console.log(ppd);

//print details of jeep wrangler
console.log('---------------------------------');
jeep=carBooking.find(item=>item[1]=='Jeep');
console.log(jeep);

//sort cars based on thr desending order of the priceperday
console.log('--------------------------------');
carBooking.sort((a,b)=>b[4]-a[4]).forEach(item=>console.log(item[1]));

//sort cars based on asending order of avialble cars

console.log('--------------------------------');
carBooking.sort((a,b)=>a[5]-b[5]).forEach(item=>console.log(item[1]));

//find the car with the most availability
console.log('---------------------------------------');
ma=carBooking.reduce((p1,p2)=>p1[5]>p2[5]?p1:p2);
console.log(ma[1]);

//calculate the revenue if all the cars are rended for a day
console.log('----------------------------------');
cs=carBooking.reduce((t,p)=>t+p[4]*p[5],0);
console.log(cs);

//count the number of sedan cars



//print all unique car brands
console.log('----------------------------------');
carBooking.forEach(item=>{
    console.log(item[2]);
})

//find the total number of avilable car for all 
console.log('-------------------------------');
ta=carBooking.map(pc=>pc[5]).reduce((p1,p2)=>p1+p2);
console.log(ta);

//find the cars with least avilability
console.log('-------------------------------');
la=carBooking.reduce((p1,p2)=>p1[5]<p2[5]?p1:p2);
console.log(la[1]);

//check if their is any car price per day of exactly 55
console.log('-----------------------------');
t=carBooking.some(item=>item[4]=55)
console.log(t?'yes':'no');


