//Assigning values in Variables

        let Var1 = 10;
        let Var2 = 20;
        let Var3 = Var1 + Var2;

        document.write(Var3);
        
//Working with different data types and variables

        let x=10; //number
        let y="Rakib"; //string
        let z=true; //boolean

        document.write(x);
        document.write("<br>");
        document.write(typeof(x));
        document.write("<br>");

        document.write(y);
        document.write("<br>");
        document.write(typeof(y));
        document.write("<br>");

        document.write(z);
        document.write("<br>");
        document.write(typeof(z));


//Dynamic typing in JavaScript

        let x = 10;
        document.write(typeof(x));
        document.write("<br/>");

        x = "Rakib";
        document.write(typeof(x));
        document.write("<br/>");

        x = true;
        document.write(typeof(x));
        document.write("<br/>");


//Different data types in JavaScript

        document.write(10);
        document.write("<br/>");

        document.write("Rakib");
        document.write("<br/>");
        
        document.write(true);
        document.write("<br/>");

//You can also write like this

        document.write(10 + "<br/>" + "Rakib" + "<br/>" + true);

//Type coercion in JavaScript

        document.write(10+20 + "Rakib");
        document.write("<br/>");
        document.write("Rakib" + 10+20);
        document.write("<br/>");

//In the first case, it adds 10 and 20 first, then concatenates with "Rakib"
        
        let var1 = 10;
        let var2 = 20;
        let var3 = "Rakib";

        document.write(var1 + var2 + var3);
        document.write("<br/>");
        document.write(var3 + var1 + var2);
