//weekend or weekday using switch case statement        
        let date = new Date();
        let day = date.getDay();

        switch(day){
            case 5:
            case 6:
                document.write("Weekend" + "<br>");
                break;

            default:
                document.write("weekday" + "<br>");
        }
