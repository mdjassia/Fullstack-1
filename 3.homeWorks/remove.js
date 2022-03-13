// first exercice 

var list =[1,2,3,3,4,5]
var element =3

function remove(list,element){
    for(let i = 0 ; i < list.length ; i++){
        if(list[i] == element){
            for(j = i ; j < list.length - 1;j++){
                list[j] = list[j+1];
            }
            list.length--;
            i--;
        }
    } 
}
remove(list,element)
console.log(list)


var list =[1,1,1,2, 2 ,3 , 3 , 3 , 4 ,4, 5, 5 ,5 ]
for (let i=0 ;i<list.length-1;i++){
  if(list[i]==list[i+1]){
    for(j = i+1 ; j < list.length -1;j++){
                list[j] = list[j+1];

    }
    list.length--;
    i--
  }
}
console.log(list)