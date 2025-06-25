// ========================================================================
// Données de Départ
// ========================================================================
const data = {
    books: [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            year: 1937,
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
        },
    ],
    movies: [
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
        },
        {
            title: "Parasite",
            director: "Bong Joon-ho",
            year: 2019,
        },
    ],
    albums: [
        {
            title: "Thriller",
            artist: "Michael Jackson",
            year: 1982,
        },
        {
            title: "Back in Black",
            artist: "AC/DC",
            year: 1980,
        },
    ],
};
// ========================================================================
// Exercice 1 : Typage de Constantes Simples
// ========================================================================
// Objectif : Comprendre et appliquer les types de base en TypeScript.
//
// 1. Créez une constante "appName" de type string contenant le nom de l'application.
// 2. Créez une constante "isOnline" de type boolean indiquant si l'application est connectée.
// 3. Créez une constante "maxItems" de type number représentant un maximum autorisé.
const appName = "Mon application";
const isOnline = true;
const maxItems = 10;
// ========================================================================
// Exercice 4 : Fonction d’Affichage Contextuel
// ========================================================================
// Objectif : Créez une fonction qui adapte son message selon le type d’objet.
//
// 1. Créez une fonction "displayItemDetails" qui accepte un objet de type
//    Book, Movie ou Album (vous pouvez utiliser un type union).
// 2. La fonction doit afficher un message personnalisé selon le type d'objet.
//    Exemples :
//     - "Livre : The Hobbit par J.R.R. Tolkien (1937)"
//     - "Film : Inception réalisé par Christopher Nolan (2010)"
//     - "Album : Thriller par Michael Jackson (1982)"
function displayItemDetails(item) {
    if ("author" in item) {
        console.log(`Livre : ${item.title} par ${item.author} (${item.year})`);
    }
    else if ("director" in item) {
        console.log(`Film : ${item.title} réalisé par ${item.director} (${item.year})`);
    }
    else if ("artist" in item) {
        console.log(`Album : ${item.title} par ${item.artist} (${item.year})`);
    }
    else {
        console.log("Type de média inconnu");
    }
}
// ========================================================================
// Exercice 5 : Boucle sur Tous les Éléments
// ========================================================================
// Objectif : Utiliser la fonction "displayItemDetails" avec tous les tableaux.
//
// 1. Parcourez tous les tableaux de "data" avec des boucles forEach.
// 2. Appelez "displayItemDetails" pour chaque élément rencontré
data.albums.forEach((album) => {
    displayItemDetails(album);
});
data.movies.forEach((movie) => {
    displayItemDetails(movie);
});
data.books.forEach((book) => {
    displayItemDetails(book);
});
export {};
