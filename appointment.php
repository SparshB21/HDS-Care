<?php
    $name = $_Post['name'];
    $phone number = $_Post['Phone Number'];
    $visitor_email = $_Post['email'];
    $category = $_Post['card_type'];
    $issue = $_Post['issue'];
    $date = $Post['date'];

    $email_from = "sparshb21@gmail.com";
    $email_subject = "New Form Submission";
    $email_body = "Name: "$name.\n.
            "Phone Number: "$phone number.\n.
            "Email Id: "$visitor_email.\n.
            "Category: "$category.\n.
            "Issue: "$issue.\n.
            "Date: "$date.\n.

    $to = "mirrorforlife21@gmail.com";
    $headers = "From: "$email_from \n \n;
    $headers .="Reply-To: "$visitor_email \n \n;

    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>