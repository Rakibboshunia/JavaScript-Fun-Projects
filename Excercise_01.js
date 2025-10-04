//Taking a number input from the user

       let num1 = prompt("Enter a number:");
       let num2 = prompt("Enter another number:");

       document.write(num1 + " "+ num2 + "<br>");

       document.write(typeof (num1) + "<br>");
       document.write(typeof (num2) + "<br>");

       var sum = num1 + num2; 
       document.write("The sum is: " + sum + "<br>");

       //Converting string to number
       num1 = Number(num1);
       num2 = Number(num2);

       document.write(typeof (num1) + "<br>");
       document.write(typeof (num2) + "<br>");

       var sum = num1 + num2;
       document.write("The sum is: " + sum + "<br>");
