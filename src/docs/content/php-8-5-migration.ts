export const PHP_8_5_MIGRATION_SNIPPETS = {
	switchSemicolonDeprecated: `<?php
switch ($value) {
    case 1; // Deprecated
        echo "One";
        break;
}
?>`,

	switchSemicolonRecommended: `<?php
switch ($value) {
    case 1: // Use colon
        echo "One";
        break;
}
?>`,

	castNamesDeprecated: `<?php
$value = (integer) $string;
$value = (boolean) $string;
$value = (binary) $string;
?>`,

	castNamesRecommended: `<?php
$value = (int) $string;
$value = (bool) $string;
$value = (string) $string;
?>`,

	shellExecDeprecated: `<?php
$output = \`ls -la\`;
?>`,

	shellExecRecommended: `<?php
$output = shell_exec('ls -la');
?>`,

	magicMethodsDeprecated: `<?php
class MyClass {
    public function __sleep() {
        return ['property'];
    }
    
    public function __wakeup() {
        // Initialization
    }
}
?>`,

	magicMethodsRecommended: `<?php
class MyClass {
    public function __serialize(): array {
        return ['property' => $this->property];
    }
    
    public function __unserialize(array $data): void {
        $this->property = $data['property'];
    }
}
?>`,

	nullArrayKeyDeprecated: `<?php
$array[null] = 'value';
?>`,

	nullArrayKeyRecommended: `<?php
$array[''] = 'value'; // Use empty string explicitly
?>`,

	debugInfoDeprecated: `<?php
public function __debugInfo() {
    return null;
}
?>`,

	debugInfoRecommended: `<?php
public function __debugInfo(): array {
    return [];
}
?>`,
}
