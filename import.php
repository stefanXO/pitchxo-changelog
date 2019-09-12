<?php

$file = file_get_contents("import.file");
$file = explode("===", $file);
array_pop($file);




foreach ($file as $key => $value) {
	$key . PHP_EOL;
	$key . PHP_EOL;
	$key . PHP_EOL;
	echo PHP_EOL;
	echo "====";
	echo PHP_EOL;
	$value = preg_replace('/^[ \t]*[\r\n]+/m', '', $value);
/*
layout: post
title: Welcome to LogChimp
date: 2018-08-11 23:59:59 +0530
category: New
author: Your Name
*/
	$v = explode("---", $value);
	$meta = trim($v[0]);
	if(strpos($meta, "layout:") === false) {
		$meta = "layout: post".PHP_EOL.$meta;
	}
	if(strpos($meta, "author:") === false) {
		$meta = $meta.PHP_EOL."author: Markus";
	}
	$meta = "---".PHP_EOL.trim($meta).PHP_EOL."---".PHP_EOL;

	$metaarray = explode(PHP_EOL, $meta);
	foreach ($metaarray as $mk => $mv) {
		if(strpos($mv, "date:") !== false) {
			$date = explode(": ", $mv)[1];
			$date = explode(" ", $date)[0];
		}
		if(strpos($mv, "title:") !== false) {
			$title = explode(": ", $mv)[1];
		}
	}

	$body = $v[1];
	$body = str_replace("<strong>", "**", $body);
	$body = str_replace("</strong>", "**", $body);
	$body = str_replace("<code>", "`", $body);
	$body = str_replace("</code>", "`", $body);
	$body = str_replace("<p>", "", $body);
	$body = str_replace("</p>", "   ".PHP_EOL, $body);

	$filename = $date . "-" . slugify($title) . ".md";

	//$body = strip_tags($v[1]);
	$text = "";
	$text .= $meta;
	$text .= PHP_EOL;
	$text .= trim($body);
	//$text .= PHP_EOL;
	//$text .= "====";
	//$text .= PHP_EOL;

	file_put_contents("_posts/".$filename, $text);
}


//print_r($file);


function slugify($text)
{
  // replace non letter or digits by -
  $text = preg_replace('~[^\pL\d]+~u', '-', $text);

  // transliterate
  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

  // remove unwanted characters
  $text = preg_replace('~[^-\w]+~', '', $text);

  // trim
  $text = trim($text, '-');

  // remove duplicate -
  $text = preg_replace('~-+~', '-', $text);

  // lowercase
  $text = strtolower($text);

  if (empty($text)) {
    return 'n-a';
  }

  return $text;
}