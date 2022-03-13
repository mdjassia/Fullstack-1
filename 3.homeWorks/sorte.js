// first solution
var numbers = [-3,4,8,2,7,-2,-4,5]

for (var i=0;i<numbers.length -1;i++){
    for(var j=i+1;j<numbers.length;j++)  {
        if(numbers[i]>numbers[j]){
            var x = numbers[i]
            numbers[i]=numbers[j]
            numbers[j]= x
        }
    }
}
console.log( numbers)



