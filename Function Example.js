// Example-1, Function Declaration 

        function mul(num1, num2) {
            return num1 * num2;
        }

        document.write("The product is: " + mul(10, 20));

// Example-2, Function Expression

        let f1 = function(num1, num2) {
            let sum = num1 + num2;
            let sub = num1 - num2;
            let mul = num1 * num2;
            let div = num1 / num2;

            return [ sum, sub, mul, div ];
        }

        document.write("<br>The product is:  " + f1(20, 10));
