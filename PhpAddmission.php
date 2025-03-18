<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $degree_program = $_POST['degree_program'];
    $address = $_POST['address'];
    $area_of_interest = $_POST['area_of_interest'];
    $graduation_year = $_POST['graduation_year'];

    // TODO: Process the data (e.g., save to database, send email)

    // Redirect or display a success message
    header("Location: thank_you.html");
    exit();
} else {
    // Redirect to the form if accessed directly
    header("Location: rfi.html");
    exit();
}
?>
