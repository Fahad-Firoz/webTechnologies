<?php
echo "<h3>For loop: 1 to 20</h3>";
for ($i = 1; $i <= 20; $i++) {
    echo $i . "<br>";
    if ($i == 5) break;
}

echo "<h3>While loop (even num): 1 to 20</h3>";
$j = 2;
while ($j <= 20) {
    echo $j . "<br>";
    $j += 2;
}

// Associative array
$fruits = [
    "apple" => "red",
    "banana" => "yellow",
    "grape" => "purple",
    "orange" => "orange"
];

echo "<h3>Foreach loop</h3>";
foreach ($fruits as $fruit => $color) {
    echo "$fruit is $color<br>";
}
?>
