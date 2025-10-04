// Write a program to count how many numbers are greater than the user input 	number.

        let num = prompt("Enter a number: ");

        let count = 0; // Counter to keep track of numbers greater than the 		input

        let numbers = [10,20,30];

        if(num > numbers[0]) {
            count++;
        }
        if(num > numbers[1]) {
            count++;
        }
        if(num > numbers[2]) {
            count++;
        }

        document.write("You have " + count + " numbers greater than "  + 		num);
