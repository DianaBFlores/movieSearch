// call back function 
const saySomething = (callBack) => {
    // console.log('hello');
    callBack('hi! how are you?');
};

saySomething((message) => {
    console.log(message);
});

// // secound call back function 
// function greeter(message) {
//     console.log(`${message}, how are you doing?`)
//   }
  
//   function greetSomeone(callback) {
//     callback('Hi!')
//   }
  
//   greetSomeone(greeter)


// promt askes what movie would you like to watch after 5 seounds 
setTimeout(function () {
    console.log('what movie would you like to watch?')

var person = prompt("what movie would you like to watch?", "Harry Potter");
if (person != null) {
}
    }, 5000)


