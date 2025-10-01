
        let x = 23.2134353523;
        let s;

        s = x.toPrecision();
        document.write(s + " type of: " + typeof (s) + "<br>");

        s = x.toPrecision(4);
        document.write(s + " type of: " + typeof (s) + "<br>");

        s = x.toPrecision(8);
        document.write(s + " type of: " + typeof (s) + "<br>");
