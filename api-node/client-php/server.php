<?php
$albums = file_get_contents('http://localhost:4200/albums');
$members = file_get_contents('http://localhost:4200/members');
$concertTours = file_get_contents('http://localhost:4200/concertTours');
$labels = file_get_contents('http://localhost:4200/labels');

echo $albums;
echo $members;
echo $concertTours;
echo $labels;
