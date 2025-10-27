//function recursion example
        //0 1 1 2 3 5 8 13 21 34 55........ febonacci series

        function febonacci(num){
            if(num==0) return 0; //base case
            if(num==1)return 1; //base case

            if (fibo[num] != -1) // memoized case
                return fibo[num];  // return if already calculated
             else{
                fibo[num] = febonacci(num-1) + febonacci(num-2); // store the calculated value
                return fibo[num];
             }
            return febonacci(num-1) + febonacci(num-2); 
        }

        //dynamic programming

        let fibo = []; // memoization array
         for(let i=0; i<200; i++){  // initialize the array
            fibo.push(-1);  // -1 indicates that the value is not yet calculated
         }


        document.write(febonacci(199) + "<br>");
