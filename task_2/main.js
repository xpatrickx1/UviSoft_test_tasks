$( document ).ready( function () {
    $( 'tr' ).click( function ( e ) {
        if ( e.target.tagName !== 'TH' ) {
            $( '.user' ).removeClass( 'active' );
            $( '.name__header' ).addClass( 'active' ).attr( 'colspan', '3' );
            $( '.phone__header, .email, .user__skype, .user__comment' ).addClass( 'hide' );
            $( '.details' ).addClass( 'cell_show' ).attr( 'rowspan', '0' );
            $( '.details__header' ).addClass( 'cell_show' );
            $( this.closest( '.user' ) ).addClass( 'active' );
            $( '.user > .user__cell' ).addClass( 'open__td' );
            $( '.user' ).addClass( 'open__tr' );
            $('.close').css('display', 'block');
            $.getJSON( 'data.json', ( data ) => {
                data.forEach( ( i ) => {
                    if ( i.name == $( this ).find( '.user__name' ).html() ) {
                        let details = []
                        for ( let [ key, value ] of Object.entries( i.details ) ) {
                            details.push(`${key}: ${value}`)
                        }
                        $( '.details' ).html( details.join('<br>') )
                    }
                } )
            } )
        }
    } );
    $('.close').click(function(){
        $('.close').css('display', 'none');
        $( '.user' ).removeClass( 'active open__tr' );
        $( '.name__header' ).removeClass( 'active' ).attr( 'colspan', '1' );
        $( '.phone__header, .email, .user__skype, .user__comment' ).removeClass( 'hide' ).addClass( 'show' );
        $( '.details, .details__header' ).removeClass( 'cell_show' );
        $( '.user > .user__cell' ).removeClass( 'open__td' );
    });
} );
