<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add further processing or email sending logic here
    // For simplicity, we'll just echo the submitted data
    echo "Name: $name <br>";
    echo "Email: $email <br>";
    echo "Message: $message <br>";
} else {
    // Redirect or handle the case when the form is not submitted
    header("Location: index.html");
    exit();
}
?>