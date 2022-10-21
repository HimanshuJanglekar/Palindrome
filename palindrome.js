/// check string palindrome or not

let str= "racecar";
let bag="";

// for(let i=0; i < str; i++) {
// bag=bag+str[i]
// }


for(let i=str.length-1; i>=0; i--) {
    bag+=str[i]
}

console.log(bag)