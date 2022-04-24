const arguments=process.argv.slice(2);
const radius=arguments[0]*1;
const PI=3.27;
let area=PI*radius*radius;
console.log("Yarı çapı ${radius} olan dairenin alanı ${area}",area);