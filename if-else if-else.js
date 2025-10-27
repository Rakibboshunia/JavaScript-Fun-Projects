//More on if - else if - else statements

        let a = Number(prompt("Enter a number:"));

        let range1 = 20;
        let range2 = 50;
        
        
        // check if a number is within a range 0r out of range using 			if...else
        if(a>range1 && a<range2){
            document.write("In range" +"<br>");
        }
        else{
            document.write("Out of range" +"<br>");
        }

        // Check if a number is the smallest number among three numbers 		using if...else

        if(a>range1 || a>range2){
            document.write("Not the smallest" +"<br>");
        }
        else{
            document.write("Smallest number" +"<br>");
        }
