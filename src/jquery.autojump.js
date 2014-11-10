// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
		var pluginName = "autoJump",
				defaults = {
				propertyName: "value"
		};

		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		$.extend(Plugin.prototype, {
				init: function () {
          // You already have access to the DOM element and
          // the options via the instance, e.g. this.element
          // and this.settings
          // you can add more functions like the one below and
          // call them like so: this.yourOtherFunction(this.element, this.settings).
          $(this.element).on('keypress paste',this.controlKeyStrokes);
				},
        controlKeyStrokes: function (event) {
          var currentLength = $(this).val().length;
          var maxLength = $(this).data('autojump');

          if (event.type == 'keypress') {
            maxLength -= 1;
          }

          if (currentLength >= maxLength) {
            $(this).nextAll('input,textarea').focus();
          }
        }
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );
