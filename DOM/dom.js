<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <img id="img1" src="./pic/pic.png" alt="./pic/pic.png" width="200px" height="200px" style="border-radius: 50%; object-fit: cover;">

    <br>

    <button onclick="changeSrc('img1')">Click Me</button>

    <br>

    <p id="p1">This text will change color</p>

    <button onclick="changeColor ('p1')">Change Me</button>
    


    <script>

        // DOM - Document Object Model manipulation
        
        function changeSrc(id){
            document.getElementById(id).src = './pic/dog.gif';
        }

        function changeColor(id){
            document.getElementById(id).style.color = 'red';
        }

    </script>


</body>
</html>
