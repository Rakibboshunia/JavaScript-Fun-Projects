//for loop with array

        let colors = ["Red", "Green", "Blue", "Yellow", "White" , "Black"];

        for (let i=0; i<colors.length; i++)
            {
                document.write(colors[i] + "<br>");
            }

//while loop with array 

        let i = 0;
        while(i < colors.length){
            document.write(colors[i] + "<br>");
            i++;
        }

//string with for loop
        
        let str = 'Hi! I am Rakib Boshunia. I am a web developer. I love to 		code.';

        for(let i=0; i<str.length; i++){
            document.write(str[i]);
        }

// for in loop example

        let colors = ["red", "green", "blue", "yellow", "black", "white"];

        for (let x in colors){
            document.write( x + "<br>"); // x is the index
            
            document.write( colors[x] + "<br>"); // colors[x] is the value 		at that index
        }

// for of loop example

        let colors = ["red", "green", "blue", "yellow", "black", "white"];

        for(let x of colors){
            document.write(x + "<br>"); 
            document.write(colors.indexOf(x) + "<br>"); 
        }

// for of & for in loop example

        let colors = 'Hi! My name is Rakib Boshunia.I am a web developer.';

        for(let x of colors){
            document.write(x + '<br>');
        }

        for(let x in colors){
            document.write(x + '<br>');
        }
