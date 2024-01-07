<?php
    echo $_POST["name"].$_POST["email"].$_POST["message"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject = " *Job Opportunity* New Contact Form Submission";

    $mailheader = "From:".$name."<".$email.">\r\n";

    // Set the recipient email address
    $recipient = "thn018@ucsd.edu";

    mail($recipient, $subject, $message,$mailheader) or die("Error!");

    echo'
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/1ded1ed97d.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <title>Contact</title>
</head>
<body>
    <header>
        <nav class="navbar">    
            <ul class="navbar-nav" id="navbar">
                <li class="nav-item"><a href="/index.html">Home</a></li> 
                <li class="nav-item"><a href="/about.html">About</a></li> 
                <li class="nav-item"><a href="/work.html">Work</a></li> 
                <li class="nav-item"><a href="/contact.html">Contact</a></li> 
                <div class="switchMode">
                    <i class="fa fa-sun-o" style="color: black"></i>
                </div>
                    <!-- light and dark mode (moon-o)-->
            </ul>
        </nav>
    </header>

    <main>
        <div class="page-container">
            <section class="contact">
                <div class="contact-heading">
                    <h1>Thank you for contacting me. I will get back to you as soon as possible</h1>
                </div>
            </section>
        </div>
    </main>
</body>
</html>
    ';
?>
