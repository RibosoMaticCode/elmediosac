<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "correo_destino@example.com";
  $subject = "Nuevo mensaje del formulario de contacto";
  $body = "Nombres: " . $_POST["nombres"] . "\n" .
          "Documento: " . $_POST["documento"] . "\n" .
          "Correo: " . $_POST["correo"] . "\n" .
          "Detalles: " . $_POST["detalles"];

  $headers = "From: formulario@example.com" . "\r\n" .
             "Reply-To: " . $_POST["correo"] . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(array("message" => "Mensaje enviado correctamente"));
  } else {
    http_response_code(500);
    echo json_encode(array("message" => "Error al enviar el mensaje"));
  }
} else {
  http_response_code(405);
  echo json_encode(array("message" => "Método no permitido"));
}
