//*********************task1**************************** */
// let arr = [2, 3, 4, 5];
// let mult = 1;
// for (let i = 0; i < arr.length; i++) {
//      mult *= arr[i];  
// }
// console.log(mult);


// let arr = [2, 3, 4, 5];
// let mult = 1;
// let i = 0;
// while(i<arr.length){
//     mult *= arr[i]
//     i++;
// }
// console.log(mult);


//**************************task2 ******************** */

// for(let i = 0; i<=15; i++){
//     if((i%2) ==0)console.log(i + " - even");
//     else (console.log(i+ " - odd"))
// }

//***************************task3****************** */


// function getRandomArray(k){
//     let newArr = [];
//     for(let i =0; i < k; i++){
//         newArr[i] = Math.floor((Math.random() * 500)+1);
//     }
//     console.log(newArr);
// }

// getRandomArray(5);

//**************************task4*************** */


// function raiseToDegree(a,b){
//      console.log(Math.round((a**b)));    
// }

// raiseToDegree(3,4);


//****************************task5**************** */
// function findMin(...arguments){
//    console.log(Math.min(...arguments));    
// }

// findMin(12, 14, 4, -4, 0.2);

//****************************task6***************** */

// function findUnique(arr){
//    let isUnuque = arr.some((val, i) => arr.indexOf(val) !== i);
//       return isUnuque ? console.log(false) : console.log(true);
      
// }

// findUnique([1, 2, 3, 5, 3]);
// findUnique([1, 2, 5, 3]);


//або ще такий варіант

// function findUnique(args) {

//    let count = {};
//    for(let i = 0; i < args.length; i++){
//         count[args[i]] = 1 + (count[args[i]] || 0);
//    }
//    let found = Object.keys(count).filter(function(key) {
//        return count[key] > 1;
//    });
//    return found.length ? console.log(false) : console.log(true); 
// }

// findUnique([1, 2, 3, 5, 3]);
// findUnique([1, 2, 3, 5, 11]); 


//************************task7****************** */


// function getElements(arr,n){

//     if(n>0 && n<=arr.length){
//         while(arr.length-n){
//             arr.shift();
//         }
//         console.log(arr);
//     }else if( !n  ){
//         console.log(arr.pop())
//     }
// }
  
//  getElements([1,2,3,4,5,78,8,9,6])
 

//**********************task8 ********************* */
// function titleCase(str) {
//    let arr = str.toLowerCase().split(" ");
//    let result = arr.map(function(val){
//      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//    });
//    let output =  result.join(" ");
//    console.log(output);
//  }
 
// titleCase('i love java script');

