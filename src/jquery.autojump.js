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
        fields: [],
        index: 0,

        init: function () {
            this.fields = $(this.element).find("input,select,textarea");
            $(this.fields).on("keypress paste", {object: this}, this.controlKeyStrokes);
        },

        controlKeyStrokes: function (e) {
            var object = e.data.object;
            var currentLength = $(this).val().length;
            var maxLength = $(this).data("autojump");

            if (currentLength >= maxLength) {
                e.preventDefault();
            }

            if (currentLength >= maxLength - 1) {
                $(this).one("keyup", function() {
                    $(object.fields[++object.index]).focus();

                    if ($(object.fields[object.index]).is("input[type=submit]")) {
                        object.index = 0;
                    }
                });
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
