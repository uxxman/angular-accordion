angular-accordion
=================

> A simple and light weight angular directive for adding accordion UI element.

Built using core angular and css transitions. Works smoothly on desktop and mobile browsers without any flickering in transitions. No jquery, bootstrap or any other dependency required.

## Usage

Include the required libraries
```html
<!-- For simple styling and transitions, include "angular-accordion.css". You can edit styles to meed your look and feel -->
<link rel="stylesheet" type="text/css" href="../css/ang-accordion.css">

<!-- Then include "angular.js" and "angular-accordion.js" to your page -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.15/angular.min.js"></script>
<script type="text/javascript" src="../js/ang-accordion.js"></script>
```

Declare a dependency on the `angAccordion` module
``` javascript
var app = angular.module('app', ['angAccordion']);
```
That's all you need to start adding accordion UI element to your page. Project files are also available through your favourite package manager:
* **Bower**: `bower install ang-accordion`

## Html Markup

```html
<ang-accordion>
    <collapsible-item item-title="Some Heading">
        <div>This is regular html code</div>
    </collapsible-item>

    ... <!-- More collapsible items -->
</ang-accordion>
```

## Options
+ **Open one collapsible at a time:**
By default all collapisible items open/close irrespective of other collapsible items. If you want to open only one collapsible item at a time, use the following option

```html
<ang-accordion one-at-a-time="true">
    ...
</ang-accordion>
```

+ **Set collapsible item to be initially openned:**
If you want collapsible item to be open when initially rendered on the page, use this option

```html
<collapsible-item item-title="Heading 1" initially-open="true">
    ...
</collapsible-item>
```

+ **Set right/down icon and its position:**
You can add open and collapsed icon to show on title of a collapsible item and also define its position (defeault is right).

```html
<ang-accordion icon-position="left" close-icon-url="../img/right-icon.png" open-icon-url="../img/down-icon.png">
    ...
</ang-accordion>
```
If you are using bootstrap Glyphicons or any other font icons, you can use them as icon in title as well.

```html
<ang-accordion close-icon-class="fa fa-chevron-right" open-icon-class="fa fa-chevron-down">
    ...
</ang-accordion>
```
+ **Disabling a collapsible item:**
You can also disable a collapsible item so, the user cannot open it.

```html
<collapsible-item item-title="Heading 1" item-disabled="true">
    ...
</collapsible-item>
```

## Author

**Muhammad Usman** (http://github.com/sherwaniusman)

## Copyright and license

    The MIT License

	Copyright (c) 2014 Will Palahnuk

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
