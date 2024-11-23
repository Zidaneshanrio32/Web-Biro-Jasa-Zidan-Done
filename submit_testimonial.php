<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $testimonial = $_POST['testimonial'];
    $name = $_POST['name'];

    // Simpan testimonial ke file atau database (contoh menggunakan file)
    $file = fopen("testimonials.txt", "a");
    fwrite($file, "$name: $testimonial\n");
    fclose($file);

    header("Location: index.html#testimonials");
}
?>
