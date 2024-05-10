

const myFrom = document.forms['myForm'];


function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isPasswordValid(password){
  const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return regex.test(password);
}

function setError( id, errorMsg ){
   let newId = `#${id}` ;
  const ele = document.getElementById(id);
  console.log(ele)
  const errorEle = ele.querySelector('.error-msg');
  console.log(errorEle)
  errorEle.innerHTML = errorMsg;
}




function formValidate(){
   
     const userName = myFrom['user'].value;
     
      if(userName.length < 5){
        // console.log("username is short")
        setError('user', "username is short") 
      }

      const email = myFrom['email'].value;
     
      if(isValidEmail(email) === false){
        //  console.log('please enter a valid email')
         setError('email',"please enter a valid email"); 
      }

      const password = myFrom['password'].value;
    
      if(isPasswordValid(password) === false){
        // console.log('please enter a valid password')
        setError('password', "please enter a valid password");
      }

      const confirmPassword = myFrom['confirm-password'].value;
     
     if(!(password === confirmPassword)){
        // console.log("password doesn't match");
        setError('confirm-password',"password doesn't match")
     }

}




myFrom.addEventListener('submit', (e)=>{
    e.preventDefault();
     
    formValidate();  
})
