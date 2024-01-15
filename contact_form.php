<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $subject = " *Job Opportunity* New Contact Form Submission";
        $to = "thn018@ucsd.edu";
        $headers = "From $email";

        if(mail($to,$subject,$message,$headers)){
            echo "email sent";
        } else {
            echo "fail";
        }
    }
?>
