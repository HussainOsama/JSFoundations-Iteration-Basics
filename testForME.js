let fruits = ["apple" , "banana" , "orange"]


fruits.forEach( hello =(fruit,index) => {
    console.log(`${fruit} ${index}`);
})


let juices = fruits.map((fruit) => {
    return `${fruit} juice` 
})


let appleJuice = juices.filter(juice =>{
    return juice === "apple juice"
})






console.log(fruits);
console.log(juices);
console.log(appleJuice);