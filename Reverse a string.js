// Reverse a string using a for loop

        let str = 'Hi! My name is John. I am 30 years old.';
        let colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
        let strrev = '';

        for(let i=str.length -1; i>=0; i--){
            document.write(str[i]);
            strrev = strrev + str[i]; //reversing the string
        }
        document.write('<br>Reversed string: ' + strrev);

        document.write('<br>');


// Reverse an array using a for loop

        for(let i=colors.length -1; i>=0; i--){
            document.write(colors[i] + '<br>');
        }


