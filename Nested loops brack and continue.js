
// Nested loops brack and continue

        for(let i=0; i<5; i++){
            for( let j=0; j<5; j++){

            document.write('statment 1: i: ' + i + ", j: " + j + "<br>");
                 
            if(i == 6){  // even number
                break;  // exit the loop
            }

            document.write('statment 2: i: ' + i + ", j: " + j + "<br>"); 
            }
        } 


        for(let i=0; i<5; i++){
            for( let j=0; j<5; j++){

                document.write('statment 1: i: ' + i + ", j: " + j + 			"<br>");
                 
            if(i == 6){  // even number
                continue;  // exit the loop
            }

            document.write('statment 2: i: ' + i + ", j: " + j + "<br>"); 
            }
        }
