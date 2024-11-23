<?php
// Membaca testimonial dari file atau database
$testimonials = file('testimonials.txt', FILE_IGNORE_NEW_LINES);
foreach ($testimonials as $testimonial) {
    echo "<div class='testimonial-item'><p>" . htmlspecialchars($testimonial) . "</p></div>";
}
?>
