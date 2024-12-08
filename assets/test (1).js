const cl = console.log;

nums = [10, 21, 30, 41, 50, 61, 70, 81, 90, 100];


// array of sqroots
// [3.33,4.44,5.55.... , 10]
let arrSqurRoot=nums.map(num=>Math.sqrt(num));
cl(arrSqurRoot);



nums = [10, 21, 30, 41, 50, 61, 70, 81, 90, 100];


// cretae a array of numbers which are divisible by 3 or 5
// [10,21,30,50,70,81,90,100]
let arraydiv5and3=nums.filter(num=>num%3 || num%5);
cl(arraydiv5and3);

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// new arr of comp who run for at least 10 years
let arr10Ycomp=companies.filter(com=>(com.end-com.start)>10);
cl(arr10Ycomp);

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: " ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "retail", start: 1981, end: 1989 }
];


// arr of comp who starts in 80s 
let compStartin80s=companies.filter(com=>com.start>=1980 && com.start<1989);
cl(compStartin80s);

// array of comp whos catg is retail and run for at least 10 years
let compCatRetail=companies.filter(com=>(com.category.toLowerCase().includes('retail')) && ((com.end-com.start)>10));
cl(compCatRetail)

// array of comp catg is Auto and starts in 80s
let compCatAuto=companies.filter(com=>(com.category.toLowerCase().includes('auto')) && (com.start>=1980 && com.start<1989));
cl(compCatAuto);

// array finance catg 
let compCatfinance=companies.filter(com=>(com.category.toLowerCase().includes('finance')));
cl(compCatfinance);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: " ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "retail", start: 1981, end: 1989 }
];

// arr of comp 80s 
let arrstartin80s=companies.reduce((acc,cv)=>{
    return acc =acc+(cv.start>=1980 && cv.start<1989);
},0)
cl(arrstartin80s)

// let givenId = '5' get comp whos id is 5
// let givenId = '5';
// let findById=companies.filter(com=>{
//     return com.id===givenId;
// })
// cl(findById);


let blogsCommentsMedium = [
    {
        id: 123,
        msg: 'You are not bad at all'
    },
    {
        id: 124,
        msg: 'You are not good at teaching'
    }
    ,
    {
        id: 125,
        msg: 'You dont have value of others time'
    },
    {
        id: 126,
        msg: 'You are Dumb'
    },
    {
        id: 127,
        msg: 'I love the way you explain'
    }
]

// let commentId = 126;
let Comment=blogsCommentsMedium.find(com=>com.id===126);
cl(Comment);



nums = [10, 15, 5, 110, 20, 22, 220, 48, 556, 23, 21, 45, 86, 78];

// sort arr in decending order
let DecSort=nums.sort((a,b)=>b-a);
cl(DecSort);

//  sort comp in assending order of there ages
let AsendSort=nums.sort((a,b)=>a-b);
cl(AsendSort);


ages = [10, 15, 5, 20, 22, 48, 23, 21, 45, 86, 78];

// calcuate total age with out using forloop for each
 let acc=0;
ages.forEach(age=>{
        return acc+=age;
});
cl(acc);


companies = [
    { name: "Company One", id: '1', category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: '2', category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: '3', category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: '4', category: " ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: '5', category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: '6', category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: '7', category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: '8', category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: '9', category: "retail", start: 1981, end: 1989 }
];

// calculate total ages of comp with out using forloop and forEach
let ele2=0;
// let TotalAges=companies.forEach(com=>com.end-com.start);
// cl(TotalAges);



// give a array in below format with out using forloop and forEach

// [{compName : "Company One", lifeSpan : "1981-2003"}]


// ages = [10, 15, 5, 20, 22, 48, 23, 21, 45, 86, 78];

// // creat a arr of even num  using forloop and forEach




// arr of comp who starts in 80s and run for at least 10 years without using forloop and forEach

// companies = [
//     { name: "Company One", id: '1', category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", id: '2', category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", id: '3', category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", id: '4', category: " ReTail", start: 1989, end: 2010 },
//     { name: "Company Five", id: '5', category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", id: '6', category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", id: '7', category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", id: '8', category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", id: '9', category: "retail", start: 1981, end: 1989 }
// ];

// without using forloop and forEach
// [{compName : "Company One", duraton : 22}]

let compNamDuaration=companies.map(comp=>{
    let obj= {
        compName:comp.name,
        duration:comp.end-comp.start

    }
});
cl(compNamDuaration);

// let oldies = [25, 35, 45, 56, 86, 56, 36];
// let youngins = [5, 12, 13, 14, 16, 18, 17];
// ages = [10, 21, 14, 41, 110, 105, 16, 61, 11, 81, 19, 30];

// Does the oldies array contain any age greater than 80?
// Are there any ages in the youngins array that are divisible by 3?
// Does the ages array contain any age greater than or equal to 100?
// Are there any even numbers in the oldies array?
// Is there any age in the youngins array less than 10?
// Does the ages array contain any negative numbers?
// Are all values in the oldies array greater than or equal to 25?
// Is every value in the youngins array a teenager (between 13 and 19 inclusive)?
// Are all values in the ages array less than 200?
// Is there any age in the oldies array that is a multiple of 7?
// Are all numbers in the youngins array less than 20?
// Does the ages array contain any age between 15 and 25?
// Are all values in the oldies array odd numbers?
// Is there any prime number in the youngins array?
// Are all ages in the ages array greater than or equal to 10?

// // is there at least one comp who run for at least 12 years? 

// is there at least one comp who run for at least 12 years and starts in 90s? 

// Does the array contain any company that started before 1985?
// Is there any company in the "Retail" category (case-insensitive)?
// Are there any companies that operated for more than 20 years?
// Does the array include any company with an id equal to '5'?
// Is there any company in the "Auto" category that started after 1990?
// Are all companies in the "Finance" category?
// Does every company in the array have a defined name property?
// Are there any companies that ended after 2015?
// Do all companies have an id that is a string?
// Are all companies in the array active for at least 5 years?

// nums = [100,200,[300,400, [500, 560, [600, 700, [900]]]]];
// give one dimensional array



let n = 5;

// in result cretae a array 
// if given length is 5 ans = [1,2,3,4,5]
// if given length is 10 ans = [1,2,3,4,5,6,7,8,9,10]