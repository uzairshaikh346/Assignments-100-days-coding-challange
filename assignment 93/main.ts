function replaceBananaWithMango (fruits : string[]) : void {
    const index = fruits.indexOf("mango");
    if(index !== -1) {fruits[index] = "banana"};

}


let fruits = ["orange","mango","strewberry"]

replaceBananaWithMango(fruits)

console.log(fruits);
