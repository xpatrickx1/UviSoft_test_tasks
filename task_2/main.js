$( document ).ready( function () {
    $( '.user' ).click( function () {
        $( '.user' ).removeClass( 'active' );
        $( '.name__header, .users__table, .details__table' ).addClass( 'active' );
        $( '.phone__header, .email, .user__skype, .user__comment' ).addClass( 'hide' );
        $( this.closest( '.user' ) ).addClass( 'active' );
        $( '.user > .user__cell' ).addClass( 'open__td' );
        $( '.user, .row__header' ).addClass( 'open__tr' );
        $( '.close' ).css( 'display', 'block' );
        $.getJSON( 'data.json', ( data ) => {
            data.forEach( ( i ) => {
                if ( i.name == $( this ).find( '.user__name' ).html() ) {
                    let details = [];
                    for ( let [ key, value ] of Object.entries( i.details ) ) {
                        details.push( `${key}: ${value}` )
                    }
                    $( '.details' ).html( details.join( '<br>' ) )
                }
            } )
        } )

    } );
    $( '.close' ).click( function () {
        $( '.close' ).css( 'display', 'none' );
        $( '.user, .row__header' ).removeClass( 'active open__tr' );
        $( '.name__header, .users__table, .details__table' ).removeClass( 'active' );
        $( '.phone__header, .email, .user__skype, .user__comment' ).removeClass( 'hide' ).addClass( 'show' );
        $( '.details, .details__header' ).removeClass( 'cell_show' );
        $( '.user > .user__cell' ).removeClass( 'open__td' );
    } );
} );
