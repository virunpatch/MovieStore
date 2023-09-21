import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url : string = 'https://api.themoviedb.org/3';
  constructor(private http : HttpClient) { }

  getLatestMovie() : any {
    return this.http.get<any>(this.url+'movie/latest?api_key='+environment.api_key);
  }
  getPopularMovies() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'movie/popular?api_key='+environment.api_key);
  }
  getNowPlyingMovies() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'movie/now_plying?api_key='+environment.api_key);
  }
  getTopRatedMovies() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'movie/top_rated?api_key='+environment.api_key);
  }
  getUpComingMovies() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'movie/upcomming?api_key='+environment.api_key);
  }
  getTrendingMovies() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'trending?api_key='+environment.api_key);
  }
  getOriginals() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/discover/tv?api_key='+environment.api_key);
  }
}

