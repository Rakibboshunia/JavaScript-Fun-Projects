// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

        // First Example

        let number1 = [10,20,30,40,50,60,70,80,90,100];

        document.write("Original array: " + number1 + "<br>");

        let num1 = number1.splice(4); // Removes elements from index 4 to the end.

        document.write("After splice(4): " + number1 + "<br>"); // Displays the modified array

        document.write("Spliced elements: " + num1 + "<br>"); // Displays the removed elements


        // Second Example

        let number2 = [100,200,300,400,500,600,700,800,900,1000];

        document.write("Original array: " + number2 + "<br>");

        let num2 = number2.splice(4, 4, 450, 550); // Removes 4 elements from index 4 and adds 450 and 550

        document.write("After splice(4): " + number2 + "<br>"); 

        document.write("Spliced elements: " + num2 + "<br>");
