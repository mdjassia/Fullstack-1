//exo1
var person1 ={
    nom : "assia",
    age : 20 
}
var person2 = {
    nom :"assia",
    
}

function compare(person1,person2){
    for(let obj in person1){
        for(let obj2 in person2){
            if(person2[obj2] == person1[obj]){
                return true;
            }
        }
    }
    return false;
}

console.log(compare(person1,person2))
//exo 2 :
function difference(arr1,arr2){
    let result = [];
    arr1.forEach((element) =>{
        if(arr2.indexOf(element) != -1){
            result.push(element);
        }
    });
    return result;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));