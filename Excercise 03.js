// if...else statement is used to perform different actions based on 	different conditions.

        let num = prompt("Enter a Number"); // Taking input from the user

        if(num > 0) {
            document.write("The Number is Positive");
            document.write(" " + num*20 + "<br>"); // Multiplying the 			positive number by 20 
        } 
        else if (num < 0) {
            document.write("The Number is Negative");
            document.write(" " + num*10 + "<br>"); // Multiplying the 			negative number by 10 
        } 
        else {
            document.write("The Number is Zero");
        }

        
        //Another Example

        let age = prompt("Enter your age"); // Taking input from the user

        if(age >= 18) {
            document.write("You are eligible to vote");
        } 
        else {
            document.write("You are not eligible to vote");
        }
