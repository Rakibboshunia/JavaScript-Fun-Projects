// Write a program to count how many numbers are less than the user input 	number.

        var num1 = prompt("Enter a number: ");

        var count1 = 0;

        var numbers = [10, 20, 30];

        if(num1 > numbers[0]) {
            count1 = numbers[0];
        }
        if(num1 > numbers[1]) {
            count1 = numbers[1];
        }
        if(num1 > numbers[2]) {
            count1 = numbers[2];
        }

        document.write("You have " + count1 + " numbers greater than "  + 		num1);
