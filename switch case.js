// Day of the week using switch case statement 

        let date = new Date();
        let day = date.getDay();

        switch(day){
            case 0:
                document.write("Today is Sunday");
                break;

            case 1:
                document.write("Today is Monday");
                break;

            case 2:
                document.write("Today is Tuesday");
                break;

            case 3:
                document.write("Today is Wednesday");
                break;

            case 4:
                document.write("Today is Thursday");
                break;

            case 5:
                document.write("Today is Friday");
                break;

            case 6:
                document.write("Today is Saturday");
                break;

            default:
                document.write("Unknown day");
        }

