import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latestMovie : any;
  popularMovie !: Movie;
  nowPlayMovie !: Movie;
  topRatedMovie !: Movie;
  upComingMovie !: Movie;
  traendingMovie !: Movie;
  originals !: Movie;

  constructor(private dataService : DataService){ }

  ngOnInit(): void {
    this.getLastestMovie();
    this.getPopulaMovie();
    this.getNowPlayMovie();
    this.getTopRatedMovie();
    this.getUpComingMovie();
    this.getTraendingMovie();
    this.getOriginals();
  }
  getLastestMovie(){
    this.dataService.getLatestMovie().subscribe((res: any) =>{
      this.latestMovie = this.changData(res);
      console.log(this.latestMovie);
    }, (err: any)=> {
      console.log('Not able to get lates movie.', err);
    })
  }
  changData(res: any): any {
    if(!res.backdrop_path) {
      res.backdrop_path = 'https://image.tmdb.org/t/p/originl'+res.poster_path+'?api_key='+environment.api_key;
    } else {
      res.backdrop_path = 'https://image.tmdb.org/t/p/originl'+res.backdrop_path+'?api_key='+environment.api_key;
    }
    return res;
  }

  getPopulaMovie(){
    this.dataService.getPopularMovies().subscribe(res => {
      this.popularMovie = this.modifyData(res);
      console.log(this.popularMovie);
    }, err => {
      console.log('Error hile fething popular movies.', err);
    })
  }

  getNowPlayMovie(){
    this.dataService.getNowPlyingMovies().subscribe(res => {
      this.nowPlayMovie = this.modifyData(res);
    }, err => {
      console.log('Error hile fething popular movies.', err);
    })
  }

  getTopRatedMovie(){
    this.dataService.getTopRatedMovies().subscribe(res => {
      this.topRatedMovie = this.modifyData(res);
    }, err => {
      console.log('Error hile fething popular movies.', err);
    })
  }


  getUpComingMovie(){
    this.dataService.getUpComingMovies().subscribe(res => {
      this.upComingMovie = this.modifyData(res);
    }, err => {
      console.log('Error hile fething popular movies.', err);
    })
  }

  getTraendingMovie(){
    this.dataService.getTrendingMovies().subscribe(res => {
      this.traendingMovie = this.modifyData(res);
    }, err => {
      console.log('Error hile fething popular movies.', err);
    })
  }

  getOriginals(){
    this.dataService.getOriginals().subscribe(res => {
      this.originals = this.modifyData(res);
    }, err => {
      console.log('Error hile fething popular movies.', err);
    })
  }

  modifyData(movies: Movie) : Movie {
    if(movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/originl'+element.backdrop_path+'?api_key='+environment.api_key;
        if(element.title){
          element.title = element?.name;
        }
      });
    }
    return movies;
  }
}
