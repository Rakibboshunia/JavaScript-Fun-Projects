//continue in loops 
       
        for(let i=0; i<10; i++){ 
            document.write('statment 1: ' + i + "<br>"); //
            if(i%2 == 0){ // even number
                continue; // skip the rest of the code in this iteration
            }

            document.write('statment 2: ' + i + "<br>"); // odd number

        }
