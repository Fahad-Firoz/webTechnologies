

<?php

$name = "Fahad";          // String
$age = 22;                // Integer
$height = 5.9;            // Float
$isStudent = true;        // Boolean

// arithmetic operations
$sum = $age + $height;
$difference = $age - $height;
$product = $age * $height;
$quotient = $age / $height;

// Output 
echo "<h3>Arithmetic Operations</h3>";
echo "Sum using echo: " . $sum . "<br>";
print "Sum using print: " . $sum . "<br>";
echo "Difference: " . $difference . "<br>";
echo "Product: " . $product . "<br>";
echo "Quotient: " . $quotient . "<br>";

// var_dump = type and value
echo "<h3>Variable Types and Values</h3>";
var_dump($name);
echo "<br>";
var_dump($age);
echo "<br>";
var_dump($height);
echo "<br>";
var_dump($isStudent);
?>

