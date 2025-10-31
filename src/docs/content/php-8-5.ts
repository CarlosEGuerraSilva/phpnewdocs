export const PHP_8_5_SNIPPETS = {
	pipeOperator: `<?php
$result = [1, 2, 3]
    |> array_map(fn($x) => $x * 2, $$)
    |> array_sum($$);

echo $result; // 12
?>`,

	uriExtension: `<?php
use Uri\\Rfc3986\\Uri;

$uri = new Uri('https://example.com/path?key=value');
echo $uri->getHost(); // example.com
?>`,

	arrayFirstLast: `<?php
$values = [10, 20, 30];

echo array_first($values); // 10
echo array_last($values);  // 30
?>`,

	noDiscardAttribute: `<?php
#[NoDiscard]
function riskyOperation(): bool {
    return false;
}

riskyOperation(); // Emits a warning: Return value of function riskyOperation() must not be discarded
?>`,

	enhancedClone: `<?php
class User {
    public function __construct(public string $name, public int $age) {}
}

$john = new User('John', 30);
$clone = clone($john, ['age' => 31]);

print_r($clone);
// User Object ( [name] => John [age] => 31 )
?>`,

	attributesOnConstants: `<?php
class Status {
    #[Deprecated('Use NEW instead')]
    public const OLD = 1;

    #[MyAttr]
    public const NEW = 2;
}
?>`,

	closuresInConstants: `<?php
const SQUARE = fn($x) => $x * $x;

echo SQUARE(5); // 25
?>`,

	intlListFormatter: `<?php
$list = new IntlListFormatter('en', IntlListFormatter::TYPE_AND);

echo $list->format(['apple', 'banana', 'cherry']); 
// apple, banana, and cherry
?>`,

	getHandlers: `<?php
var_dump(get_error_handler());
var_dump(get_exception_handler());
?>`,

	cloneFunction: `<?php
class User {
    public function __construct(public string $name, public string $role) {}
}

$user = new User('Alice', 'editor');
$admin = clone($user, ['role' => 'admin']);

print_r($admin);
// User Object ( [name] => Alice [role] => admin )
?>`,
}
