---
id: comments
title: Comments
---

## Basics

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/* ... */` for inline or multiline comments.

Both styles of comments can be used simultaneously.

### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Example:

```4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
End for
```

### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Example:

```4d
For /* inline comment */ ($vCounter;1;100)
	...
End for
```

- **Multiline comment blocks** allow commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Example:

```4d
For ($vCounter;1;100)
/*
comments  
	/*
	other comments
	*/
*/
...
End for
```

## Syntax description comments

Comments can describe the syntax of a method or a class function or constructor. In the 4D code editor, comments at the beginning of a method are displayed in its [Help tips](../code-editor/write-class-method.md#help-tips). For a class function or constructor, comments are displayed with the signature in 4D code assistance and in VS Code (completion details, help tips, and signature help).

- For a method, write the comment block in the first lines of the method.
- For a class function or constructor, write the comment block on the first line of its block, immediately above the `Function` or `Class constructor` declaration.


The comment block follows these rules:

- It is made of `//` lines and/or a `/* */` block. Each line of a `/* */` block is handled like a `//` line, and the `/*` and `*/` markers are not displayed.
- For a class function or constructor, it must be placed immediately above the declaration. A blank line between the comment block and the declaration breaks the association: only the signature is displayed.
- Each comment block is associated only with the next declaration, even when it is written right after the code of the previous function.
- Only the saved code is read: after you edit a comment, the code assistance shows the new text once the class is saved.
- The text is displayed as plain text: Markdown markers such as `**` or `*` are shown as written.

Each line of the block is interpreted according to its beginning:

|Line|Meaning|
|---|---|
|`// <text>`|Description of the method or function. Several description lines are combined in order, with their line breaks. Empty `//` lines at the start or at the end of the block are ignored.|
|`// $name: <text>`|Description of the *$name* parameter.|
|`// {$name}: <text>`|Description of the *$name* parameter, marked as optional for MCP.|
|`// ...: <text>`|Description of the [variadic parameters](parameters.md#declaring-variadic-parameters) (`... : Type`).|
|`// param: $name <text>`, `// param: {$name} <text>`, `// param: ... <text>`|Same as `$name:`, `{$name}:`, and `...:` lines.|
|`// MCP: <text>`|Description of the function for MCP only. Several `MCP:` description lines are combined in order.|
|`// MCP: @tag {@tag}` or `// @tag {@tag}`|MCP behavior tags (see [MCP tool metadata](../WebServer/mcp-server.md#mcp-tool-metadata)). The line must contain only supported tags, otherwise it is a description line.|

A `$name:` or `{$name}:` line is a parameter description only if *$name* is a parameter of the function signature. Otherwise, it is a description line (for example `// $120: price in dollars`). A `...:` line is a parameter description only if the function has variadic parameters.

The code assistance displays the description lines, then a blank line, then the parameter lines as written. `MCP:` lines are never displayed in the code assistance.

When you [compile](../Project/compiler.md) the project, the compiler reports a [warning](../Project/compiler.md#warnings-on-function-comments) for each parameter of the signature that has no `$name:` or `{$name}:` line in the comment block, and for contradictory MCP behavior tags. Functions without a comment block are not checked.

:::note

Comment blocks are supported in project classes (including shared and singleton classes) and in component classes. For compiled components, the descriptions are provided by the [syntax file](../Extensions/develop-components.md#code-completion-for-compiled-components).

:::


#### Example 1

You want to document a function and its parameter so that they are displayed in the code editor:

```4d
// Class: Invoice

// Returns the price with taxes
// The rate is a percentage
// $rate: tax rate to apply (20 for 20%)
Function priceWithTaxes($rate : Real) : Real
	return This.price*(1+($rate/100))
```

When you type `$invoice.priceWithTaxes(` in a method, the help displays the signature with:

```
Returns the price with taxes
The rate is a percentage

$rate: tax rate to apply (20 for 20%)
```

#### Example 2

You want to document a class constructor with a `/* */` block:

```4d
// Class: Counter

/*
Creates a counter starting at a value
$start: initial value of the counter
*/
Class constructor($start : Integer)
	This.value:=$start
```

The description and the `$start:` line are displayed when you type `cs.Counter.new(`.


## Other specific comments

### Code navigation markers

Code navigation markers such as `MARK:`, `TODO:`, and `FIXME:` are inserted through comments. See [Manual tagging](../code-editor/write-class-method.md#manual-tagging).

### MCP tool

When a function is published as an MCP tool, its comments can also provide [MCP tool metadata](../WebServer/mcp-server.md#mcp-tool-metadata), including MCP behavior tags.

The following tags are supported:

|Line|Meaning|
|---|---|
|`// {$name}: <text>`|Description of the *$name* parameter, marked as optional for MCP.|
|`// MCP: <text>`|Description of the function for MCP only. Several `MCP:` description lines are combined in order.|
|`// MCP: @tag {@tag}` or `// @tag {@tag}`|MCP behavior tags (see [MCP tool metadata](../WebServer/mcp-server.md#mcp-tool-metadata)). The line must contain only supported tags, otherwise it is a description line.|





## Warnings on comments

When a class function or a class constructor has a comment block above its declaration, the compiler checks it and reports a warning:

- for each parameter of the signature that is not documented by a `$name:` or `{$name}:` line (variadic parameters are not checked),
- when the `MCP:` behavior tags contradict each other (`@readOnly`, `@destructive`, and `@additive` used together). In this case, the corresponding hints are omitted from the [MCP tool metadata](../WebServer/mcp-server.md#mcp-tool-metadata).

Functions without a comment block are not checked. For example, the following function generates a warning for the *$factor* parameter and a warning for the `@readOnly` and `@destructive` tags:

```4d
// Scales a value by a factor
// MCP: @readOnly @destructive
// $value: value to scale
Function scale($value : Real; $factor : Real) : Real
	return $value*$factor
```

