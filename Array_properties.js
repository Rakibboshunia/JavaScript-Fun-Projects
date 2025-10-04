        // Array Length Property 
        let numbers = [20, 30, 40, 50, 60];

        let len = numbers.length;
        document.write("Length of the array is: " + len + "<br>");

        // Alternatively, directly using the length property
        document.write("Length of the array is: " + numbers.length + "<br>");

        
        //removing first element from the array
        let num = numbers.shift();

        document.write("After removing first element, Numbers of the array is: " + numbers + "<br>");
        document.write("Removed element is: " + num + "<br>"); //removed element is: 20

        
        //removing last element from the array
        let num1 = numbers.pop();

        document.write("After removing last element, Numbers of the array is: " + numbers + "<br>");
        document.write("Removed element is: " + num1 + "<br>"); //removed element is: 60


        //Adding element at the start of the array
        numbers.unshift(10);
        document.write("After adding element at the start, Numbers of the array is: " + numbers + "<br>");

        //Adding element at the end of the array
        numbers.push(100);
        document.write("After adding element at the end, Numbers of the array is: " + numbers + "<br>");
