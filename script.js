// set the correct username and password combination below
let correctUsername = "code_nation_member3";
let correctPassword = "codenation2453";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
	if(username === correctUsername && password === correctPassword){
        $(".message").text("Success");
    } else if(username=== correctUsername && password !== correctPassword){
        $(".message").text("Wrong Password");
    } else if(username !== correctUsername && password === correctPassword){
        $(".message").text("Wrong Username");
    } else if(username === "" || password === ""){
        $(".message").text("Enter Username and Password");
    }


});