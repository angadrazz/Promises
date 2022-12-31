const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('this is the eventual value the promise will return');
        }, 3000);
      });
      
      console.log(myPromise);
      var x = new Promise(() => {})
console.log(x);


function greeting(name) {
        alert(`Hello, ${name}`);
      }
      
      function processUserInput(callback) {
        const name = prompt("Please enter your name.");
        callback(name);
      }
      
      processUserInput(greeting);



function greet(name, callback){
        console.log(`Hi ${name}`);
        callback();
}
function askQuestion(){
        console.log('How are you?');
}

greet('Angad' , askQuestion);


setTimeout(function(){
        console.log(1);
}, 0);

var promise = new Promise(function(resolve, reject){
        resolve(2);
});

promise.then(function (data){
        console.log(data)
});

console.log(30);