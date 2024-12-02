let str="ankit"
console.log("1=",str);
console.log( "2=",str.length);
console.log("3=",str.length-1);
let a =5;
 b=5;
console.log("4=",a+b);
// array oprations
 let ankit=[5,8,9,10]
 let akr=["ankit","anup","gaurav","aditya","arpit"];
console.log("5=",ankit);
console.log("6=",akr);

console.log("7=",akr[3]);
// replace element of array
akr[0]="anm";
console.log("8=",akr);
// note we can add any element at any index but other indexes are blank  but total size increse
ankit[10]=50;
console.log("9=",ankit);

// array methods
akr.push("hani")
console.log("11=",akr);
akr.unshift("madan");
console.log("12=",akr);
akr.pop();
console.log("13=",akr);
let aditi=akr.shift();
console.log("unshift value=",aditi);
console.log("14",akr);
// /use of indexof
console.log("15=",akr.indexOf("aditya"));
 console.log("15=",akr.indexOf("mukesh"));
//  use of slice
console.log("16=",akr.slice(2,4));

//checking of mutability 
akr[4]="akansha";

console.log("17=",akr)
// use of repeat
let fruits=" apple"

console.log("18=",fruits.repeat(5));

// length of array
a
 console.log("19=",akr.length);

// (include) checking the existence of a element

console.log("20=",akr.includes("gaurav"));

ankit.concat(akr);
console.log("21=",ankit.concat(akr));
// reverse of array
akr.reverse();
console.log("22=",akr);

// splice[starting index,deleted index,addition]

console.log("23=",akr.splice[1,2]);


