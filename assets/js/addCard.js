const imgUrl = "https://source.unsplash.com/random/";

const getRandomNumber = () => {
    return Math.floor( Math.random() * 1000 );
};

export const getNewCard = () => {

    const etiquetaimagen = document.createElement( "img" );
    const titulotarjeta = document.createElement( "h3" );
    const cardParagraph = document.createElement( "p" );
    const cardContainer = document.createElement( "section" );
    const etiquetaimagenSection = document.createElement( "section" );
    const cardArticle = document.createElement( "article" );

    const lorem = document.createTextNode( "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas." );
    const title = document.createTextNode( "Titulo carta" );

    cardArticle.classList.add( "card" );
    etiquetaimagenSection.classList.add( "card-image" );
    cardContainer.classList.add( "card-container" );

    cardParagraph.appendChild( lorem );
    titulotarjeta.appendChild( title );
    etiquetaimagen.src = `${ imgUrl }${ getRandomNumber() }`;

    etiquetaimagenSection.appendChild( etiquetaimagen );

    cardContainer.appendChild( titulotarjeta );
    cardContainer.appendChild( cardParagraph );

    cardArticle.appendChild( etiquetaimagenSection );
    cardArticle.appendChild( cardContainer );
    return cardArticle;
};
