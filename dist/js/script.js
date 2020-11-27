
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
        requete.open('GET', this.baseUrl + 'movie/now_playing?api_key=' + this.apiKey + '&language' + this.lang + '&page=1');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTtcclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxufSk7XHJcblxyXG5jbGFzcyBNb3ZpZURCIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IE1vdmllREIoKVwiKTtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IFwiMjU0NzdlMGIwZmRkOWEzM2Q1MzY0YTM5MGYyMWZlODhcIjtcclxuICAgICAgICB0aGlzLmxhbmcgPSBcImZyLUNBXCI7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL1wiO1xyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCI7XHJcbiAgICAgICAgdGhpcy5uYkZpbG0gPSA4O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVEZXJuaWVyRmlsbSgpe1xyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91ckRlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbignR0VUJywgdGhpcy5iYXNlVXJsICsgJ21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9JyArIHRoaXMuYXBpS2V5ICsgJyZsYW5ndWFnZScgKyB0aGlzLmxhbmcgKyAnJnBhZ2U9MScpO1xyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldG91ckRlcm5pZXJGaWxtKGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZygncmV0b3VyRGVybmllckZpbG0nKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGFyZ2V0LnJlc3BvbnNlVGV4dCkucmVzdWx0cztcclxuICAgICAgICB0aGlzLmFmZmljaGVyRGVybmllckZpbG0oZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWZmaWNoZXJEZXJuaWVyRmlsbScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
