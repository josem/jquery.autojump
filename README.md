## jQuery AutoJump

Jump automatically after certain characters in an input or textarea to the next field.

## Demo
![Demo](/demo/demo.gif)

## Download
[Download latest version (0.3.0)](https://github.com/josem/jquery.autojump/archive/v0.3.0.zip)

## Usage

1. Include jQuery (1.7+):

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include autojump plugin's code:

	```html
	<script src="dist/jquery.autojump.min.js"></script>
	```
3. Set the data attribute `autojump` to the number of characters you expect in your inputs and textareas.

	```
	<input type="text" name="field1" id="field1" data-autojump="5">
  	```
	

4. Call the plugin:

	```javascript
	$("form").autoJump();
	```

## Feedback?
Please, create an issue [here](https://github.com/josem/jquery.autojump/issues).

## History

Check [releases](https://github.com/josem/jquery.autojump/releases) for detailed changelog.

## Credits
I have used the great [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate) to create this project.

## License

[MIT License](https://github.com/josem/jquery.autojump/blob/master/LICENSE)
