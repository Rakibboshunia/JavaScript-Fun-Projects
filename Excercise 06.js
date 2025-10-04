// Write a program to find the largest number among three numbers.

        let a = Number(prompt("Enter a number: "));
        let b = Number(prompt("Enter b number: "));
        let c = Number(prompt("Enter c number: "));

        if(a>b) {      // a is greater than b
            if(a>c) {     // a is also greater than c
                document.write(a + " is the largest number");
            } else {
                document.write(c + " is the largest number");
            }

        } else {    // b is greater than a
            if(b>c) {     // b is also greater than c
                document.write(b + " is the largest number");
            } else {
                document.write(c + " is the largest number");
            }
        }
