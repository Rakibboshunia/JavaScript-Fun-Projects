// sort() method sorts the elements of an array in place and returns the 	sorted array. 
        
        let number = [20, 12, 24,true, false, 66,23, 90, 10, 45,"Raihan", 		"Arafat", "Sakib", "Jahid"];
        
        document.write("Original array: " + number + "<br>");

        //small to large sorting 
        number.sort();
        document.write("Sorted array1: " + number + "<br>");

        //large to small sorting
        number.reverse();
        document.write("Reversed array1: " + number + "<br>");

        //Another way to sort from large to small
        number.sort().reverse();
        document.write("Sorted array in descending order: " + number + 			"<br>");
