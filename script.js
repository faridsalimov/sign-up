$(document).ready(function() {
    $("input").blur(function() {
        if ($(this).val().trim() == "") {
            $(this).css("border", "1px solid red");
        }

        else {
            $(this).css("border", "1px solid green");
        }
    })

    $("#password").on("input", function() {
        var password = $(this).val().trim();
        var operators = ["!", "@", "$", "%", "&", "*", ".", "#", "^", "+", "-", "/"];
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var hasNumber = false;

        $("#weak").css("background-color", "rgb(220, 220, 220)");
        $("#fair").css("background-color", "rgb(220, 220, 220)");
        $("#good").css("background-color", "rgb(220, 220, 220)");
        $("#strong").css("background-color", "rgb(220, 220, 220)");

        if (password.length < 8 && password.length >= 1) {
            $("#weak").css("background-color", "red");
        }

        if (password.length >= 8) {
            $("#weak").css("background-color", "red");
            $("#fair").css("background-color", "orange");
        }

        if (password.length > 8) {
            for (let i = 0; i < numbers.length; i++) {
                if (password.includes(numbers[i])) {
                    $("#good").css("background-color", "blue");
                    hasNumber = true;
                    break;
                }

                hasNumber = false;
            }
        }

        if (password.length > 8 && hasNumber) {
            for (let i = 0; i < operators.length; i++) {
                if (password.includes(operators[i])) {
                    $("#strong").css("background-color", "green");
                    break;
                }
            }
        }
    })

    $("#sign-up-button").click(function() {
        let name = $("#name").val();

        if ($("#name").val().trim() != "" || $("#email").val().trim() != "" || $("#password").val().trim() != "") {
            if ($("#email").val().includes("@gmail.com")) {
                var fair = $("#fair").css("background-color");
                if (fair != "orange") {
                    alert(`Welcome ${name}!`);
                    location.reload();
                }
    
                else {
                    alert("Please enter a strong password.");
                }
            }

            else {
                alert("Please enter a correct email.");
            }
        }

        else {
            alert("Please fill in the required sections.");
        }
    })
})