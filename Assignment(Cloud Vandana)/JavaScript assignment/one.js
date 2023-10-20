//Take a sentence as an input and reverse every word in that sentence.
const str = 'This is a sunny day';
const reverseSentence = str => {
   const arr = str.split(" ");
   const reversed = arr.map(string => {
      return string.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str));

//Perform sorting of an array in descending order.
const arr1 = [54,23,12,97,100]; 
  
function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
}
console.log(arrSort(arr1));