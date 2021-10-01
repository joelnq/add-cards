import { getNewCard } from './addCard.js';

const formTag = document.querySelector( "form" );

const addNewCard = ( event ) => {
    event.preventDefault();
    document.querySelector( "#gallery" ).appendChild( getNewCard() );
}

formTag.addEventListener( "submit", addNewCard, false );
