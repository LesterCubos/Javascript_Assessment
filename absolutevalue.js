function getPositives(arr)
{
    return arr.filter(num => num >= 0);
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr);
console.log(arr2); //should return: [10,12,5,90,0,1]