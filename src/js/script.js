
document.addEventListener("DOMContentLoaded", function(){
    let connexion = new MovieDB();
    connexion.requeteDernierFilm();
});

class MovieDB {

    constructor(){
        console.log("new MovieDB()");
        this.apiKey = "25477e0b0fdd9a33d5364a390f21fe88";
        this.lang = "fr-CA";
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.nbFilm = 8;
    }

    requeteDernierFilm(){
        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourDernierFilm.bind(this));
        requete.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=25477e0b0fdd9a33d5364a390f21fe88&language=fr-CA&page=1');
        requete.send();
    }

    retourDernierFilm(event){
        console.log('retourDernierFilm');
        let target = event.currentTarget;
        let data = JSON.parse(target.responseText).results;
        this.afficherDernierFilm(data);
    }

    afficherDernierFilm(data){
        console.log('afficherDernierFilm');
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
}