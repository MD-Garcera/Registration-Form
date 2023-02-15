function verify(){ 
            var password = document.getElementById("password").value; 
            var year = Number (document.getElementById("age").value.substring(0,4));
            var age = Number (new Date().getFullYear()) - year;

            let flag = true;

	        console.log(password);
            console.log(year);
            console.log(age);

            if(password.length < 8) {  
                document.getElementById("message1").innerHTML = "Password length must be atleast 8 characters.";  
                flag = false;  
            }
            else{
                document.getElementById("message1").innerHTML = "";
            }
            
            if(age <= 21) {  
                document.getElementById("message2").innerHTML = "Minors are not allowed!";  
                flag = false;  
            }
		    else{
                document.getElementById("message2").innerHTML = ""
            }

            if(flag) {
                document.getElementById("message3").innerHTML = "Hooray! Your account has been successfully created."; 
            }
}