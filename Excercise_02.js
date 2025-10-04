// Initialize an array with marks

       let marks = [78, 84, 69, 90, 74, 91, 88, 76];

       document.write("Math Marks: " + marks[0] + "<br>");
       document.write("English Marks: " + marks[1] + "<br>");
       document.write("Bangla Marks: " + marks[2] + "<br>");
       document.write("Religion Marks: " + marks[3] + "<br>");
       document.write("ICT Marks: " + marks[4] + "<br>");
       document.write("Biology Marks: " + marks[5] + "<br>");
       document.write("Physics Marks: " + marks[6] + "<br>");
       document.write("Chemistry Marks: " + marks[7] + "<br>");

       // Update ICT Marks
       marks[4] = 87;
       document.write("Updated ICT Marks: " + marks[4] + "<br>");

       // Calculate total marks
       let totalMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] + marks[6] + marks[7];
       document.write("Total Marks: " + totalMarks + "<br>");
