<?php
  if($_POST) {
    $to = "denjuve@mail.ru, info@sabiel.ru";
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $product = $_POST["product"];
    $gygrometer = $_POST["gygrometer"];
    $headers .= "Reply-To: The Sender <sabiel@domain.com>\r\n"; 
    $headers .= "Return-Path: The Sender <sabiel@domain.com>\r\n"; 
    $headers .= "From: The Sender <sabiel@domain.com>\r\n";  
    $headers .= "Organization: Sender Organization\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;

    if(isset($_POST["name"])) {
      $username =  'Имя : '.$name;
    }

    if(isset($_POST["email"])) {
      $usermail = 'Email : '.$email;
    }

    if(isset($_POST["product"])) {
      $userproduct = 'Товар : '.$product;
    }

    if(isset($_POST["gygrometer"])) {
      $usergygrometer = 'Гигрометр : '.$gygrometer;
    }

    $body =  $username. '<br>' .$usermail. '<br> Телефон: <b>' .$phone. '</b>' .'<br>' .$userproduct. '<br>' .$usergygrometer;

    $subject = "Sabiel";
    if(@mail($to, $subject, $body, $headers)) {
      $output = '<img src="img/svg/check.svg" class="form__thanks-img"><h2 class="title title--h2 title--thanks">Спасибо!</h2><div class="form__thanks-text">Ваша заявка была успешно принята. Наш менеджер свяжется с вами в ближайшее время.</div><button class="btn btn--thanks" data-fancybox-close><span>ОK</span></button>';
      die($output);
    } else {
      $output = '<h2 class="title title--h2">Заявка не отправлена!</h2>';
      die($output);
    }
  }
?>