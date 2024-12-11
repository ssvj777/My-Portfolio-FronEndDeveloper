<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email details
    $to = "ssvijay2807@gmail.com"; // Replace with your email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email subject and body
    $emailSubject = "New Message from $name: $subject";
    $emailBody = "You have received a new message from your website form:\n\n" .
                 "Name: $name\n" .
                 "Email: $email\n" .
                 "Subject: $subject\n\n" .
                 "Message:\n$message\n";

    // Send the email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
