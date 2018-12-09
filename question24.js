//生成器方法
// const plusFor = function* (name){
//     let x=1;
//     while(true){
//         yield `为${name}+${x}s`;
//         x++;
//     }
// }

// let count1 = plusFor("Bob");
// let count2 = plusFor("Alice");
// console.log(count1.next().value);
// console.log(count1.next().value);
// console.log(count2.next().value);
// console.log(count2.next().value);

//闭包方法
const plusFor = function(name){
    let t = 0;
    let counter = function(){        
        t++;
        return `为${name}+${t}s`;
    }
    return counter;
}

 let count1 = plusFor("Bob");
 let count2 = plusFor("Alice");
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
