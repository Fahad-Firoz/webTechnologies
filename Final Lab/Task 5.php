<?php
echo "<h3>Book Class Definition</h3>";
class Book {
    public $title;
    public $author;
    public $year;

    function __construct($title, $author, $year) {
        $this->title = $title;
        $this->author = $author;
        $this->year = $year;
    }

    function getDetails() {
        return "Title: $this->title, Author: $this->author, Year: $this->year";
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function setAuthor($author) {
        $this->author = $author;
    }

    function setYear($year) {
        $this->year = $year;
    }
}

echo "<h3>Object Creation and Usage</h3>";
$book1 = new Book("1984", "George Orwell", 1949);
echo $book1->getDetails();
?>
