
/* Write a function pushPull that takes one argument - a function - and invokes that function: */



const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

// const alertDataFunc = function (func){
//   alert(func)
// } 

// const logDataFunc = function (func){
//   console.log(func)
// } 

// const data = function (string){
//   console.log(string)
// } 

// const alert = function (func){
//   console.log(func)
// }

const logData = function (data){
  console.log (data)
}

displayData(alert, logData, "I like to party")
  