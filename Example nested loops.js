// Example 1: Basic nested loops

         for(let i=0; i<10; i++){  // outer loop
            for(let j=0; j<10; j++){  // inner loop
                document.write( 'i: ' + i + " " + 'j: ' + j + "<br>");
            }
        }

// Example 2: 2D array traversal using nested loops

        let arr2d =[
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20]
        ]

        for(let i=0; i<4; i++){  // outer loop
            for(let j=0; j<5; j++){  // inner loop
                document.write(arr2d[i][j] + ' '); 
            }
            document.write("<br>"); // new line after inner loop
        }
