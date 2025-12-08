<?php
echo "<h3>Sum Function</h3>";
function sum($a, $b) {
    return $a + $b;
}
echo "Sum: " . sum(10, 20) . "<br>";

echo "<h3>Factorial Function</h3>";
function factorial($n) {
    if ($n <= 1) return 1;
    return $n * factorial($n - 1);
}
echo "Factorial of 5: " . factorial(5) . "<br>";

echo "<h3>Prime Check Function</h3>";
function is_prime($n) {
    if ($n <= 1) return false;
    for ($i = 2; $i <= sqrt($n); $i++) {
        if ($n % $i == 0) return false;
    }
    return true;
}
echo "Is 7 prime? " . (is_prime(7) ? "Yes" : "No") . "<br>";
echo "Is 10 prime? " . (is_prime(10) ? "Yes" : "No") . "<br>";
?>
