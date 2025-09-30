// 1. Suppose we have two variables a and b, write a program to swap the values of a and b.

//Before swapping

        let a = 10;
        let b = 30;

        document.write("a: " + a + "<br>");
        document.write("b: " + b + "<br>");

//After swapping
        let c = 10;
        let d = 30;

        let swap;

        swap = c;
        c = d;
        d = swap;

        document.write("c: " + c + "<br>");
        document.write("d: " + d + "<br>");
