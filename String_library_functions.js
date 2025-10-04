//Working with string library functions

       let str = "My name is Rakib. My country name is Bangladesh.My city name is dhaka. I love my country.";
       let x;

       // Find the length of the string
       x = str.length; 
       document.write( x + "<br>");

       // Find a First string in a string
       x = str.indexOf("name"); // it will return the first index of the string
       document.write( x + "<br>");

       // Find a Last string in a string 
       x = str.lastIndexOf("name"); // it will return the last index of the string
       document.write( x + "<br>");

       // Find a string in a string from a specific position
        x = str.indexOf("name", 10); // 10 means start from index 10
       document.write( x + "<br>");

       //slice() method to extract a part of a string
       x = str.slice(11, 16); // it will return the string from index 11 to 16 (16 is not included)
       document.write( x + "<br>");

       x = str.slice(11); // it will return the string from index 11 to the end of the string
       document.write( x + "<br>");

       x = str.slice(-9, -2); // it will return the string from index -9 to -2 ( -2 is not included)
       document.write( x + "<br>");

        //substring() method to extract a part of a string
        x = str.substring(11, 16); // it will return the string from index 11 to 16 (16 is not included)
        document.write( x + "<br>");

        //find replace() method to replace a part of a string
        x = str.replace("Rakib", "Ashik");
        document.write( x + "<br>");

        // uppercase() method to convert a string to uppercase
        x = str.toUpperCase();
        document.write( x + "<br>");

        // lowercase() method to convert a string to lowercase
        x = str.toLowerCase();
        document.write( x + "<br>");

        // concat() method to join two or more strings
        let str1 = "My";
        let str2 = "Name";
        let str3 = "Is Rakib";

        x = str1.concat(" ", str2, " ", str3); 
        document.write( x + "<br>");

        // or 
        x1 = str1 + " " + str2 + " " + str3;
        x1 = x1.replace("My Name Is Rakib" , "I am from Bangladesh");
        document.write( x1 + "<br>");

        // trim() method to remove whitespace from both sides of a string
        let str4 = "       Hello World!      ";
        x = str4.trim();
        document.write( x + "<br>");

        // charAt() method to find a character at a specific index
        x = str.charAt(11); // it will return the character at index 11
        document.write( x + "<br>");
