

const myFrom = document.forms['myForm'];


function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isPasswordValid(password){
  const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return regex.test(password);
}




function formValidate(){
   
//    console.log(
//      myFrom['user'].value,
//      myFrom['email'].value,
//      myFrom['confirm-password'].value,
//    )  
     let userName = myFrom['user'].value;
     
      if(userName.length < 5){
        console.log("username is short")

      }

     let email = myFrom['email'].value;
     
      if(isValidEmail(email) === false){
         console.log('please enter a valid email') 
      }

     let password = myFrom['password'].value;
    
      if(isPasswordValid(password) === false){
        console.log('please enter a valid password')
      }

     let confirmPassword = myFrom['confirm-password'].value;
     
     if(!(password === confirmPassword)){
        console.log("password doesn't match");
     }

}




myFrom.addEventListener('submit', (e)=>{
    e.preventDefault();
     
    formValidate();  
})
