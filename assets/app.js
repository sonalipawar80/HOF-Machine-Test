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
let arr10Ycomp=companies.filter(com=>(com.end-com.start)>=10);
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
let compStartin80s=companies.filter(com=>com.start>=1980 && com.start<=1989);
cl(compStartin80s);

// array of comp whos catg is retail and run for at least 10 years
let compCatRetail=companies.filter(com=>(com.category.toLowerCase().includes('retail')) && ((com.end-com.start)>=10));
cl(compCatRetail)

// array of comp catg is Auto and starts in 80s
let compCatAuto=companies.filter(com=>(com.category.toLowerCase().includes('auto')) && (com.start>=1980 && com.start<=1989));
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
    return acc =acc+(cv.start>=1980 && cv.start<=1989);
},0)
cl(arrstartin80s)



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

// let givenId = '5' get comp whos id is 5
let givenId = '5';
let findById=companies.find(com=>{
    return com.id===givenId;
})
cl(findById);


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
let totalage =ages.reduce((acc,cv)=>{
   acc+=cv;
   return acc
},0)
cl(totalage);



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
// let arr=[];
// companies.forEach(comp => {
//     arr.push(comp.end-comp.start);
// });
// cl(arr);

let totalagecomp=companies.reduce((acc,cv)=>{
    let ageof=cv.end-cv.start;
    return acc+ageof;
    
},0)
cl(totalagecomp);


// give a array in below format with out using forloop and forEach

// [{compName : "Company One", lifeSpan : "1981-2003"}]

// let arr2=[];
// companies.forEach(comp=>{
//     arr2.push(obj={
//         companyName:comp.name,
//         lifespan:`${comp.start}-${comp.end}`
//     })
// });
// cl(arr2);

// let companystracture=companies.map(comp=>{
//     return{
//         compName: comp.name,
//         lifeSpan: `${comp.start}-${comp.end}`
//     }
// })
// cl(companystracture);

// let result=companies.reduce((acc.cv))


ages = [10, 15, 5, 20, 22, 48, 23, 21, 45, 86, 78];

// // creat a arr of even num  using forloop and forEach
let arr3=[];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2===0){
        arr3.push(ages[i])
    }
}
cl(arr3);




// arr of comp who starts in 80s and run for at least 10 years without using forloop and forEach

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

// without using forloop and forEach
// [{compName : "Company One", duraton : 22}]
let compNamDuaration=companies.map(comp=>{
    return {
        compName:comp.name,
        duration:comp.end-comp.start

    }
});
cl(compNamDuaration);


let oldies = [25, 35, 45, 56, 86, 56, 36];
let youngins = [5, 12, 13, 14, 16, 18, 17];
ages = [10, 21, 14, 41, 110, 105, 16, 61, 11, 81, 19, 30];

// Does the oldies array contain any age greater than 80?
let age80contain=oldies.some(age=>age>80);
cl(age80contain);

// Are there any ages in the youngins array that are divisible by 3?
let younagediv3=youngins.some(age=>age/3);
cl(younagediv3);

// Does the ages array contain any age greater than or equal to 100?
let  greater100age=ages.some(age=>age>=100);
cl(greater100age);

// Are there any even numbers in the oldies array?
let evenNum=oldies.some(age=>age%2===0);
cl(evenNum);

// Is there any age in the youngins array less than 10?
let less10=youngins.some(age=>age<10);
cl(less10);

// Does the ages array contain any negative numbers?
let negNumber=ages.some(age=> age<0);
cl(negNumber);

// Are all values in the oldies array greater than or equal to 25?
let greaterthan25=oldies.every(age=>age>=25);
cl(greaterthan25);

// Is every value in the youngins array a teenager (between 13 and 19 inclusive)?
let tinAge=youngins.every(age=>age>=13&&age<=19);
cl(tinAge);

// Are all values in the ages array less than 200?
let less200Age=ages.every(age=>age<200);
cl(less200Age);

// Is there any age in the oldies array that is a multiple of 7?
let mulof7=oldies.some(age=>age===7*2);
cl(mulof7);

// Are all numbers in the youngins array less than 20?
let less20Age=youngins.every(age=>age<20);
cl(less20Age);

// Does the ages array contain any age between 15 and 25?
let btn15to25=youngins.some(age=>age>=15&&age<=25);
cl(btn15to25);

// Are all values in the oldies array odd numbers?
let oddvalu=oldies.every(age=>age%2!==0);
cl(oddvalu);

// Is there any prime number in the youngins array?
let primeNum=youngins.some(age=>age%2===0);
cl(primeNum);

// Are all ages in the ages array greater than or equal to 10?
let greterthan10=ages.every(age=>age>=10);
cl(greterthan10);

// is there at least one comp who run for at least 12 years? 
let run12Year=companies.some(comp=>(comp.end-comp.start)===12);
cl(run12Year);

// is there at least one comp who run for at least 12 years and starts in 90s? 
let run12Yearstart90=companies.some(comp=>(comp.end-comp.start)===12 && (comp.start>=1990 && comp.start<=1999));
cl(run12Yearstart90);

// Does the array contain any company that started before 1985?
let start1985=companies.some(comp=>comp.start<1985);
cl(start1985);

// Is there any company in the "Retail" category (case-insensitive)?
let retailCat=companies.some(comp=>comp.category.toLowerCase().includes('retail'));
cl(retailCat);

// Are there any companies that operated for more than 20 years?
let morethan20=companies.some(comp=>(comp.end-comp.start)>20);
cl(morethan20);

// Does the array include any company with an id equal to '5'?
let Ideq5=companies.some(comp=>comp.id.toLowerCase().includes('5'));
cl(Ideq5);

// Is there any company in the "Auto" category that started after 1990?
let startafter90s=companies.some(comp=>(comp.category.toLowerCase().includes('auto'))&&(comp.start>=1990 && comp.start<=1999));
cl(startafter90s);

// Are all companies in the "Finance" category?
let finance=companies.every(comp=>comp.category.toLowerCase().includes('finance'));
cl(finance);

// Does every company in the array have a defined name property?
let defName=companies.every(comp=>comp.name);
cl(defName);

// Are there any companies that ended after 2015?
let endafter2015=companies.some(comp=>comp.end>=2015);
cl(endafter2015);

// Do all companies have an id that is a string?
let compIdStg=companies.every(comp=>comp.id==="");
cl(compIdStg);

// Are all companies in the array active for at least 5 years?
let activecomp5Y=companies.every(comp=>(comp.end-comp.start)>=5);
cl(activecomp5Y);

nums = [100,200,[300,400, [500, 560, [600, 700, [900]]]]];
// give one dimensional array
let purearray=nums.flat(Infinity);
cl(purearray);


let n = 10;

// in result cretae a array 
// let arrcreat=new Array(5).fill(5);
// cl(arrcreat);

let creatarr=(n)=>{
    return new Array(n).fill(0).map((_,i)=>i+1)
}
cl(creatarr(n));

// if given length is 5 ans = [1,2,3,4,5]
// if given length is 10 ans = [1,2,3,4,5,6,7,8,9,10]