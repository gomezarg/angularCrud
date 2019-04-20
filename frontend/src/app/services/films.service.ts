import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/Movie';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  getMovies(){
    return this.http.get(`${this.API_URI}/films`);
  }
  getFilm(id: string){
    return this.http.get(`${this.API_URI}/films/${id}`);
  }
  deleteFilm(id: string){
    return this.http.delete(`${this.API_URI}/films/${id}`);
  }
  saveFilm(movie: Movie){
    return this.http.post(`${this.API_URI}/films`, movie);
  }
  updateFilm(id : string | number , updateFilm: Movie): Observable<Movie>{
    return this.http.put(`${this.API_URI}/films/${id}`, updateFilm);
    

  }
}
