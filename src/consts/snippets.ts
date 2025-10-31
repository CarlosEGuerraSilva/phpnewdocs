export const SNIPPETS = {
	helloWorld: `<?php
echo "Hello world in PHP " . phpversion() . "!";
?>
// Hello World in PHP 8.5.0!
`,
	typedClassBefore: `<?php
class Config {
    const TIMEOUT = '10'; // Is this a string or int?
}
?>`,
	typedClassAfter: `<?php
class Config {
    public const int TIMEOUT = 10;
    public const string DEFAULT_DRIVER = 'redis';
}
?>
// Config::TIMEOUT = "foo"; // Throws a TypeError`,
	pipeOperatorBefore: `<?php
$input = "   hello php 8.5!   "
// Nested and hard to read
$result = ucwords(trim($input));
echo $result;
?>
// "Hello Php 8.5!"
`,
	pipeOperatorAfter: `<?php
$input = "   hello php 8.5!   ";

$result = $input
    |> 'trim'
    |> 'ucwords';
?>
// $result is "Hello Php 8.5!"`,
	noDiscardCode: `<?php
#[NoDiscard]
function calculateTotal(int $a, int $b): int
{
    return $a + $b;
}

// This will now generate a warning:
// "Result of function calculateTotal() is unused"
calculateTotal(5, 10);

// This is correct:
$total = calculateTotal(5, 10);
?>`,
	urlApiCode: `<?php
// New in PHP 8.5
use Uri\\WhatWg\\Url;

$url = Url::parse('https://example.com/path?query=1');

// Create a new, immutable object with a new host
$newUrl = $url->withHost('php.net');

echo $newUrl; // "https://php.net/path?query=1"

// Easily access components
echo $url->host; // "example.com"
echo $url->path; // "/path"
?>`,
};
