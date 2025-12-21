const name = "nikunj"
const repoCount = 50


// console.log(name + repoCount + " value");


console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("nikunj-ucict-jags")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("u"));

 const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-8, 6)
console.log(anotherString);

const newStringOne = "    nikunj     " 
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https//nikunj.com/nikunj%20ucict"

console.log(url.replace("%20", "-"));

console.log(url.includes("nikunj"));


console.log(gameName.split('-'));
