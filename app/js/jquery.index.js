( function(){

    $( function(){

        $( '.mobile-menu' ).each( function(){
            new Menu( $( this ) );
        } );

        $( '.language' ).each( function(){
            new Language( $( this ) );
        } );

        $( '.promo__form' ).each( function(){
            new Promo( $( this ) );
        } );

        $( '.form' ).each( function(){
            new SendForm( $( this ) );
        } );

        $( '.popup__form' ).each( function(){
            new SendPopupForm( $( this ) );
        } );

    } );

    var Menu = function( obj ){

        //private properties
        var _obj = obj,
            _btn = $( '.mobile-menu-btn' );

        //private methods
        var _constructor = function(){
                _onEvents();
            },
            _onEvents = function(){

                _btn.on( 'click', function() {

                    if ( $( this).hasClass( 'close' ) ){
                        _closeMenu();
                    } else {
                        _openMenu();
                    }

                } );

            },
            _openMenu = function(){
                _btn.addClass( 'close' );
                _obj.addClass( 'visible' );
            },
            _closeMenu = function(){
                _btn.removeClass( 'close' );
                _obj.removeClass( 'visible' );
            };

        //public properties

        //public methods

        _constructor();

    };

    var Language = function( obj ){

        //private properties
        var _obj = obj,
            _btn = _obj.find( '.language__active'),
            _popup = _obj.find( '.language__popup'),
            _window = $( window );

        //private methods
        var _constructor = function(){
                _onEvents();
            },
            _onEvents = function(){

                _window.on( 'click', function() {
                    _closePopup();
                } );

                _obj.on( 'click', function( e ) {
                    e.stopPropagation( e );
                } );

                _btn.on( 'click', function() {

                    if ( _popup.hasClass( 'visible' ) ) {
                        _closePopup();
                    } else {
                        _openPopup();
                    }

                } );

            },
            _openPopup = function(){
                _popup.addClass( 'visible' );
            },
            _closePopup = function(){
                _popup.removeClass( 'visible' );
            };

        //public properties

        //public methods

        _constructor();

    };

    var Promo = function( obj ){

        //private properties
        var _obj = obj,
            _self = this,
            _input = _obj.find( 'input' );

        //private methods
        var _constructor = function(){
                _obj[ 0 ].obj = _self;
            },
            _openPopup = function(){

                var _site = _input.val(),
                    _popupTitle = $( '#popup__content-title' );


                _popupTitle.html( _site );

                $( '.popup' )[ 0 ].obj.show( 'order' );

            };

        //public properties

        //public methods
        _self.link = function () {
            _openPopup();
        };

        _constructor();

    };

    var SendForm = function( obj ){

        //private properties
        var _obj = obj,
            _self = this,
            _thanks = _obj.find( '.form__thanks'),
            _sendMore = _obj.find( '.form__more'),
            _inputs = _obj.find( 'input'),
            _textarea = _obj.find( 'textarea' );

        //private methods
        var _constructor = function(){
                _obj[ 0 ].obj = _self;
                _onEvent();
            },
            _onEvent = function(){

                _sendMore.on( 'click', function() {
                    _thanks.removeClass( 'visible' );
                    _inputs.val('');
                    _textarea.val('');
                    return false;
                } )

            },
            _ajaxSend = function(){

                $.ajax({
                    url: 'php/form.php',
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    data: {
                        form: 'true',
                        name: $('#form__name').val(),
                        email: $('#form__email').val(),
                        phone: $('#form__phone').val(),
                        message: $('#form__message').val()
                    },
                    success: function () {
                        _thankful();
                    },
                    error: function (XMLHttpRequest) {
                        if (XMLHttpRequest.statusText != 'abort') {
                            alert(XMLHttpRequest.statusText);
                        }
                    }
                });
                return false;

            },
            _thankful = function(){
                _thanks.addClass( 'visible' );
            };

        //public properties

        //public methods
        _self.send = function () {
            _ajaxSend();
        };

        _constructor();

    };

    var SendPopupForm = function( obj ){

        //private properties
        var _obj = obj,
            _self = this,
            _thanks = _obj.find( '.form__thanks'),
            _sendMore = _obj.find( '.form__more'),
            _inputs = _obj.find( 'input'),
            _textarea = _obj.find( 'textarea' );

        //private methods
        var _constructor = function(){
                _obj[ 0 ].obj = _self;
                _onEvent();
            },
            _onEvent = function(){

                _sendMore.on( 'click', function() {
                    _thanks.removeClass( 'visible' );
                    _inputs.val('');
                    _textarea.val('');
                    return false;
                } )

            },
            _ajaxSend = function(){

                $.ajax({
                    url: 'php/form.php',
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    data: {
                        popupform: 'true',
                        name: $('#form__name').val(),
                        email: $('#form__email').val(),
                        phone: $('#form__phone').val(),
                        url: $('#form__url').val()
                    },
                    success: function () {
                        $( '.popup' )[ 0 ].obj.show( 'thanks' );

                        setTimeout( function() {
                            $( '.popup' )[ 0 ].obj.hide( 'thanks' );
                        }, 3000 );

                    },
                    error: function (XMLHttpRequest) {
                        if (XMLHttpRequest.statusText != 'abort') {
                            alert(XMLHttpRequest.statusText);
                        }
                    }
                });
                return false;

            },
            _thankful = function(){
                _thanks.addClass( 'visible' );
            };

        //public properties

        //public methods
        _self.send = function () {
            _ajaxSend();
        };

        _constructor();

    };

} )();