import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['/explorar/libros']);
  }

  ngOnInit() {
  }

}
