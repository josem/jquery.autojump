/*
 *  jQuery AutoJump - v0.0.1
 *  A jQuery plugin to jump between fields automatically after certain characters.
 *  https://github.com/josem/autojum
 *
 *  Made by José M. Gilgado
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
		var pluginName = "autoJump";

		function Plugin (element) {
				this.element = element;
				this._name = pluginName;
				this.init();
		}

		$.extend(Plugin.prototype, {
				init: function () {
          $(this.element).on("keypress paste",this.controlKeyStrokes);
				},

        controlKeyStrokes: function (event) {
          var currentLength = $(this).val().length;
          var maxLength = $(this).data("autojump");

          if (event.type === "keypress") {
            maxLength -= 1;
          }

          if (currentLength >= maxLength) {
            $(this).nextAll("input,textarea").focus();
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
