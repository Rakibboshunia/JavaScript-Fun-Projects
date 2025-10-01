
let x ;

        x = parseInt("102"); 
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseInt("102.50"); 
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseInt("     102"); 
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseInt("102        "); 
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseInt("    102     ");
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseFloat("102, 10");
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseInt("102    100");
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");

        x = parseInt("Rakib");
        document.write(x + "<br>");
        document.write(typeof (x) + "<br>");
