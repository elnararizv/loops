// var phoneBrands = ["Acer", "Apple", "Sony", "Samsung"];
// var bookList = [
//   "Calculus Early Transcendentals",
//   "Ravens",
//   "The Self Illusion",
//   "Harry Potter"
// ];
// var movieList = [
//   "Titanic",
//   "Interstaller",
//   "The Shawshank Redemption",
//   "The Martian"
// ];
// for (var i = 0; i < phoneBrands.length; i++) {
//   console.log(phoneBrands[i]);
// }
// for (var k = 0; k < bookList.length; k++) {
//   console.log(bookList[k]);
// }
// for (var j = 0; j < bookList.length; j++) {
//   console.log(movieList[j]);
// }
// ---------------------------------------------------------------

// var vegetablesName = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// for (var i = 0; i < vegetablesName.length; i++) {
// // console.log("I love " +" "+ vegetablesName[i])
//   console.log(`I like ${vegetablesName[i]}`)
// }
  
// -------------------------------------------------------

// var number1=prompt("Please enter a number 1")
      // var number2=prompt("Please enter a number 2")
      // if(number1>number2){
      //   alert(`${number1} is greater than ${number2}`)
      // }else{
      //   alert(`${number2} is greater than ${number1}`)
      // }

      // var a=prompt("a: ")
      // var b=prompt("b: ")
      // var c=prompt("c: ")

      // ----------------------------------------------------------------

      // if(a>b && a>c)
      //   if(b>c){
      //     alert(`${a} ${b} ${c}`)
      //   }else{
      //     alert(`${a} ${c} ${b}`)
      //   }
      // } else if(a<b && b>c){
      //   if(a<c){
      //    alert(`${b} ${c} ${a}`)
      //   }else{
      //     alert(`${b} ${a} ${c}`)
      //   }
      // }else if(c>a && c>b){
      //   if(a>b){
      //     alert(`${c} ${a} ${b}`)
      //   }else {
      //     alert(`${c} ${b} ${a}`)
      //   }
      // }

      // ---------------------------------------------------

//       var a=prompt("a: ")
//       var b=prompt("b: ")
//       var c=prompt("c: ")
//       var d=prompt("d: ")
//       var e=prompt("e: ")

//       if (a>b && a>c && a>d && a>e)
// {
//     alert(a);
// }
// else if (b>a && b>c && b>d && b>e)
// {
//     alert(b);
// }
// else if (c>a && c>b && c>d && c>e)
// {
//     alert(c);
// }
// else if (d>a && d>c && d>b && d>e)
// {
//     alert(d);
// }
// else
// {
//     alert(e);
// }

// -------------------------------------------


// for (var i=0; i<11; i++){
//   if(i%2==0){
//     console.log(`${i} is even number`)
//   }else{
//     console.log(`${i} is odd number`)
//   }
// }

// -----------------------------------------

// var studentMarks=[67,89,90,96,93,99]
// var sum=0
// for (var i = 0;i < studentMarks.length;i++) {
//   sum += studentMarks[i];
// } 
// var avrg=sum/studentMarks.length
//     console.log(avrg)
//   if (avrg>90 && avrg<=100) {
//      console.log("A")
//   }else if(avrg>80 && avrg<=90){
//     console.log("B")
//   }else if(avrg>70 && avrg<=80){
//     console.log("C")
//   }else if(avrg>60 && avrg<=70){
//     console.log("D")
//   }else if(avrg>50 && avrg<=60){
//     console.log("E")
//   }else if(avrg>0 && avrg<=50){
//     console.log("F")}

// -----------------------------------------------------

// for(var i=0; i<=50;i++){
//   if(i%3==0 && i%5==0 ){
//     console.log(`FizzBuzz ${i}`);
//   }else if( i%3==0){
//     console.log(`Fizz ${i}`);
//   }else if(i%5==0){
//     console.log(`Buzz ${i}`);
// }else{
//   console.log(i)
// }
// }

// ---------------------------------------------------------------
var sum=0
for(var i=0; i<=100;i++){
  if(i%5==0 && i%3==0){
   sum+=i
}
}console.log(sum);