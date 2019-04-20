import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../../services/films.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getMovies().subscribe(
      res => {
        this.movies = res;
      },
      err => console.error(err)
    );
  }

}
