import { Component, OnInit, HostBinding } from '@angular/core';

import { FilmsService } from '../../services/films.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  movies: any = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(){
    this.filmsService.getMovies().subscribe(
      res => {
        this.movies = res;
      },
      err => console.error(err)
    );
  }
  deleteFilm(id: string){
    this.filmsService.deleteFilm(id).subscribe(
      res => {
        console.log(res);
        this.getMovies();
      },
      err => console.log(err)
    );
  }
}
