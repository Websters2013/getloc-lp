<?php

    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $message = $_GET['message'];
    $url = $_GET['url'];


    if ($_GET['form'] == true) {

        $name = $_GET['name'];
        $email = $_GET['email'];
        $phone = $_GET['phone'];
        $message = $_GET['message'];

    }

    if ($_GET['popupform'] == true) {

        $name = $_GET['name'];
        $email = $_GET['email'];
        $phone = $_GET['phone'];
        $url = $_GET['url'];

    }


    exit;
?>

