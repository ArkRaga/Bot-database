const server = require("./sever");

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Jarvis: Welcome Sir On: " + port);
  // setInterval(sayHi,2000)
});


const sayHi =()=>{
  console.log("Hi")
}

// const count=(num)=>{
//  if (num >0){
//    num -=1
//     return count(num)
//  }
//  else{
//    console.log("Ding")
//    count(num)
//  }
// }
