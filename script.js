
        //Declaring array with 5 elements
        var question001 = ["The external JavaScript file contain the script tag",
            "It's not possible to nest functions in JavaScript.",
            "Alert is one of the Popup boxes available in JavaScript",
            "Blur function cannot remove the focus from the specified object",
            "JavaScript is not case sensitive",
           
        ];

       //Declaring options for correct answers for the 5 questions.
       
        var options001 = ["<button class=buttons001 onclick=q1i()>True</button><br /><br /><button class=buttons001 onclick=q1c()>False</button>"];
        var options002 = ["<button class=buttons001 onclick=q2c()>False</button><br /><br /><button class=buttons001 onclick=q2i()>True</button>"];
        var options003 = ["<button class=buttons001 onclick=q3c()>True</button><br /><br /><button class=buttons001 onclick=q3i()>False</button>"];
        var options004 = ["<button class=buttons001 onclick=q4i()>True</button><br /><br /><button class=buttons001 onclick=q4c()>False</button>"];
        var options005 = ["<button class=buttons001 onclick=q5c()>False</button><br /><br /><button class=buttons001 onclick=q5i()>True</button>"];
        
        // Declaring variables for score and question-count
        var a = 0;
        a++;
        var score = 0;
        score++;

       //Timer is set to 25 seconds
        function begin001() {
            Timer = 25;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
        }
        // function (q1c) for Question 1 (q1) and Correct(c)
        function q1c() {
            message003.innerHTML= "Correct. The external JavaScript does not contain script tag";
            message002.innerHTML = "";
            score001.innerHTML = score++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q1i() {
            message003.innerHTML = "Incorrect. The external JavaScript does not contain script tag";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q2c() {
            message003.innerHTML = "Correct. It's possible to nest functions in JavaScript.";
            message002.innerHTML = "";
            score001.innerHTML = score++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q2i() {
            message003.innerHTML = "Incorrect. It's possible to nest functions in JavaScript";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q3c() {
            message003.innerHTML = "Correct. Alert is one of the Popup boxes available in JavaScript";
            message002.innerHTML = "";
            score001.innerHTML = score++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q3i() {
            message003.innerHTML = "Incorrect. Alert is one of the Popup boxes available in JavaScript";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q4c() {
            message003.innerHTML = "Correct. Blur is used to remove the focus from the specified object";
            message002.innerHTML = "";
            score001.innerHTML = score++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q4i() {
            message003.innerHTML = "Incorrect. Blur is used to remove the focus from the specified object";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q5c() {
            message003.innerHTML = "Correct. JavaScript is case sensitive";
            message002.innerHTML = "";
            score001.innerHTML = score++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // function (q1c) for Question 1 (q1) and Correct(c)
        function q5i() {
            message003.innerHTML = "Incorrect. JavaScript is case sensitive";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        

        function next001() {
            if (a == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            } else {
                window.clearInterval(update);
                Timer = "-";
                message001.innerHTML = "End of Quiz";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";

           
        
            }
        }

        //Time is decreased by 1 until it reach 0
        //If reach 0, it displays, "Time up"
        function timer001() {
            Timer = Timer - 1;
            if (Timer < 25) {
                time001.innerHTML = Timer;
            }

            if (Timer < 1) {
                window.clearInterval(update);
                message001.innerHTML = "Time's up";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }
        }

        update = setInterval("timer001()", 1000);

        function repeat001() {
            location.reload();
        }