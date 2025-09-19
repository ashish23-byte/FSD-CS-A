function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registered End");
            resolve();
        }, 3000);
    });
    // setTimeout(() => {
    //     console.log("Registered End");
    //     cb();
    // }, 8000);
    
}
function sendmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Mail Sent End");
            resolve();
        }, 3000);       
    });
    //  setTimeout(() => {
    //     console.log("Mail Sent End");
    //     cb();
    // }, 3000);
}
function login(){
    return new Promise((resolve, reject) => {       
        setTimeout(() => {
            console.log("Login End");
             reject("Login Failed");
        }, 2000);
    });
    // setTimeout(() => {
    //     console.log("Login End");
    //     cb();
    // }, 2000); 
}  
function getdata(){
    return new Promise((resolve, reject) => {       
        setTimeout(() => {
            console.log("Data Received End");
            resolve();
        }, 1000);
    }); 
    // setTimeout(() => {
    //     console.log("Data Received End");
    //     cb();
    // }, 1000);
}
function displaydata(){
    // console.log("Display End");
    return new Promise((resolve, reject) => {       
        setTimeout(() => {
            console.log("Display End");
            resolve();
        }, 4000);
    });
    // setTimeout(() => {
    //     console.log("Display End");
    //     cb();
    // }, 4000);
}
// Chain the calls
// register(()=>{
//     sendmail(()=>{
//         login(()=>{
//             getdata(()=>{
//                 displaydata();
//             });
//         });
//     });
// });
// register();
// sendmail();
// login();
// getdata();
// displaydata();

//using Promise
// register().then(sendmail)
//           .catch(login)
//           .then(getdata)
//           .then(displaydata)

//using async await
async function f1(){
    try{
 await register();
 await sendmail();
 await login();
 await getdata();
 await displaydata();
    }
    catch(err){
     console.log('Error :'+err)
    }
}
f1();


console.log("call other Application");
