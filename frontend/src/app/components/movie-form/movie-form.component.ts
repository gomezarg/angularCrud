import { Component, OnInit, HostBinding } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { ActivatedRoute,Router } from '@angular/router';

import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  movie : Movie = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };
  edit: boolean = false;

  constructor(private filmsService: FilmsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.filmsService.getFilm(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.movie = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  saveNewFilm(){
    delete this.movie.created_at;
    delete this.movie.id;
    this.filmsService.saveFilm(this.movie)
      .subscribe(
        res=> {
          console.log(res);
          this.router.navigate(['/movies']);
      
        },

        err => console.error(err)
      )
  }
  updateFilm(){
    delete this.movie.created_at;
    this.filmsService.updateFilm(this.movie.id, this.movie)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/movies']);
      },
      err => console.log(err)
    );
  }
}
