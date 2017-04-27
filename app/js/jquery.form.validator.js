( function(){

    $( function(){

        $.each( $( '.promo__form' ), function() {
            new FormValidation ( $( this ) );
        } );

        $.each( $( '.form__wrap' ), function() {
            new FormValidation ( $( this ) );
        } );

        $.each( $( '.popup__form' ), function() {
            new FormValidation ( $( this ) );
        } );

    });

    var FormValidation = function (obj) {
        var _obj = obj,
            _inputs = _obj.find( $( '[required]' ) );

        var _addEvents = function () {

                _obj.on( {
                    'submit': function(){

                        $.each( _inputs, function(){

                            var curItem = $( this ),
                                curType = curItem.attr( 'type' );

                            if ( curItem.val() == '' ) {

                                curItem.addClass( 'novalid' );
                                _obj.addClass( 'error' );

                            }
                            else if ( curType == 'email' ){

                                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

                                if ( pattern.test( curItem.val() ) == false ){

                                    curItem.addClass( 'novalid' );
                                    _obj.addClass( 'error' );

                                }

                            }
                            else if ( curType == 'url' ){
                                var pattern = /^([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

                                if ( pattern.test( curItem.val() ) == false ){

                                    curItem.addClass( 'novalid' );
                                    _obj.addClass( 'error' );

                                }

                            }

                        } );

                        if( _obj.hasClass( 'error' ) ){
                            return false;
                        }
                        else {

                            if ( _obj.hasClass( 'promo__form' ) ) {

                                $( '.promo__form' )[ 0 ].obj.link();
                                return false;

                            }

                            if ( _obj.hasClass( 'form__wrap' ) ) {

                                $( '.form' )[ 0 ].obj.send();
                                return false;

                            }

                            if ( _obj.hasClass( 'popup__form' ) ) {

                                $( '.popup__form' )[ 0 ].obj.send();
                                return false;

                            }

                        }

                    }
                } );

                _inputs.on( {
                    'focus': function ()  {

                        var curItem = $( this ),
                            closest = curItem.closest( 'fieldset' ),
                            innerInputs = closest.find( 'input' );

                        $( this ).removeClass( 'novalid' );

                        if( _obj.hasClass( 'error' ) ){
                            curItem.addClass( 'valid' );
                            curItem.removeClass( 'novalid' );

                            if ( innerInputs.length > 1 ){
                                if ( !closest.find( '.novalid' ).length ){
                                    closest.removeClass( 'error' );
                                }
                            } else {
                                _obj.removeClass( 'error' );
                            }
                        }

                    }
                } );

            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

} )();