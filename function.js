// Defining & calling a function in JavaScript

        function printInfo(){
            document.write("Welcome to JavaScript Programming <br>");
            document.write("I am Al Rakib Bosunia <br>");
            document.write("We are learning JavaScript Functions <br>");
        }

        printInfo();

// Function with parameters
        
        function printInfo(name ,course){
            document.write("Welcome to JavaScript Programming <br>");
            document.write("I am " + name + "<br>");
            document.write("We are learning " + course + "<br>");
        }

        printInfo("Abul Kalam","Javascript for beginners");
        printInfo("Al Rakib Bosunia", "HTML & CSS");

//Multiplication tables using function

        function printMultiplicationTable(num) {
            for (let i = 1; i <= 10; i++) {
                document.write(num + " x " + i + " = " + (num * i) + 			"<br>");
            }
        }

        // Calling the function
        printMultiplicationTable(10);
